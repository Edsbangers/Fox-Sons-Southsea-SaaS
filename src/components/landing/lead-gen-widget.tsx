"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, Sparkles } from "lucide-react";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
  options?: string[];
};

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hi! I'm the Fox & Sons AI assistant. Are you looking to sell or rent in Southsea?",
    options: ["I want to sell", "I want to rent out", "I'm looking to buy", "I'm looking to rent"],
  },
];

const responses: Record<string, Message> = {
  "I want to sell": {
    id: "sell",
    role: "assistant",
    content: "Great choice! Southsea properties are in high demand right now. Based on recent sales data, the average time to sell in PO4/PO5 is just 28 days. Would you like a free, no-obligation valuation?",
    options: ["Yes, book a valuation", "What's my home worth?", "Tell me about fees"],
  },
  "I want to rent out": {
    id: "rent-out",
    role: "assistant",
    content: "The Southsea rental market is extremely strong — average yields of 5.2% and near-zero void periods. We offer full management or tenant-find only. What would suit you best?",
    options: ["Full management", "Tenant find only", "What are your fees?"],
  },
  "I'm looking to buy": {
    id: "buy",
    role: "assistant",
    content: "Exciting! Southsea has everything from Victorian terraces to seafront penthouses. What's your budget and ideal number of bedrooms? I can match you with properties before they hit Rightmove.",
    options: ["Under £350k", "£350k - £500k", "£500k+", "Just browsing"],
  },
  "I'm looking to rent": {
    id: "rent",
    role: "assistant",
    content: "We have 47 rental properties available in Southsea right now. Are you looking for a flat or a house? And how many bedrooms do you need?",
    options: ["1-2 bed flat", "3+ bed house", "Show me everything"],
  },
};

const defaultResponse: Message = {
  id: "default",
  role: "assistant",
  content: "Thanks for your interest! To give you the best service, could you share your email or phone number? One of our Southsea experts will be in touch within the hour.",
  options: ["I'll leave my details", "Call me back", "Just browsing for now"],
};

export function LeadGenWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  // Auto-open after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  function handleOptionClick(option: string) {
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: option,
    };
    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const response = responses[option] || defaultResponse;
      setMessages((prev) => [...prev, { ...response, id: Date.now().toString() }]);
    }, 800);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: `Thanks for that! I've noted "${input}". One of our Southsea property experts will be in touch shortly. Is there anything else I can help with?`,
          options: ["Book a viewing", "Get a valuation", "That's all for now"],
        },
      ]);
    }, 1000);
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 ${
          isOpen
            ? "bg-slate-800 hover:bg-slate-700"
            : "bg-gold-500 hover:bg-gold-400 hover:scale-110"
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-navy-950" />
        )}
      </button>

      {/* Notification dot */}
      {!isOpen && (
        <span className="fixed bottom-16 right-6 z-50 flex h-4 w-4 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-gold-500" />
        </span>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[360px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center gap-3 bg-navy-900 px-4 py-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/20">
              <Bot className="h-5 w-5 text-gold-400" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-white">Fox & Sons AI</span>
                <Sparkles className="h-3.5 w-3.5 text-gold-400" />
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-300">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400 animate-pulse" />
                Online now
              </div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto p-4">
            {messages.map((message) => (
              <div key={message.id}>
                <div
                  className={`flex gap-2 ${message.role === "user" ? "justify-end" : ""}`}
                >
                  {message.role === "assistant" && (
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-100">
                      <Bot className="h-3.5 w-3.5 text-gold-700" />
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      message.role === "user"
                        ? "bg-navy-900 text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
                {/* Quick Options */}
                {message.role === "assistant" && message.options && (
                  <div className="mt-2 flex flex-wrap gap-1.5 pl-9">
                    {message.options.map((option) => (
                      <button
                        key={option}
                        onClick={() => handleOptionClick(option)}
                        className="rounded-full border border-navy-200 bg-white px-3 py-1.5 text-xs font-medium text-navy-700 transition-colors hover:bg-navy-50 hover:border-navy-300"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="border-t border-slate-100 p-3">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100"
              />
              <button
                type="submit"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-900 text-white transition-colors hover:bg-navy-800"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
