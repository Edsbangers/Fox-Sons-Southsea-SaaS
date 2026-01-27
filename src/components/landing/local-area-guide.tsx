import { MapPin, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const areas = [
  {
    name: "Southsea",
    postcode: "PO4/PO5",
    avgPrice: "£385,000",
    growth: "+6.2%",
    description: "Victorian architecture, vibrant community, seafront living",
    properties: 87,
    color: "from-navy-800 to-navy-900",
  },
  {
    name: "Old Portsmouth",
    postcode: "PO1",
    avgPrice: "£425,000",
    growth: "+8.1%",
    description: "Historic harbour area, character properties, waterfront dining",
    properties: 24,
    color: "from-brand-700 to-brand-900",
  },
  {
    name: "Eastney",
    postcode: "PO4",
    avgPrice: "£310,000",
    growth: "+5.8%",
    description: "Beach access, Royal Marines heritage, growing investment area",
    properties: 42,
    color: "from-sage-700 to-sage-900",
  },
  {
    name: "Craneswater",
    postcode: "PO4",
    avgPrice: "£575,000",
    growth: "+4.5%",
    description: "Premium tree-lined avenues, large family homes, Canoe Lake proximity",
    properties: 18,
    color: "from-navy-700 to-navy-950",
  },
];

export function LocalAreaGuide() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold-600">
            Local Expertise
          </p>
          <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
            Portsmouth area guide
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            In-depth local knowledge from agents who live and breathe the Southsea
            property market.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {areas.map((area) => (
            <Link
              key={area.name}
              href={`/properties?area=${area.name.toLowerCase().replace(" ", "-")}`}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg"
            >
              <div className={`bg-gradient-to-br ${area.color} p-6`}>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-4 w-4" />
                  <span className="text-xs font-medium">{area.postcode}</span>
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold text-white">
                  {area.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="mb-3 text-sm text-slate-600">{area.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <div className="font-bold text-navy-900">{area.avgPrice}</div>
                    <div className="text-xs text-slate-500">Avg. price</div>
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <TrendingUp className="h-3.5 w-3.5" />
                    <span className="font-medium">{area.growth}</span>
                  </div>
                </div>
                <div className="mt-3 border-t border-slate-100 pt-3 text-xs text-slate-500">
                  {area.properties} properties available
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
