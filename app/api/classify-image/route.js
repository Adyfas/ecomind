// app/api/classify-image/route.js - DETEKSI SAMPAH & NON-SAMPAH
export async function POST(request) {
  try {
    const { image } = await request.json();
    
    if (!image) {
      return Response.json({ error: "No image data provided" }, { status: 400 });
    }

    const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, 'base64');

    const formData = new FormData();
    const blob = new Blob([imageBuffer], { type: 'image/jpeg' });
    formData.append('image', blob);

    const imaggaResponse = await fetch('https://api.imagga.com/v2/tags', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(
          `${process.env.IMAGGA_API_KEY}:${process.env.IMAGGA_API_SECRET}`
        ).toString('base64')}`
      },
      body: formData
    });

    if (!imaggaResponse.ok) {
      const errorText = await imaggaResponse.text();
      throw new Error(`Imagga API error: ${imaggaResponse.status}`);
    }

    const data = await imaggaResponse.json();
    console.log('Imagga API Success - Tags found:', data.result.tags.length);
    
    // ✅ PROCESS UNTUK DETEKSI SAMPAH & NON-SAMPAH
    const detectionResult = detectWasteAndNonWaste(data.result.tags);
    
    return Response.json(detectionResult);

  } catch (error) {
    console.error('Image classification error:', error);
    return Response.json({ 
      classification: getFallbackClassification(),
      source: "error_fallback"
    });
  }
}

// ✅ FUNCTION BARU: DETEKSI SAMPAH & NON-SAMPAH
function detectWasteAndNonWaste(tags) {
  console.log('🔍 Detecting waste and non-waste items...');
  
  // ✅ KATEGORI SAMPAH KITA
  const wasteKeywords = {
    organic: ['food', 'fruit', 'vegetable', 'plant', 'leaf', 'wood', 'organic', 'banana', 'apple', 'orange', 'bread', 'egg', 'meat', 'rice', 'coffee', 'tea'],
    plastic: ['plastic', 'bottle', 'container', 'packaging', 'polyethylene', 'pet', 'water bottle', 'plastic bag', 'straw', 'wrapper'],
    paper: ['paper', 'cardboard', 'box', 'newspaper', 'magazine', 'carton', 'paperboard', 'tissue', 'napkin'],
    glass: ['glass', 'bottle', 'jar', 'transparent', 'wine bottle', 'beer bottle', 'glass container'],
    metal: ['metal', 'can', 'aluminum', 'steel', 'tin', 'soda can', 'beer can', 'metal container', 'foil'],
    electronic: ['electronic', 'device', 'battery', 'cable', 'phone', 'laptop', 'computer', 'charger'],
    hazardous: ['chemical', 'battery', 'medical', 'hazardous', 'aerosol', 'paint', 'oil']
  };

  // ✅ KATEGORI NON-SAMPAH (OBJECT YANG BUKAN SAMPAH)
  const nonWasteKeywords = [
    'person', 'man', 'woman', 'people', 'human', 'face', 'hand', 'child', 'baby',
    'animal', 'cat', 'dog', 'bird', 'pet', 'tree', 'sky', 'building', 'house',
    'car', 'vehicle', 'bicycle', 'motorcycle', 'furniture', 'chair', 'table',
    'clothing', 'shirt', 'pants', 'shoe', 'hat', 'bag', 'electronic', 'phone',
    'nature', 'water', 'mountain', 'beach', 'flower', 'grass'
  ];

  let wasteMatches = [];
  let nonWasteMatches = [];
  let allDetections = [];

  // ✅ ANALYZE SETIAP TAG
  tags.forEach(tag => {
    const tagName = tag.tag.en.toLowerCase();
    const confidence = Number(tag.confidence) / 100;
    
    let category = "unknown";
    let isWaste = false;
    let wasteType = "general";

    // ✅ CEK APAKAH INI SAMPAH
    for (const [type, keywords] of Object.entries(wasteKeywords)) {
      if (keywords.some(keyword => tagName.includes(keyword.toLowerCase()))) {
        category = "waste";
        isWaste = true;
        wasteType = type;
        break;
      }
    }

    // ✅ CEK APAKAH INI NON-SAMPAH
    if (!isWaste && nonWasteKeywords.some(keyword => tagName.includes(keyword.toLowerCase()))) {
      category = "non_waste";
      isWaste = false;
    }

    // ✅ BUAT DETECTION OBJECT
    const detection = {
      name: tag.tag.en,
      confidence: confidence,
      category: category,
      wasteType: isWaste ? wasteType : "not_waste",
      isWaste: isWaste
    };

    allDetections.push(detection);

    // ✅ PISAHKAN KE KELOMPOK
    if (isWaste) {
      wasteMatches.push({
        label: getWasteLabel(wasteType),
        type: wasteType,
        confidence: confidence,
        tag: tag.tag.en,
        impact: getDefaultImpact(wasteType)
      });
    } else if (category === "non_waste") {
      nonWasteMatches.push({
        label: tag.tag.en,
        type: "non_waste", 
        confidence: confidence,
        tag: tag.tag.en,
        impact: "This appears to be a non-waste item"
      });
    }
  });

  console.log(`📊 Results - Waste: ${wasteMatches.length}, Non-waste: ${nonWasteMatches.length}, All: ${allDetections.length}`);

  // ✅ TENTUKAN HASIL UTAMA (PRIMARY RESULT)
  let primaryResult;
  
  if (wasteMatches.length > 0) {
    // ✅ JIKA ADA SAMPAH, PAKAI YANG CONFIDENCE TERTINGGI
    const bestWaste = wasteMatches.reduce((best, current) => 
      current.confidence > best.confidence ? current : best
    );
    primaryResult = bestWaste;
    console.log('🎯 Primary: Waste item -', bestWaste.label);
    
  } else if (nonWasteMatches.length > 0) {
    // ✅ JIKA TIDAK ADA SAMPAH, PAKAI NON-SAMPAH TERTINGGI DENGAN CONFIDENCE 0%
    const bestNonWaste = nonWasteMatches.reduce((best, current) => 
      current.confidence > best.confidence ? current : best
    );
    primaryResult = {
      label: bestNonWaste.label,
      type: "non_waste",
      confidence: 0, // ✅ 0% CONFIDENCE UNTUK NON-SAMPAH
      impact: "This does not appear to be waste. Please scan waste items for analysis."
    };
    console.log('🎯 Primary: Non-waste item -', bestNonWaste.label);
    
  } else {
    // ✅ JIKA TIDAK ADA YANG COCOK, GUNAKAN DETECTION PERTAMA
    const firstDetection = allDetections[0];
    primaryResult = {
      label: firstDetection?.name || "Unknown Object",
      type: "unknown",
      confidence: firstDetection?.confidence || 0.5,
      impact: "Unable to determine if this is waste. Please try with clearer image."
    };
    console.log('🎯 Primary: Unknown item');
  }

  // ✅ RETURN COMPLETE ANALYSIS
  return {
    classification: primaryResult,
    analysis: {
      isWaste: wasteMatches.length > 0,
      wasteCount: wasteMatches.length,
      nonWasteCount: nonWasteMatches.length,
      totalDetections: allDetections.length
    },
    wasteMatches: wasteMatches.slice(0, 5),
    nonWasteMatches: nonWasteMatches.slice(0, 5),
    allDetections: allDetections.slice(0, 10),
    source: "imagga_advanced"
  };
}

// ✅ HELPER FUNCTIONS (SAMA)
function getWasteLabel(type) {
  const labels = {
    organic: "Organic Waste", plastic: "Plastic Item", paper: "Paper Product",
    glass: "Glass Container", metal: "Metal Object", electronic: "Electronic Waste",
    hazardous: "Hazardous Material", general: "General Waste"
  };
  return labels[type] || "General Waste";
}

function getDefaultImpact(type) {
  const impacts = {
    organic: "Can be composted to create nutrient-rich soil for plants 🌱",
    plastic: "Recycle properly to reduce environmental pollution ♻️",
    paper: "Recycling paper saves trees and conserves energy 📄",
    glass: "Glass is 100% recyclable without quality loss 🍶", 
    metal: "Metal recycling saves significant energy resources 🥫",
    electronic: "Requires special disposal due to toxic components 🔋",
    general: "Please dispose responsibly according to local guidelines 🌍",
    non_waste: "This item is not considered waste"
  };
  return impacts[type] || impacts.general;
}

function getFallbackClassification() {
  return {
    label: "Unknown Object",
    type: "general", 
    confidence: 0.5,
    impact: "Please try again with clearer image of waste item"
  };
}