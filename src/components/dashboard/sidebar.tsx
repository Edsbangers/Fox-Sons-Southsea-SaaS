"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Home,
  BarChart3,
  Bot,
  Radar,
  Share2,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils/cn";

const navigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Analytics", href: "/admin/analytics", icon: BarChart3 },
  { name: "Leads", href: "/admin/leads", icon: Users },
  { name: "Properties", href: "/admin/properties", icon: Home },
  {
    name: "AI Agents",
    icon: Sparkles,
    children: [
      { name: "Lead Gen Agent", href: "/admin/agents/lead-gen", icon: Bot },
      { name: "Scout Agent", href: "/admin/agents/scout", icon: Radar },
      { name: "Socials Agent", href: "/admin/agents/socials", icon: Share2 },
    ],
  },
  { name: "Settings", href: "/admin/settings", icon: Settings },
];

export function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      {/* Brand */}
      <div className="flex h-16 items-center border-b border-slate-100 px-6">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-900">
            <span className="font-serif text-sm font-bold text-gold-400">F</span>
          </div>
          <div>
            <span className="font-serif text-sm font-bold text-navy-900">
              Fox & Sons
            </span>
            <div className="text-[9px] font-medium uppercase tracking-widest text-brand-500">
              Admin Portal
            </div>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navigation.map((item) =>
          item.children ? (
            <div key={item.name} className="pt-3">
              <div className="mb-1 flex items-center gap-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                <item.icon className="h-3.5 w-3.5" />
                {item.name}
              </div>
              {item.children.map((child) => (
                <Link
                  key={child.name}
                  href={child.href}
                  className={cn(
                    "sidebar-link ml-2",
                    pathname === child.href && "sidebar-link-active"
                  )}
                >
                  <child.icon className="h-4 w-4" />
                  {child.name}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.href!}
              className={cn(
                "sidebar-link",
                pathname === item.href && "sidebar-link-active"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          )
        )}
      </nav>

      {/* User */}
      <div className="border-t border-slate-100 p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-100 text-sm font-semibold text-navy-700">
            JM
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-slate-800">Jason Misters</div>
            <div className="text-xs text-slate-500">Admin</div>
          </div>
          <button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600">
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
