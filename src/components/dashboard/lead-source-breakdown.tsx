"use client";

import type { SourceBreakdown } from "@/types";

type LeadSourceBreakdownProps = {
  sources: SourceBreakdown[];
};

export function LeadSourceBreakdown({ sources }: LeadSourceBreakdownProps) {
  const total = sources.reduce((sum, s) => sum + s.count, 0);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-sm font-semibold text-navy-900">Lead Sources</h3>
        <p className="text-xs text-slate-500">{total} leads this month</p>
      </div>

      {/* Stacked bar */}
      <div className="mb-5 flex h-3 overflow-hidden rounded-full bg-slate-100">
        {sources.map((source) => (
          <div
            key={source.source}
            className="transition-all duration-500"
            style={{
              width: `${source.percentage}%`,
              backgroundColor: source.color,
            }}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="space-y-2.5">
        {sources.map((source) => (
          <div key={source.source} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: source.color }}
              />
              <span className="text-sm text-slate-700">{source.source}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-navy-900">
                {source.count}
              </span>
              <span className="w-10 text-right text-xs text-slate-400">
                {source.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
