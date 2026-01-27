"use client";

import {
  Radar,
  Clock,
  Target,
  Eye,
  CheckCircle2,
  XCircle,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

type ScoutMatch = {
  id: string;
  title: string;
  source: string;
  matchScore: number;
  status: "PENDING" | "REVIEWED" | "MATCHED" | "DISMISSED";
  summary: string;
  detectedAt: string;
};

type ScoutDashboardProps = {
  data: {
    lastRun: string;
    nextRun: string;
    totalMatches: number;
    pendingReview: number;
    matchesThisWeek: number;
    accuracy: number;
    recentMatches: ScoutMatch[];
  };
};

const statusConfig = {
  PENDING: { label: "Pending", icon: AlertCircle, style: "bg-amber-50 text-amber-700 border-amber-200" },
  REVIEWED: { label: "Reviewed", icon: Eye, style: "bg-blue-50 text-blue-700 border-blue-200" },
  MATCHED: { label: "Matched", icon: CheckCircle2, style: "bg-green-50 text-green-700 border-green-200" },
  DISMISSED: { label: "Dismissed", icon: XCircle, style: "bg-slate-50 text-slate-500 border-slate-200" },
};

export function ScoutDashboard({ data }: ScoutDashboardProps) {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { label: "Last Run", value: data.lastRun, icon: Clock, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Pending Review", value: data.pendingReview.toString(), icon: AlertCircle, color: "text-amber-600", bg: "bg-amber-50" },
          { label: "Matches This Week", value: data.matchesThisWeek.toString(), icon: Target, color: "text-green-600", bg: "bg-green-50" },
          { label: "Accuracy", value: `${data.accuracy}%`, icon: Radar, color: "text-purple-600", bg: "bg-purple-50" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-lg font-bold text-navy-900">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Cron Control */}
      <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-medium text-slate-700">Cron Active</span>
        </div>
        <span className="text-sm text-slate-500">Next run in {data.nextRun}</span>
        <button className="ml-auto flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
          <RefreshCw className="h-3.5 w-3.5" />
          Run Now
        </button>
      </div>

      {/* Matches Table */}
      <div className="rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="border-b border-slate-100 px-5 py-4">
          <h3 className="text-sm font-semibold text-navy-900">Recent Scout Matches</h3>
          <p className="text-xs text-slate-500">
            AI-detected property opportunities from local data sources
          </p>
        </div>
        <div className="divide-y divide-slate-100">
          {data.recentMatches.map((match) => {
            const config = statusConfig[match.status];
            const StatusIcon = config.icon;
            return (
              <div key={match.id} className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-slate-50/50">
                {/* Score */}
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-bold text-sm ${
                    match.matchScore >= 90
                      ? "bg-green-100 text-green-700"
                      : match.matchScore >= 75
                        ? "bg-amber-100 text-amber-700"
                        : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {match.matchScore}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-navy-900 truncate">
                      {match.title}
                    </h4>
                    <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${config.style}`}>
                      <StatusIcon className="h-3 w-3" />
                      {config.label}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-1">
                    {match.summary}
                  </p>
                  <div className="mt-1.5 flex items-center gap-3 text-xs text-slate-400">
                    <span>{match.source}</span>
                    <span>·</span>
                    <span>{match.detectedAt}</span>
                  </div>
                </div>

                {/* Actions */}
                {match.status === "PENDING" && (
                  <div className="flex gap-2 shrink-0">
                    <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                      Dismiss
                    </button>
                    <button className="rounded-lg bg-navy-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-navy-800">
                      Review
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
