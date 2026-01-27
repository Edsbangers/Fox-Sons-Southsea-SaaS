"use client";

import { Star, TrendingUp } from "lucide-react";
import type { AgentPerformance } from "@/types";

type TopAgentsProps = {
  agents: AgentPerformance[];
};

function formatCurrency(value: number) {
  return `£${(value / 1000).toFixed(0)}k`;
}

export function TopAgents({ agents }: TopAgentsProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-navy-900">Top Agents</h3>
        <p className="text-xs text-slate-500">Performance this month</p>
      </div>

      <div className="space-y-4">
        {agents.map((agent, index) => (
          <div key={agent.id} className="flex items-center gap-3">
            {/* Rank */}
            <div
              className={`flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold ${
                index === 0
                  ? "bg-gold-100 text-gold-700"
                  : index === 1
                    ? "bg-slate-200 text-slate-600"
                    : index === 2
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-100 text-slate-500"
              }`}
            >
              {index + 1}
            </div>

            {/* Avatar */}
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-100 text-xs font-semibold text-navy-700">
              {agent.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            {/* Info */}
            <div className="flex-1">
              <div className="text-sm font-medium text-slate-800">{agent.name}</div>
              <div className="flex items-center gap-3 text-xs text-slate-500">
                <span>{agent.leadsConverted} converted</span>
                <span>{agent.viewings} viewings</span>
              </div>
            </div>

            {/* Revenue + Rating */}
            <div className="text-right">
              <div className="text-sm font-bold text-navy-900">
                {formatCurrency(agent.revenue)}
              </div>
              <div className="flex items-center gap-0.5 text-xs text-amber-500">
                <Star className="h-3 w-3 fill-current" />
                {agent.rating}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
