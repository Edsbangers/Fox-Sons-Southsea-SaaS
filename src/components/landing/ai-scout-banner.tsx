"use client";

import { Bot, Sparkles, ArrowRight, Zap, Target, Bell } from "lucide-react";

export function AIScoutBanner() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-16 sm:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,173,40,0.06),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-400/10 px-3 py-1 text-sm text-gold-400">
              <Bot className="h-4 w-4" />
              AI-Powered
            </div>
            <h2 className="mb-4 font-serif text-3xl font-bold text-white sm:text-4xl">
              Meet your personal{" "}
              <span className="gold-accent">AI Property Scout</span>
            </h2>
            <p className="mb-8 text-lg text-slate-300">
              Our AI Scout learns your preferences and hunts for your ideal property
              24/7. Get matched with homes before they hit the major portals.
            </p>

            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  title: "Smart Matching",
                  desc: "AI analyses lifestyle, commute, and preferences — not just bedrooms and budget",
                },
                {
                  icon: Zap,
                  title: "Early Access",
                  desc: "Get alerted to properties before they appear on Rightmove or Zoopla",
                },
                {
                  icon: Bell,
                  title: "Market Intelligence",
                  desc: "Real-time price trends and neighbourhood insights for Southsea",
                },
              ].map((feature) => (
                <div key={feature.title} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5">
                    <feature.icon className="h-5 w-5 text-gold-400" />
                  </div>
                  <div>
                    <div className="font-medium text-white">{feature.title}</div>
                    <div className="text-sm text-slate-400">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-400">
              <Sparkles className="h-4 w-4" />
              Activate AI Scout — Free
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          {/* Right Visual - AI Chat Preview */}
          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500/20">
                  <Bot className="h-4 w-4 text-gold-400" />
                </div>
                <span className="font-medium text-white">AI Scout</span>
                <span className="ml-auto rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
                  Active
                </span>
              </div>

              <div className="space-y-3">
                <div className="rounded-lg bg-white/5 p-3">
                  <p className="text-sm text-slate-300">
                    I&apos;ve found 3 new matches based on your criteria. A stunning
                    Victorian terrace on Kent Road just came to market — 4 beds, period
                    features, south-facing garden. Shall I book a viewing?
                  </p>
                </div>
                <div className="ml-8 rounded-lg bg-gold-500/10 p-3">
                  <p className="text-sm text-gold-200">
                    Yes, book for Saturday morning. What&apos;s the neighbourhood like?
                  </p>
                </div>
                <div className="rounded-lg bg-white/5 p-3">
                  <p className="text-sm text-slate-300">
                    Kent Road is in PO5 — one of Southsea&apos;s most sought-after areas.
                    0.3 miles to the seafront, excellent Ofsted-rated schools nearby, and
                    prices have grown 8.2% YoY. I&apos;ve booked you for Saturday at 10am.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
