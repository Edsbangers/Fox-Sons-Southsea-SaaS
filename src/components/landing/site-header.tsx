"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const navigation = [
  { name: "Buy", href: "/properties?type=sale" },
  { name: "Rent", href: "/properties?type=rent" },
  { name: "Sell", href: "/sell" },
  { name: "Valuations", href: "/valuations" },
  { name: "AI Scout", href: "/ai-scout" },
  { name: "About", href: "/about" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold tracking-tight text-navy-900">
              Fox & Sons
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-600">
              Southsea
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-navy-800"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+442392821234"
            className="hidden items-center gap-1.5 text-sm font-medium text-navy-800 sm:flex"
          >
            <Phone className="h-4 w-4" />
            023 9282 1234
          </a>
          <Link
            href="/login"
            className="hidden rounded-lg bg-navy-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-800 sm:block"
          >
            Agent Login
          </Link>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-slate-600 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="border-t border-slate-100 pt-3">
              <Link
                href="/login"
                className="block rounded-lg bg-navy-900 px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Agent Login
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
