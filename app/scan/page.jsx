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

  // Camera initialization
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
      const image = canvas.toDataURL("image/jpeg", 0.9);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const wasteTypes = [
        {
          label: "Plastic Bottle",
          score: 0.94,
          type: "recyclable",
          impact: "Recycling saves 75% energy vs new production",
        },
        {
          label: "Food Waste",
          score: 0.89,
          type: "compostable",
          impact: "Composting reduces methane emissions by 95%",
        },
        {
          label: "Glass Container",
          score: 0.87,
          type: "recyclable",
          impact: "Glass can be recycled infinitely without quality loss",
        },
        {
          label: "Paper Packaging",
          score: 0.82,
          type: "recyclable",
          impact: "Recycling paper saves 17 trees per ton",
        },
        {
          label: "Metal Can",
          score: 0.91,
          type: "recyclable",
          impact: "Aluminum recycling saves 95% energy vs new production",
        },
      ];

      const result = wasteTypes[Math.floor(Math.random() * wasteTypes.length)];
      setAiResult(result);

      if (window.innerWidth >= 768) {
        setShowResults(true);
      } else {
        setDrawerOpen(true);
      }

      // Add AI insight to chat
      setTimeout(() => {
        const insight = {
          id: Date.now(),
          role: "assistant",
          content: getWasteInsight(result),
        };
        setChatMessages((prev) => [...prev, insight]);
      }, 500);
    } catch (err) {
      setError("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

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

  const handleChatSend = () => {
    if (!chatInput.trim()) return;

    const userMessage = {
      id: Date.now(),
      role: "user",
      content: chatInput,
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setChatInput("");

    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        role: "assistant",
        content: getAIResponse(chatInput, aiResult),
      };
      setChatMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const getAIResponse = (question, result) => {
    const responses = [
      "Sustainable waste management begins with proper identification. Every correctly sorted item makes a difference.",
      "Consider the lifecycle of materials. Recycling transforms waste into valuable resources for new products.",
      "Composting organic waste not only reduces landfill impact but creates nutrient-rich soil for gardening.",
      "The most sustainable choice is reducing consumption first, then reusing, and finally recycling.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const closeResults = () => {
    setShowResults(false);
    setAiResult(null);
  };

  return (
    <div className="h-screen bg-deep-green flex overflow-hidden relative">
      {/* Mobile Chat Button */}
      <button
        onClick={() => setChatMobile(true)}
        className="rounded-full w-14 h-14 bg-neon-dark p-2 flex items-center justify-center cursor-pointer hover:scale-105 transition-all duration-500 fixed z-30 lg:hidden bottom-1 right-2"
      >
        <SiChatbot className="w-6 h-6 text-white" />
      </button>

      {/* Main Scanner Area */}
      <div className="flex-1 flex flex-col relative h-full">
        {/* Header */}
        <ScanHeader cameraActive={cameraActive} />

        {/* Camera Container */}
        <CameraContainer
          videoRef={videoRef}
          loading={loading}
          cameraActive={cameraActive}
          onFlipCamera={handleFlipCamera}
        >
          {/* Results Popup */}
          <ResultsPopup
            showResults={showResults}
            aiResult={aiResult}
            onClose={closeResults}
            onScanNew={handleScan}
          />
        </CameraContainer>

        {/* Scan Button */}
        <ScanButton
          loading={loading}
          cameraActive={cameraActive}
          onScan={handleScan}
        />
      </div>

      {/* AI Chat Panel (Desktop) */}
      <AIChatPanel
        chatMessages={chatMessages}
        chatInput={chatInput}
        onChatInputChange={setChatInput}
        onChatSend={handleChatSend}
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
