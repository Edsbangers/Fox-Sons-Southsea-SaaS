"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { TrendingDown, TrendingUp, Sparkles } from "lucide-react";

type TrafficConversionChartProps = {
  data: { month: string; traffic: number; conversions: number; agenticConversions: number }[];
  currentBounceRate: number;
  agenticConversionRate: number;
};

export function TrafficConversionChart({
  data,
  currentBounceRate,
  agenticConversionRate,
}: TrafficConversionChartProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3 className="text-sm font-semibold text-navy-900">Traffic vs. Conversion</h3>
          <p className="text-xs text-slate-500">267,116 total visits · Agentic conversion impact</p>
        </div>
        <div className="flex gap-3">
          {/* Current bounce rate */}
          <div className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-center">
            <div className="flex items-center gap-1 text-xs text-red-600">
              <TrendingDown className="h-3 w-3" />
              Current
            </div>
            <div className="text-lg font-bold text-red-700">{currentBounceRate}%</div>
            <div className="text-[10px] text-red-500">Bounce Rate</div>
          </div>
          {/* Agentic conversion */}
          <div className="rounded-lg border border-green-200 bg-green-50 px-3 py-2 text-center">
            <div className="flex items-center gap-1 text-xs text-green-600">
              <Sparkles className="h-3 w-3" />
              Agentic
            </div>
            <div className="text-lg font-bold text-green-700">{agenticConversionRate}%</div>
            <div className="text-[10px] text-green-500">Conversion</div>
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="trafficGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94a3b8" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#94a3b8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="conversionGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ef4444" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="agenticGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22c55e" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              width={35}
              tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#0f172a",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
                fontSize: "12px",
              }}
              formatter={(value: number, name: string) => [
                value.toLocaleString(),
                name === "traffic" ? "Traffic" : name === "conversions" ? "Current Conv." : "Agentic Conv.",
              ]}
            />
            <Legend
              verticalAlign="top"
              height={36}
              formatter={(value) =>
                value === "traffic"
                  ? "Traffic"
                  : value === "conversions"
                    ? "Current Conversions"
                    : "Projected (Agentic)"
              }
            />
            <Area
              type="monotone"
              dataKey="traffic"
              stroke="#94a3b8"
              strokeWidth={2}
              fill="url(#trafficGradient)"
            />
            <Area
              type="monotone"
              dataKey="conversions"
              stroke="#ef4444"
              strokeWidth={2}
              fill="url(#conversionGradient)"
            />
            <Area
              type="monotone"
              dataKey="agenticConversions"
              stroke="#22c55e"
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="url(#agenticGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Impact callout */}
      <div className="mt-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-green-600" />
          <span className="text-sm font-medium text-green-800">
            Agentic AI projects +{(agenticConversionRate - (100 - currentBounceRate)).toFixed(1)}% conversion uplift
          </span>
        </div>
        <p className="mt-1 text-xs text-green-600">
          Based on 24/7 lead qualification, instant response, and personalised property matching
        </p>
      </div>
    </div>
  );
}
