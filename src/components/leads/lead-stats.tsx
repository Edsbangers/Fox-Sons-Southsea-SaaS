"use client";

import { Users, UserPlus, UserCheck, Target, Zap } from "lucide-react";

type LeadStatsProps = {
  summary: {
    total: number;
    new: number;
    qualified: number;
    converted: number;
    avgScore: number;
  };
};

export function LeadStats({ summary }: LeadStatsProps) {
  const stats = [
    { label: "Total Leads", value: summary.total, icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "New This Week", value: summary.new, icon: UserPlus, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "Qualified", value: summary.qualified, icon: Target, color: "text-amber-600", bg: "bg-amber-50" },
    { label: "Converted", value: summary.converted, icon: UserCheck, color: "text-green-600", bg: "bg-green-50" },
    { label: "Avg Score", value: summary.avgScore, icon: Zap, color: "text-purple-600", bg: "bg-purple-50" },
  ];

  return (
    <div className="grid gap-4 sm:grid-cols-5">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
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
  );
}
