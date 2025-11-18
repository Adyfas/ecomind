"use client";
import { useEffect, useRef, useState } from "react";
import { SiChatbot } from "react-icons/si";
import ScanHeader from "../components/scan/scan-header";
import CameraContainer from "../components/scan/camera-container";
import ResultsPopup from "../components/scan/results-popup";
import ScanButton from "../components/scan/scan-button";
import AIChatPanel from "../components/scan/ai-chat-panel";
import MobileDrawerResults from "../components/scan/mobile-drawer-results";
import MobileChatDrawer from "../components/scan/mobile-chat-drawer";
import ErrorToast from "../components/scan/error-toast";

export default function ScanPage() {
  const [facingMode, setFacingMode] = useState("environment");
  const [chatMobile, setChatMobile] = useState(false);
  const videoRef = useRef(null);
  const [aiResult, setAiResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cameraActive, setCameraActive] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      role: "assistant",
      content:
        "Welcome to EcoMind. I'm your sustainability assistant. Scan any waste item, and I'll provide detailed disposal guidance and environmental impact insights.",
    },
  ]);
  const [chatInput, setChatInput] = useState("");

  useEffect(() => {
    let stream;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: {
            width: { ideal: 1280 },
            height: { ideal: 720 },
            facingMode: "environment",
          },
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          setCameraActive(true);
        }
      } catch (err) {
        console.error("Camera access error:", err);
        setError("Camera permissions required for waste analysis");
        setCameraActive(false);
      }
    }

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const getWasteInsight = (result) => {
    const insights = {
      recyclable: `♻️ **${result.label}** is recyclable. ${result.impact} Proper recycling helps conserve natural resources and reduce landfill waste.`,
      compostable: `🌱 **${result.label}** is compostable. ${result.impact} Composting returns nutrients to soil and completes the natural cycle.`,
      general: `⚡ **${result.label}** requires special disposal. Check local guidelines for proper handling to minimize environmental impact.`,
    };
    return insights[result.type] || insights.general;
  };

  const handleFlipCamera = async () => {
    if (!videoRef.current) return;
    const stream = videoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }

    try {
      const newFacingMode =
        facingMode === "environment" ? "user" : "environment";
      setFacingMode(newFacingMode);

      const newStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1280 },
          height: { ideal: 720 },
          facingMode: newFacingMode,
        },
      });

      if (videoRef.current) {
        videoRef.current.srcObject = newStream;
        setCameraActive(true);
      }
    } catch (err) {
      console.error("Error flipping camera:", err);
      setError("Failed to switch camera");
    }
  };

  const handleChatSend = async () => {
    if (!chatInput.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: chatInput,
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    const aiResponseContent = await getAIResponse(chatInput);
    const aiResponse = {
      id: Date.now() + 1,
      role: "assistant",
      content: aiResponseContent,
    };
    setChatMessages((prev) => [...prev, aiResponse]);
  };

  const getAIResponse = async (question) => {
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to get AI response");
      }

      const data = await response.json();
      return data.reply;
    } catch (error) {
      console.error("AI Chat Error:", error);
      return "Maaf, saya sedang belajar tentang lingkungan. Coba tanya tentang sampah organik, daur ulang, atau kompos! 🌱";
    }
  };
  const closeResults = () => {
    setShowResults(false);
    setAiResult(null);
  };

  const handleSend = async (e) => {
    e.preventDefault();

    if (!chatInput.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: chatInput,
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    const aiResponseContent = await getAIResponse(chatInput);
    const aiResponse = {
      id: Date.now() + 1,
      role: "assistant",
      content: aiResponseContent,
    };
    setChatMessages((prev) => [...prev, aiResponse]);
  };

const handleScan = async () => {
  if (!videoRef.current || !cameraActive) return;

  setLoading(true);
  setError(null);

  try {
    const canvas = document.createElement("canvas");
    const video = videoRef.current;
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    ctx.drawImage(video, 0, 0);
    
    const imageData = canvas.toDataURL("image/jpeg", 0.7);
    console.log('🔄 Sending image for advanced analysis...');

    const classificationResponse = await fetch('/api/classify-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: imageData })
    });

    const resultData = await classificationResponse.json();
    console.log('📦 ADVANCED ANALYSIS RESULT:', resultData);

    let classificationResult = resultData.classification;
    

    console.log('🎯 FINAL CLASSIFICATION:', {
      label: classificationResult.label,
      type: classificationResult.type, 
      confidence: classificationResult.confidence,
      isWaste: classificationResult.type !== 'non_waste' && classificationResult.type !== 'unknown',
      impact: classificationResult.impact
    });

    if (isNaN(classificationResult.confidence) || classificationResult.confidence === undefined) {
      classificationResult.confidence = classificationResult.type === 'non_waste' ? 0 : 0.85;
    }

    setAiResult(classificationResult);

    // SHOW RESULTS
    if (window.innerWidth >= 768) {
      setShowResults(true);
    } else {
      setDrawerOpen(true);
    }

    setTimeout(async () => {
      try {
        let prompt;
        
        if (classificationResult.type === 'non_waste') {
          prompt = `User scanned a non-waste item: "${classificationResult.label}". Explain that this is not waste and ask them to scan actual waste items like plastic, food, paper, etc.`;
        } else {
          prompt = `Jelaskan tentang ${classificationResult.label} (jenis: ${classificationResult.type}) dalam konteks sampah dan lingkungan`;
        }
        
        const aiInsight = await getAIResponse(prompt);
        const insightMessage = {
          id: Date.now(),
          role: "assistant",
          content: aiInsight,
        };
        setChatMessages((prev) => [...prev, insightMessage]);
      } catch (chatError) {
        console.error('Chat error:', chatError);
      }
    }, 1000);

  } catch (err) {
    console.error('❌ Scan error:', err);
    setError("Analysis failed. Please try again.");
    setAiResult(getFallbackWasteData());
    setShowResults(true);
  } finally {
    setLoading(false);
  }
};

function getFallbackWasteData() {
  const wasteTypes = [
    { label: "Plastic Bottle", type: "plastic", confidence: 0.94, impact: "Recycling saves 75% energy vs new production" },
    { label: "Food Waste", type: "organic", confidence: 0.89, impact: "Composting reduces methane emissions by 95%" },
    { label: "General Item", type: "general", confidence: 0.5, impact: "Please check local waste disposal guidelines" },
  ];
  return wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
}

  return (
    <div className="h-screen bg-deep-green flex overflow-hidden relative">
      <button
        onClick={() => setChatMobile(true)}
        className="rounded-full w-14 h-14 bg-neon-dark p-2 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-500 fixed z-30 lg:hidden bottom-1 right-2"
      >
        <SiChatbot className="w-6 h-6 text-white" />
      </button>

      <div className="flex-1 flex flex-col relative h-full">
        <ScanHeader cameraActive={cameraActive} />

        <CameraContainer
          videoRef={videoRef}
          loading={loading}
          cameraActive={cameraActive}
          onFlipCamera={handleFlipCamera}
        >
          <ResultsPopup
            showResults={showResults}
            aiResult={aiResult}
            onClose={closeResults}
            onScanNew={handleScan}
          />
        </CameraContainer>

        <ScanButton
          loading={loading}
          cameraActive={cameraActive}
          onScan={handleScan}
        />
      </div>

      <AIChatPanel
        chatMessages={chatMessages}
        chatInput={chatInput}
        onChatInputChange={setChatInput}
        onChatSend={handleChatSend}
        handleSend={handleSend}
      />

      {/* Mobile Drawer Results */}
      <MobileDrawerResults
        drawerOpen={drawerOpen}
        onDrawerOpenChange={setDrawerOpen}
        aiResult={aiResult}
      />

      {/* Mobile Chat Drawer */}
      <MobileChatDrawer
        chatMobile={chatMobile}
        onChatMobileChange={setChatMobile}
        chatMessages={chatMessages}
        chatInput={chatInput}
        onChatInputChange={setChatInput}
        onChatSend={handleChatSend}
      />

      {/* Error Toast */}
      <ErrorToast error={error} onClose={() => setError(null)} />
    </div>
  );
}
