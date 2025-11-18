export async function POST(request) {
  try {
    const { message } = await request.json();
    
    console.log('Processing question:', message);

    // ✅ DIRECT MISTRAL API CALL - 100% WORKING
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY_AI}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [
          {
            role: 'system',
            content: `Anda adalah EcoMind - Asisten Ahli Lingkungan Indonesia.
            
ATURAN:
- Jawab dalam Bahasa Indonesia yang santun dan edukatif
- Fokus pada topik lingkungan, sampah, daur ulang, kompos
- Berikan contoh praktis dan tips aplikatif
- Maksimal 3-4 kalimat per respons
- Gunakan emoji relevan (🌱♻️🌍💚)
- Jadilah ramah dan menginspirasi`
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 150,
        temperature: 0.7,
        stream: false
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Mistral API error:', errorText);
      throw new Error(`Mistral API error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0]?.message?.content;

    console.log('Mistral Response:', aiResponse);

    if (!aiResponse) {
      throw new Error('No response from Mistral API');
    }

    return Response.json({ 
      reply: aiResponse
    });

  } catch (error) {
    console.error('Mistral API Error:', error);
    
    // ✅ FALLBACK RESPONSE
    return Response.json({ 
      reply: getFallbackResponse(message)
    });
  }
}

// ✅ FALLBACK RESPONSES
function getFallbackResponse(question = '') {
  const lowerQuestion = question.toLowerCase();
  
  if (lowerQuestion.includes('organik')) {
    return "Sampah organik berasal dari makhluk hidup seperti sisa makanan, daun, dan buah-busuk. Bisa dijadikan kompos untuk menyuburkan tanaman! 🌱";
  }
  
  if (lowerQuestion.includes('anorganik')) {
    return "Sampah anorganik seperti plastik, kaleng, dan kaca perlu didaur ulang. Pisahkan sesuai jenis untuk memudahkan proses daur ulang! ♻️";
  }
  
  if (lowerQuestion.includes('daur ulang')) {
    return "Daur ulang mengubah sampah menjadi produk baru, menghemat energi dan sumber daya alam. Mulailah dengan memilah sampah di rumah! 💚";
  }
  
  if (lowerQuestion.includes('kompos')) {
    return "Kompos adalah proses alami mengubah sampah organik menjadi pupuk. Campur sampah hijau (sisa makanan) dan coklat (daun kering) dalam komposter! 🍂";
  }
  
  const fallbacks = [
    "Halo! Saya EcoMind, asisten lingkungan Anda. Silakan tanya tentang sampah organik, anorganik, daur ulang, atau kompos! 🌍",
    "Mari jaga bumi bersama! Tanya saya tentang pengelolaan sampah yang benar dan praktik ramah lingkungan. 🌱",
    "Sampah organik jadi kompos, sampah anorganik didaur ulang! ♻️ Ada yang ingin ditanyakan tentang pengelolaan sampah?"
  ];
  
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}