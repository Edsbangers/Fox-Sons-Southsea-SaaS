"use client";

import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, Sparkles } from "lucide-react";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const initialMessages: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hello! I'm the Fox & Sons AI assistant. I can help you find your perfect property in Southsea and Portsmouth. What are you looking for today?",
  },
];

export function LeadGenChat() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // In production, this calls the Vercel AI SDK endpoint:
    // const { messages } = await useChat({ api: '/api/agents/lead-gen' });
    // For demo, simulate a response:
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: getSimulatedResponse(input),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1200);
  }

  return (
    <div className="flex h-[600px] flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-3">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-100">
          <Bot className="h-4 w-4 text-gold-700" />
        </div>
        <div>
          <div className="text-sm font-semibold text-navy-900">Lead Gen Agent</div>
          <div className="text-xs text-green-600">Online — Vercel AI SDK</div>
        </div>
        <div className="ml-auto flex items-center gap-1 rounded-full bg-green-50 px-2 py-0.5 text-xs text-green-600">
          <Sparkles className="h-3 w-3" />
          GPT-4o
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="flex-1 space-y-4 overflow-y-auto p-5"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
          >
            {message.role === "assistant" && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-100">
                <Bot className="h-3.5 w-3.5 text-gold-700" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-xl px-4 py-2.5 text-sm leading-relaxed ${
                message.role === "user"
                  ? "bg-navy-900 text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {message.content}
            </div>
            {message.role === "user" && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy-100">
                <User className="h-3.5 w-3.5 text-navy-700" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold-100">
              <Bot className="h-3.5 w-3.5 text-gold-700" />
            </div>
            <div className="rounded-xl bg-slate-100 px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:0.1s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:0.2s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="border-t border-slate-100 p-4"
      >
        <div className="flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message to test the lead gen agent..."
            className="flex-1 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy-900 text-white transition-colors hover:bg-navy-800 disabled:opacity-50"
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
      </form>
    </div>
  );
}

function getSimulatedResponse(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("bed") || lower.includes("bedroom")) {
    return "Great choice! Southsea has excellent options across different bedroom sizes. The PO4/PO5 areas are particularly popular for family homes. What's your budget range? I can pull up specific matches from our portfolio and upcoming listings.";
  }
  if (lower.includes("price") || lower.includes("budget") || lower.includes("£")) {
    return "That's a solid budget for the Southsea market. Based on current listings and recent sales data, I can see several strong matches. Would you like me to schedule viewings for the top 3? I can also set up alerts for new properties matching your criteria.";
  }
  if (lower.includes("south") || lower.includes("area") || lower.includes("where")) {
    return "Southsea offers diverse neighbourhoods: Craneswater for premium family homes, Albert Road for vibrant Victorian terraces, and Eastney for excellent value near the beach. Each has its own character. Which aspects matter most — schools, commute, nightlife, or green space?";
  }
  return "I'd love to help with that! To give you the most relevant property matches, could you tell me: 1) Your preferred number of bedrooms, 2) Budget range, and 3) Whether you're looking to buy or rent? I have access to properties before they hit the major portals.";
}
