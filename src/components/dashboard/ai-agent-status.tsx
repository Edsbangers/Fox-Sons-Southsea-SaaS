"use client";

import { Bot, Radar, Share2, Sparkles, Activity } from "lucide-react";

type AIAgentStatusProps = {
  agents: {
    leadGen: { status: "active" | "idle" | "error"; leadsToday: number; score: number };
    scout: { status: "active" | "idle" | "error"; lastRun: string; matches: number };
    socials: {
      status: "active" | "scheduled" | "idle";
      nextPost: string;
      postsThisWeek: number;
    };
  };
};

const statusStyles = {
  active: "bg-green-50 text-green-700 border-green-200",
  scheduled: "bg-amber-50 text-amber-700 border-amber-200",
  idle: "bg-slate-50 text-slate-600 border-slate-200",
  error: "bg-red-50 text-red-700 border-red-200",
};

const statusDotStyles = {
  active: "bg-green-500",
  scheduled: "bg-amber-500",
  idle: "bg-slate-400",
  error: "bg-red-500",
};

export function AIAgentStatus({ agents }: AIAgentStatusProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-gold-500" />
        <h3 className="text-sm font-semibold text-navy-900">AI Agents</h3>
        <span className="ml-auto rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700">
          2/3 Active
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {/* Lead Gen Agent */}
        <div
          className={`flex items-start gap-3 rounded-lg border p-4 ${statusStyles[agents.leadGen.status]}`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
            <Bot className="h-4 w-4 text-navy-700" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Lead Gen</span>
              <span
                className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[agents.leadGen.status]} animate-pulse`}
              />
            </div>
            <div className="mt-1 text-xs opacity-80">
              {agents.leadGen.leadsToday} leads today · Score: {agents.leadGen.score}
            </div>
          </div>
        </div>

        {/* Scout Agent */}
        <div
          className={`flex items-start gap-3 rounded-lg border p-4 ${statusStyles[agents.scout.status]}`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
            <Radar className="h-4 w-4 text-navy-700" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Scout</span>
              <span
                className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[agents.scout.status]} animate-pulse`}
              />
            </div>
            <div className="mt-1 text-xs opacity-80">
              Last: {agents.scout.lastRun} · {agents.scout.matches} matches
            </div>
          </div>
        </div>

        {/* Socials Agent */}
        <div
          className={`flex items-start gap-3 rounded-lg border p-4 ${statusStyles[agents.socials.status]}`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
            <Share2 className="h-4 w-4 text-navy-700" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold">Socials</span>
              <span
                className={`h-1.5 w-1.5 rounded-full ${statusDotStyles[agents.socials.status]}`}
              />
            </div>
            <div className="mt-1 text-xs opacity-80">
              Next: {agents.socials.nextPost} · {agents.socials.postsThisWeek} this week
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
