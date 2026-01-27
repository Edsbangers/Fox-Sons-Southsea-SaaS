"use client";

import {
  UserPlus,
  Calendar,
  DollarSign,
  Home,
  CheckCircle2,
  Share2,
  Bot,
} from "lucide-react";
import type { ActivityItem } from "@/types";

type RecentActivityProps = {
  activities: ActivityItem[];
};

const iconMap: Record<string, typeof UserPlus> = {
  LEAD_CREATED: UserPlus,
  VIEWING_SCHEDULED: Calendar,
  OFFER_RECEIVED: DollarSign,
  PROPERTY_LISTED: Home,
  LEAD_CONVERTED: CheckCircle2,
  SOCIAL_POSTED: Share2,
};

const colorMap: Record<string, string> = {
  LEAD_CREATED: "bg-blue-50 text-blue-600",
  VIEWING_SCHEDULED: "bg-purple-50 text-purple-600",
  OFFER_RECEIVED: "bg-green-50 text-green-600",
  PROPERTY_LISTED: "bg-amber-50 text-amber-600",
  LEAD_CONVERTED: "bg-emerald-50 text-emerald-600",
  SOCIAL_POSTED: "bg-pink-50 text-pink-600",
};

export function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-navy-900">Recent Activity</h3>
          <p className="text-xs text-slate-500">Live feed</p>
        </div>
        <span className="flex items-center gap-1 text-xs text-green-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          Live
        </span>
      </div>

      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = iconMap[activity.type] || Bot;
          const colorClass = colorMap[activity.type] || "bg-slate-50 text-slate-600";

          return (
            <div key={activity.id} className="flex gap-3">
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${colorClass}`}
              >
                <Icon className="h-3.5 w-3.5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-700 leading-snug">
                  {activity.description}
                </p>
                <div className="mt-1 flex items-center gap-2 text-xs text-slate-400">
                  <span>{activity.user?.name}</span>
                  <span>·</span>
                  <span>{activity.timestamp}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
