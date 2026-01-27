"use client";

import { Search, Filter, SlidersHorizontal } from "lucide-react";

export function LeadFilters() {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          type="text"
          placeholder="Search leads by name, email, or phone..."
          className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100"
        />
      </div>

      {/* Status Filter */}
      <select className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-navy-300">
        <option value="">All Statuses</option>
        <option value="NEW">New</option>
        <option value="CONTACTED">Contacted</option>
        <option value="QUALIFIED">Qualified</option>
        <option value="VIEWING_BOOKED">Viewing Booked</option>
        <option value="OFFER_MADE">Offer Made</option>
        <option value="CONVERTED">Converted</option>
        <option value="LOST">Lost</option>
      </select>

      {/* Source Filter */}
      <select className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-navy-300">
        <option value="">All Sources</option>
        <option value="WEBSITE">Website</option>
        <option value="AI_SCOUT">AI Scout</option>
        <option value="RIGHTMOVE">Rightmove</option>
        <option value="ZOOPLA">Zoopla</option>
        <option value="REFERRAL">Referral</option>
        <option value="SOCIAL_MEDIA">Social Media</option>
      </select>

      {/* Priority Filter */}
      <select className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 outline-none focus:border-navy-300">
        <option value="">All Priorities</option>
        <option value="URGENT">Urgent</option>
        <option value="HIGH">High</option>
        <option value="MEDIUM">Medium</option>
        <option value="LOW">Low</option>
      </select>
    </div>
  );
}
