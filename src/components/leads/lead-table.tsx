"use client";

import { MoreHorizontal, Mail, Phone, ExternalLink, Bot, Globe, Users as UsersIcon } from "lucide-react";
import type { LeadWithRelations } from "@/types";

type LeadTableProps = {
  leads: LeadWithRelations[];
};

const statusStyles: Record<string, string> = {
  NEW: "bg-blue-50 text-blue-700 border-blue-200",
  CONTACTED: "bg-slate-50 text-slate-700 border-slate-200",
  QUALIFIED: "bg-amber-50 text-amber-700 border-amber-200",
  VIEWING_BOOKED: "bg-purple-50 text-purple-700 border-purple-200",
  OFFER_MADE: "bg-emerald-50 text-emerald-700 border-emerald-200",
  NEGOTIATING: "bg-orange-50 text-orange-700 border-orange-200",
  CONVERTED: "bg-green-50 text-green-700 border-green-200",
  LOST: "bg-red-50 text-red-700 border-red-200",
};

const sourceIcons: Record<string, typeof Bot> = {
  AI_SCOUT: Bot,
  WEBSITE: Globe,
  RIGHTMOVE: ExternalLink,
  ZOOPLA: ExternalLink,
  REFERRAL: UsersIcon,
  SOCIAL_MEDIA: ExternalLink,
};

const priorityDot: Record<string, string> = {
  URGENT: "bg-red-500",
  HIGH: "bg-orange-500",
  MEDIUM: "bg-amber-400",
  LOW: "bg-slate-400",
};

function formatStatus(status: string) {
  return status.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(value);
}

function timeAgo(dateString: string) {
  const now = new Date();
  const date = new Date(dateString);
  const diffMs = now.getTime() - date.getTime();
  const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffHrs < 1) return "Just now";
  if (diffHrs < 24) return `${diffHrs}h ago`;
  const diffDays = Math.floor(diffHrs / 24);
  return `${diffDays}d ago`;
}

export function LeadTable({ leads }: LeadTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50">
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Lead
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Source
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Status
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Budget
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Score
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Agent
              </th>
              <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-slate-500">
                Created
              </th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {leads.map((lead) => {
              const SourceIcon = sourceIcons[lead.source] || Globe;
              return (
                <tr
                  key={lead.id}
                  className="transition-colors hover:bg-slate-50/50 cursor-pointer"
                >
                  {/* Lead Name & Contact */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`h-2 w-2 rounded-full ${priorityDot[lead.priority]}`}
                        title={`${lead.priority} priority`}
                      />
                      <div>
                        <div className="text-sm font-semibold text-navy-900">
                          {lead.name}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Mail className="h-3 w-3" />
                          {lead.email}
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Source */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-1.5">
                      <SourceIcon className="h-3.5 w-3.5 text-slate-400" />
                      <span className="text-sm text-slate-700">
                        {lead.source.replace(/_/g, " ")}
                      </span>
                    </div>
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex rounded-full border px-2.5 py-0.5 text-xs font-medium ${statusStyles[lead.status]}`}
                    >
                      {formatStatus(lead.status)}
                    </span>
                  </td>

                  {/* Budget */}
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-navy-900">
                      {lead.budget ? formatCurrency(lead.budget) : "—"}
                    </span>
                  </td>

                  {/* Score */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-12 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${
                            lead.score >= 80
                              ? "bg-green-500"
                              : lead.score >= 50
                                ? "bg-amber-500"
                                : "bg-slate-400"
                          }`}
                          style={{ width: `${lead.score}%` }}
                        />
                      </div>
                      <span className="text-xs font-medium text-slate-600">
                        {lead.score}
                      </span>
                    </div>
                  </td>

                  {/* Agent */}
                  <td className="px-4 py-3">
                    {lead.assignedAgent ? (
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-navy-100 text-[10px] font-semibold text-navy-700">
                          {lead.assignedAgent.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <span className="text-sm text-slate-700">
                          {lead.assignedAgent.name.split(" ")[0]}
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400">Unassigned</span>
                    )}
                  </td>

                  {/* Created */}
                  <td className="px-4 py-3">
                    <span className="text-sm text-slate-500">
                      {timeAgo(lead.createdAt)}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <button className="rounded-md p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
                      <MoreHorizontal className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
