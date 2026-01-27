"use client";

import {
  Eye,
  Users,
  TrendingUp,
  PoundSterling,
  Calendar,
  Home,
  Clock,
  ArrowUp,
  ArrowDown,
} from "lucide-react";

type StatsGridProps = {
  stats: {
    pageViews: { total: number; change: number };
    activeLeads: { total: number; change: number };
    conversionRate: { rate: number; change: number };
    revenue: { total: number; change: number };
    avgDaysOnMarket: number;
    propertiesListed: number;
    viewingsThisWeek: number;
  };
};

function formatCurrency(value: number) {
  if (value >= 1000000) return `£${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `£${(value / 1000).toFixed(0)}k`;
  return `£${value}`;
}

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-GB").format(value);
}

export function StatsGrid({ stats }: StatsGridProps) {
  const cards = [
    {
      label: "Page Views",
      value: formatNumber(stats.pageViews.total),
      change: stats.pageViews.change,
      icon: Eye,
      subtitle: "This month",
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      label: "Active Leads",
      value: formatNumber(stats.activeLeads.total),
      change: stats.activeLeads.change,
      icon: Users,
      subtitle: "In pipeline",
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
    },
    {
      label: "Conversion Rate",
      value: `${stats.conversionRate.rate}%`,
      change: stats.conversionRate.change,
      icon: TrendingUp,
      subtitle: "Lead to sale",
      iconBg: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      label: "Revenue (Pipeline)",
      value: formatCurrency(stats.revenue.total),
      change: stats.revenue.change,
      icon: PoundSterling,
      subtitle: "Commission value",
      iconBg: "bg-purple-50",
      iconColor: "text-purple-600",
    },
  ];

  const secondaryCards = [
    {
      label: "Avg Days on Market",
      value: stats.avgDaysOnMarket.toString(),
      icon: Clock,
    },
    {
      label: "Properties Listed",
      value: stats.propertiesListed.toString(),
      icon: Home,
    },
    {
      label: "Viewings This Week",
      value: stats.viewingsThisWeek.toString(),
      icon: Calendar,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Primary KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">{card.label}</p>
                <p className="mt-1 text-2xl font-bold text-navy-900">{card.value}</p>
              </div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${card.iconBg}`}
              >
                <card.icon className={`h-5 w-5 ${card.iconColor}`} />
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <span
                className={`flex items-center gap-0.5 text-sm font-medium ${
                  card.change >= 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {card.change >= 0 ? (
                  <ArrowUp className="h-3.5 w-3.5" />
                ) : (
                  <ArrowDown className="h-3.5 w-3.5" />
                )}
                {Math.abs(card.change)}%
              </span>
              <span className="text-xs text-slate-400">{card.subtitle}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Secondary KPIs */}
      <div className="grid gap-4 sm:grid-cols-3">
        {secondaryCards.map((card) => (
          <div
            key={card.label}
            className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
              <card.icon className="h-5 w-5 text-slate-500" />
            </div>
            <div>
              <p className="text-lg font-bold text-navy-900">{card.value}</p>
              <p className="text-xs text-slate-500">{card.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
