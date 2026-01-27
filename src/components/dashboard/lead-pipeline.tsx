"use client";

type LeadPipelineProps = {
  stages: { stage: string; count: number; color: string }[];
};

export function LeadPipeline({ stages }: LeadPipelineProps) {
  const total = stages.reduce((sum, s) => sum + s.count, 0);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-navy-900">Lead Pipeline</h3>
        <p className="text-xs text-slate-500">{total} total leads in funnel</p>
      </div>

      <div className="space-y-3">
        {stages.map((stage) => {
          const percentage = Math.round((stage.count / total) * 100);
          return (
            <div key={stage.stage}>
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700">{stage.stage}</span>
                <span className="font-semibold text-navy-900">{stage.count}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: stage.color,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Conversion funnel visual */}
      <div className="mt-6 border-t border-slate-100 pt-4">
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>New → Converted</span>
          <span className="font-semibold text-green-600">
            {Math.round((stages[stages.length - 1].count / stages[0].count) * 100)}%
            conversion
          </span>
        </div>
      </div>
    </div>
  );
}
