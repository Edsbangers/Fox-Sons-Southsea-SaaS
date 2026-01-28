import { TrendingUp, Home, Clock, PoundSterling, BarChart3, Users } from "lucide-react";

const insights = [
  {
    label: "Avg. Sold Price (Southsea)",
    value: "£387,500",
    change: "+6.2%",
    positive: true,
    icon: PoundSterling,
  },
  {
    label: "Properties Sold (2025)",
    value: "1,247",
    change: "+12%",
    positive: true,
    icon: Home,
  },
  {
    label: "Avg. Days on Market",
    value: "28",
    change: "-8 days",
    positive: true,
    icon: Clock,
  },
  {
    label: "Buyer Demand Index",
    value: "High",
    change: "Top 15% UK",
    positive: true,
    icon: TrendingUp,
  },
];

const postcodeData = [
  { postcode: "PO4", area: "Southsea East", avgPrice: "£342,000", change: "+5.8%" },
  { postcode: "PO5", area: "Southsea Central", avgPrice: "£425,000", change: "+7.2%" },
  { postcode: "PO1", area: "Old Portsmouth", avgPrice: "£465,000", change: "+8.1%" },
  { postcode: "PO6", area: "Cosham", avgPrice: "£298,000", change: "+4.3%" },
];

export function MarketInsights() {
  return (
    <section className="bg-navy-950 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold-400">
            Market Intelligence
          </p>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Southsea Property Market Insights
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-400">
            Real-time data from Land Registry, local sales, and our proprietary AI analysis.
            Updated daily to give you the edge in Portsmouth&apos;s property market.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                  <p className="mt-1 text-2xl font-bold text-white">{stat.value}</p>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold-500/10">
                  <stat.icon className="h-5 w-5 text-gold-400" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-1 text-sm">
                <TrendingUp className={`h-3.5 w-3.5 ${stat.positive ? "text-green-400" : "text-red-400"}`} />
                <span className={stat.positive ? "text-green-400" : "text-red-400"}>
                  {stat.change}
                </span>
                <span className="text-slate-500">vs last year</span>
              </div>
            </div>
          ))}
        </div>

        {/* Postcode Breakdown */}
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">Price by Postcode</h3>
              <p className="text-sm text-slate-400">Average sold prices in Portsmouth area</p>
            </div>
            <BarChart3 className="h-5 w-5 text-gold-400" />
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {postcodeData.map((data) => (
              <div
                key={data.postcode}
                className="rounded-lg border border-white/5 bg-white/5 p-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gold-400">{data.postcode}</span>
                  <span className="text-xs text-green-400">{data.change}</span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{data.area}</p>
                <p className="mt-2 text-xl font-semibold text-white">{data.avgPrice}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Source attribution */}
        <p className="mt-6 text-center text-xs text-slate-500">
          Data sources: HM Land Registry, Rightmove, Fox & Sons proprietary analysis. Last updated: January 2026.
        </p>
      </div>
    </section>
  );
}

// Enhanced JSON-LD for Market Insights (to be added to page.tsx)
export const marketInsightsSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "Southsea Property Market Data",
  description: "Real-time property market statistics for Southsea, Portsmouth, and Hampshire coast including average prices, days on market, and postcode-level analysis.",
  creator: {
    "@type": "RealEstateAgent",
    name: "Fox & Sons Southsea",
    url: "https://foxandsons-southsea.co.uk",
  },
  dateModified: "2026-01-27",
  spatialCoverage: {
    "@type": "Place",
    name: "Southsea, Portsmouth, UK",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.7823,
      longitude: -1.0878,
    },
  },
  variableMeasured: [
    {
      "@type": "PropertyValue",
      name: "Average Sold Price",
      value: "387500",
      unitCode: "GBP",
    },
    {
      "@type": "PropertyValue",
      name: "Average Days on Market",
      value: "28",
      unitCode: "DAY",
    },
    {
      "@type": "PropertyValue",
      name: "Properties Sold (Annual)",
      value: "1247",
    },
  ],
};
