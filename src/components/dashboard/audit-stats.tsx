"use client";

import {
  Eye,
  Smartphone,
  Share2,
  TrendingDown,
  Monitor,
  Globe,
  ArrowRight,
} from "lucide-react";

type AuditStatsProps = {
  totalVisits: number;
  mobilePercentage: number;
  socialTraffic: number;
  bounceRate: number;
  desktopPercentage: number;
  directTraffic: number;
};

export function AuditStats({
  totalVisits,
  mobilePercentage,
  socialTraffic,
  bounceRate,
  desktopPercentage,
  directTraffic,
}: AuditStatsProps) {
  const stats = [
    {
      label: "Total Visits",
      value: totalVisits.toLocaleString(),
      subtext: "Annual traffic",
      icon: Eye,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      label: "Mobile Web",
      value: `${mobilePercentage}%`,
      subtext: `${desktopPercentage}% desktop`,
      icon: Smartphone,
      color: "text-purple-600",
      bg: "bg-purple-50",
    },
    {
      label: "Social Traffic",
      value: `${socialTraffic}%`,
      subtext: "Opportunity area",
      icon: Share2,
      color: "text-pink-600",
      bg: "bg-pink-50",
      alert: true,
    },
    {
      label: "Bounce Rate",
      value: `${bounceRate}%`,
      subtext: "Visitors leaving",
      icon: TrendingDown,
      color: "text-red-600",
      bg: "bg-red-50",
      alert: true,
    },
  ];

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-navy-900">Website Audit Data</h3>
          <p className="text-xs text-slate-500">Current performance baseline</p>
        </div>
        <span className="rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 border border-amber-200">
          From Audit
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-lg border p-3 ${stat.alert ? "border-amber-200 bg-amber-50/30" : "border-slate-100 bg-slate-50/50"}`}
          >
            <div className="flex items-start justify-between">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
              {stat.alert && (
                <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-medium text-amber-700">
                  Action needed
                </span>
              )}
            </div>
            <div className="mt-2">
              <p className="text-lg font-bold text-navy-900">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
              <p className="text-[10px] text-slate-400">{stat.subtext}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Insight */}
      <div className="mt-4 flex items-center gap-2 rounded-lg bg-navy-50 border border-navy-100 p-3">
        <Globe className="h-4 w-4 text-navy-600 shrink-0" />
        <p className="text-xs text-navy-700">
          <span className="font-medium">Insight:</span> 79.68% mobile traffic suggests lead gen widget must be mobile-first. 3% social = untapped channel.
        </p>
      </div>
    </div>
  );
}
