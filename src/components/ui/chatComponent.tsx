"use client";

import { useChat } from "@ai-sdk/react";
import { useState, useRef, useEffect } from "react";
import { Bot, X, Send, Sparkles } from "lucide-react";

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat({
    api: "/api/chat",
  });

  console.log("Messages:", messages);
  console.log("Input:", input);
  console.log("Is Loading:", isLoading);
  console.log("Error:", error);

  // Auto-scroll logic
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-amber-500 hover:bg-amber-600 text-white p-4 rounded-full shadow-lg transition-all active:scale-95 flex items-center justify-center w-14 h-14"
      >
        {isOpen ? <X size={28} /> : <Bot size={28} className="animate-pulse" />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-[350px] sm:w-[400px] h-[550px] flex flex-col bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl border border-gray-100 dark:border-gray-800 overflow-hidden">

          {/* Sendbird Style Header */}
          <div className="p-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Sparkles size={20} />
              <span className="font-bold">Hashir&apos;s AI Guide</span>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8f9fa] dark:bg-gray-950">
            {messages.length === 0 && (
              <p className="text-center text-gray-400 text-sm mt-10">
                Hi! I can tell you about Hashir&apos;s work on **Zetsol** or **Vehicle VINs**.
              </p>
            )}

            {messages.map((m) => (
              <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3.5 rounded-2xl text-sm max-w-[85%] shadow-sm ${m.role === 'user'
                  ? 'bg-amber-500 text-white rounded-tr-none'
                  : 'bg-white dark:bg-gray-800 dark:text-gray-100 rounded-tl-none border border-gray-100 dark:border-gray-700'
                  }`}>
                  {m.content}
                </div>
              </div>
            ))}

            {/* {error && (
              <div className="p-3 bg-red-50 text-red-500 rounded-lg text-xs text-center border border-red-100">
                Connection issue. Check your API key in .env.local
              </div>
            )} */}
          </div>

          {/* Input Area */}
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(e); }} className="p-4 bg-white dark:bg-gray-900 border-t dark:border-gray-800">
            <div className="flex gap-2 items-center bg-gray-100 dark:bg-gray-800 rounded-2xl px-4 py-2">
              <input
                autoFocus
                name="prompt"
                value={input}
                onChange={handleInputChange} // ✅ State update fix
                placeholder="Ask me anything..."
                className="flex-1 bg-transparent border-none outline-none text-sm py-2 dark:text-white"
              />
              <button
                type="submit"
                // isLoading check karega ke AI jawab de raha hai
                // !input?.trim() check karega ke input khali toh nahi
                disabled={isLoading || !input?.trim()}
                className={`text-amber-500 transition-all ${isLoading || !input?.trim() ? "opacity-20 cursor-not-allowed" : "opacity-100 hover:scale-110"
                  }`}
              >
                <Send size={22} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}