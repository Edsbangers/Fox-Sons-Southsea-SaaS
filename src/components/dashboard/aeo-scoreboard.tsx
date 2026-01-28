"use client";

import { Bot, Sparkles, CheckCircle2, AlertCircle, TrendingUp } from "lucide-react";

type AEOScoreboardProps = {
  overallScore: number;
  engines: {
    name: string;
    icon: string;
    score: number;
    status: "excellent" | "good" | "needs-work";
    queries: string[];
  }[];
};

export function AEOScoreboard({ overallScore, engines }: AEOScoreboardProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600";
    return "text-red-600";
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "excellent":
        return "bg-green-50 text-green-700 border-green-200";
      case "good":
        return "bg-amber-50 text-amber-700 border-amber-200";
      default:
        return "bg-red-50 text-red-700 border-red-200";
    }
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-navy-900">AEO Visibility Score</h3>
          <p className="text-xs text-slate-500">Answer Engine Optimisation</p>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700">
          <Sparkles className="h-3 w-3" />
          AI-Ready
        </div>
      </div>

      {/* Main Gauge */}
      <div className="mb-6 flex items-center justify-center">
        <div className="relative flex h-32 w-32 items-center justify-center">
          {/* Background circle */}
          <svg className="absolute h-full w-full -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="#e2e8f0"
              strokeWidth="12"
            />
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke={overallScore >= 80 ? "#22c55e" : overallScore >= 60 ? "#f59e0b" : "#ef4444"}
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${(overallScore / 100) * 352} 352`}
              className="transition-all duration-1000"
            />
          </svg>
          <div className="text-center">
            <div className={`text-3xl font-bold ${getScoreColor(overallScore)}`}>
              {overallScore}
            </div>
            <div className="text-xs text-slate-500">/ 100</div>
          </div>
        </div>
      </div>

      {/* Engine Breakdown */}
      <div className="space-y-3">
        {engines.map((engine) => (
          <div
            key={engine.name}
            className="rounded-lg border border-slate-100 bg-slate-50/50 p-3"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg">{engine.icon}</span>
                <span className="text-sm font-medium text-slate-700">{engine.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-sm font-bold ${getScoreColor(engine.score)}`}>
                  {engine.score}%
                </span>
                <span
                  className={`rounded-full border px-2 py-0.5 text-[10px] font-medium ${getStatusBadge(engine.status)}`}
                >
                  {engine.status === "excellent" ? "Excellent" : engine.status === "good" ? "Good" : "Improve"}
                </span>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {engine.queries.map((query) => (
                <span
                  key={query}
                  className="rounded bg-white px-1.5 py-0.5 text-[10px] text-slate-500 border border-slate-200"
                >
                  &quot;{query}&quot;
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Schema status */}
      <div className="mt-4 rounded-lg bg-green-50 border border-green-200 p-3">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <span className="text-xs font-medium text-green-800">
            4 JSON-LD schemas active
          </span>
        </div>
        <p className="mt-1 text-[10px] text-green-600">
          LocalBusiness · RealEstateAgent · FAQPage · Dataset
        </p>
      </div>
    </div>
  );
}
