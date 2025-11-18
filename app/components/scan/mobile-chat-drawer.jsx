"use client";
import { Drawer } from "vaul";
import { Bot, Send } from 'lucide-react';
import { useRef, useEffect } from "react";

export default function MobileChatDrawer({
  chatMobile,
  onChatMobileChange,
  chatMessages,
  chatInput,
  onChatInputChange,
  onChatSend,
}) {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  return (
    <Drawer.Root open={chatMobile} onOpenChange={onChatMobileChange}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0  z-50 lg:hidden" />
        <Drawer.Content className="fixed bottom-0 left-0 right-0 z-50 flex flex-col rounded-t-3xl bg-white border-t border-white/10 max-h-[85vh] lg:hidden">
          <div className="mx-auto w-12 h-1.5 shrink-0 rounded-full bg-gray-600/20 mt-4 mb-2" />

          <div className="p-4 border-b border-neon-dark/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-neon-dark/10">
                <Bot className="w-5 h-5 text-neon-dark" />
              </div>
              <div>
                <h3 className="font-semibold text-neon-dark">EcoMind</h3>
                <p className="text-toska text-xs">Sustainability Expert</p>
              </div>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {chatMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl p-3 ${
                    message.role === "user"
                      ? "bg-toska text-white rounded-br-none"
                      : "bg-neon-dark/5 text-neon-dark rounded-bl-none border border-neon-dark/10"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t border-neon-dark/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={chatInput}
                onChange={(e) => onChatInputChange(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && onChatSend()}
                placeholder="Ask about sustainability..."
                className="flex-1 bg-neon-dark/5 border border-neon-dark/10 rounded-xl px-3 py-2 text-sm text-neon-dark placeholder-neon-dark/40 focus:outline-none"
              />
              <button
                onClick={onChatSend}
                disabled={!chatInput.trim()}
                className="w-10 h-10 bg-toska text-white rounded-xl flex items-center justify-center disabled:bg-neon-dark/10 disabled:text-neon-dark/40"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
