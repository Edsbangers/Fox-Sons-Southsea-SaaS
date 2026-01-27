"use client";

import { Bell, Search, Menu } from "lucide-react";

export function DashboardHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      {/* Left - Mobile menu + Search */}
      <div className="flex items-center gap-4">
        <button className="rounded-md p-2 text-slate-400 hover:bg-slate-100 lg:hidden">
          <Menu className="h-5 w-5" />
        </button>
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search leads, properties, agents..."
            className="w-72 rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100"
          />
        </div>
      </div>

      {/* Right - Notifications */}
      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700 sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
          Live
        </div>
        <button className="relative rounded-lg p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>
      </div>
    </header>
  );
}
