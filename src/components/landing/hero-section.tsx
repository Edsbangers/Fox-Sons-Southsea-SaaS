"use client";

import { Search, MapPin, Home, ArrowRight } from "lucide-react";
import { useState } from "react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState<"buy" | "rent">("buy");

  return (
    <section className="relative overflow-hidden bg-navy-950 pb-20 pt-16">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(236,173,40,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(60,95,164,0.12),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold-400/20 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-400">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
            AI-Powered Property Matching
          </div>

          {/* Headline */}
          <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find your perfect home in{" "}
            <span className="gold-accent">Southsea</span>
          </h1>

          <p className="mb-10 text-lg text-slate-300 sm:text-xl">
            Over 130 years of local expertise, now enhanced with AI-powered property
            intelligence. Discover exceptional homes across Portsmouth&apos;s most
            desirable neighbourhoods.
          </p>

          {/* Search Bar */}
          <div className="mx-auto max-w-2xl">
            {/* Toggle */}
            <div className="mb-4 flex justify-center gap-2">
              <button
                onClick={() => setSearchType("buy")}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  searchType === "buy"
                    ? "bg-white text-navy-900 shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType("rent")}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                  searchType === "rent"
                    ? "bg-white text-navy-900 shadow-lg"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Rent
              </button>
            </div>

            {/* Search Input */}
            <div className="relative flex items-center rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-xl">
              <div className="flex flex-1 items-center gap-3 px-4">
                <MapPin className="h-5 w-5 text-gold-400" />
                <input
                  type="text"
                  placeholder="Search by area, postcode, or use AI Scout..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent py-2 text-white placeholder-slate-400 outline-none"
                />
              </div>
              <button className="flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-400">
                <Search className="h-4 w-4" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm">
              {["Southsea", "Old Portsmouth", "Eastney", "Cosham", "Hayling Island"].map(
                (area) => (
                  <button
                    key={area}
                    className="rounded-full border border-white/10 px-3 py-1 text-slate-400 transition-colors hover:border-gold-400/30 hover:text-gold-400"
                  >
                    {area}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Properties Listed", value: "340+" },
            { label: "Avg Days to Sell", value: "28" },
            { label: "Local Agents", value: "12" },
            { label: "Client Rating", value: "4.8★" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-white sm:text-3xl">{stat.value}</div>
              <div className="mt-1 text-xs text-slate-400 sm:text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
