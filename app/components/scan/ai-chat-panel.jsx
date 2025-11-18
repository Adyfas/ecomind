"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send } from "lucide-react";
import { useRef, useEffect } from "react";

export default function AIChatPanel({
  chatMessages,
  chatInput,
  onChatInputChange,
  onChatSend,
  handleSend
}) {
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
  useEffect(() => {
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest", 
      });
    };
    const timer = setTimeout(() => scrollToBottom(), 50);
    return () => clearTimeout(timer);
  }, [chatMessages]);

  // const handleSend = (e) => {
  //   e.preventDefault(); 
  //   onChatSend();
  // };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(e);
    }
  };

  return (
    <div className="hidden lg:flex flex-col w-96 bg-surface border-l border-neon-dark/10 h-full">
      <div className="p-6 border-b border-neon-dark/10 shrink-0">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg bg-neon-dark/10">
              <Bot className="w-6 h-6 text-neon-dark" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-toska rounded-full" />
          </div>
          <div>
            <h3 className="font-semibold text-neon-dark">EcoMind</h3>
            <p className="text-toska text-sm">Sustainability Expert</p>
          </div>
        </div>
      </div>

      <div
        ref={messagesContainerRef}
        className="flex-1 p-6 overflow-y-auto space-y-4"
        style={{ minHeight: 0 }} 
      >
        <AnimatePresence initial={false}>
          {chatMessages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`max-w-[85%] rounded-2xl p-4 ${
                  message.role === "user"
                    ? "bg-toska text-white rounded-br-none shadow-lg"
                    : "bg-neon-dark/5 text-neon-dark rounded-bl-none border border-neon-dark/10 backdrop-blur-sm"
                }`}
              >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                  {message.content}
                </p>{" "}
                <div
                  className={`text-xs mt-2 ${
                    message.role === "user" ? "text-white/70" : "text-toska"
                  }`}
                >
                  {message.role === "assistant" ? "EcoMind" : "You"}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>

      <div className="p-6 border-t border-neon-dark/10 shrink-0">
        <form onSubmit={handleSend} className="flex gap-3">
          {" "}
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="text"
            value={chatInput}
            onChange={(e) => onChatInputChange(e.target.value)}
            onKeyPress={handleKeyPress} 
            placeholder="Ask about sustainable practices..."
            className="flex-1 bg-neon-dark/5 border border-neon-dark/10 rounded-xl px-4 py-3 text-sm text-neon-dark placeholder-neon-dark/40 focus:outline-none focus:border-toska focus:ring-1 focus:ring-toska backdrop-blur-sm"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit" 
            disabled={!chatInput.trim()}
            className="w-12 h-12 bg-toska text-white rounded-xl flex items-center justify-center hover:bg-toska/90 disabled:bg-neon-dark/10 disabled:text-neon-dark/40 transition-colors shadow-lg"
          >
            <Send className="w-4 h-4" />
          </motion.button>
        </form>
      </div>
    </div>
  );
}
