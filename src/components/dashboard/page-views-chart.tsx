"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type PageViewsChartProps = {
  data: { date: string; value: number }[];
};

export function PageViewsChart({ data }: PageViewsChartProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-navy-900">Page Views</h3>
          <p className="text-xs text-slate-500">Website traffic this week</p>
        </div>
        <div className="flex items-center gap-2">
          {["7D", "30D", "90D"].map((period) => (
            <button
              key={period}
              className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                period === "7D"
                  ? "bg-navy-900 text-white"
                  : "text-slate-500 hover:bg-slate-100"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="pageViewGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3c5fa4" stopOpacity={0.15} />
                <stop offset="100%" stopColor="#3c5fa4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e2e8f0"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#94a3b8" }}
              width={40}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "13px",
              }}
              labelStyle={{ color: "#94a3b8" }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#3c5fa4"
              strokeWidth={2}
              fill="url(#pageViewGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
