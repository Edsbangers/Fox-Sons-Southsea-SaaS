import { ArrowRight, Bed, Bath, Maximize, Heart } from "lucide-react";
import Link from "next/link";

// Mock data - in production this would come from Supabase
const featuredProperties = [
  {
    id: "1",
    slug: "victorian-terrace-kent-road",
    title: "Stunning Victorian Terrace",
    price: 475000,
    address: "Kent Road, Southsea",
    postcode: "PO5 3EL",
    bedrooms: 4,
    bathrooms: 2,
    sqft: 1850,
    image: "/images/properties/victorian-terrace.jpg",
    tag: "Just Listed",
    propertyType: "Terraced",
  },
  {
    id: "2",
    slug: "seafront-penthouse-clarence-parade",
    title: "Seafront Penthouse with Panoramic Views",
    price: 695000,
    address: "Clarence Parade, Southsea",
    postcode: "PO5 2HX",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1400,
    image: "/images/properties/seafront-penthouse.jpg",
    tag: "Premium",
    propertyType: "Penthouse",
  },
  {
    id: "3",
    slug: "character-cottage-old-portsmouth",
    title: "Character Cottage in Old Portsmouth",
    price: 385000,
    address: "Broad Street, Old Portsmouth",
    postcode: "PO1 2JE",
    bedrooms: 2,
    bathrooms: 1,
    sqft: 950,
    image: "/images/properties/old-portsmouth-cottage.jpg",
    tag: "Popular",
    propertyType: "Cottage",
  },
  {
    id: "4",
    slug: "edwardian-detached-craneswater",
    title: "Edwardian Detached with Gardens",
    price: 850000,
    address: "St. Ronan's Road, Craneswater",
    postcode: "PO4 0PX",
    bedrooms: 5,
    bathrooms: 3,
    sqft: 2800,
    image: "/images/properties/edwardian-detached.jpg",
    tag: "Exclusive",
    propertyType: "Detached",
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0,
  }).format(price);
}

export function FeaturedProperties() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-gold-600">
              Featured Properties
            </p>
            <h2 className="font-serif text-3xl font-bold text-navy-900 sm:text-4xl">
              Exceptional Southsea homes
            </h2>
          </div>
          <Link
            href="/properties"
            className="hidden items-center gap-2 text-sm font-medium text-navy-700 hover:text-navy-900 sm:flex"
          >
            View all properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProperties.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.slug}`}
              className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition-all hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
                {/* Placeholder - replace with Next/Image in production */}
                <div className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
                  <span className="text-4xl text-white/20 font-serif">{property.propertyType[0]}</span>
                </div>
                <div className="absolute left-3 top-3 z-20 rounded-full bg-navy-900/90 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {property.tag}
                </div>
                <button className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-slate-600 backdrop-blur-sm transition-colors hover:text-red-500">
                  <Heart className="h-4 w-4" />
                </button>
              </div>

              {/* Details */}
              <div className="p-4">
                <div className="mb-1 text-xl font-bold text-navy-900">
                  {formatPrice(property.price)}
                </div>
                <h3 className="mb-1 text-sm font-semibold text-slate-800 group-hover:text-navy-700">
                  {property.title}
                </h3>
                <p className="mb-3 text-xs text-slate-500">{property.address}</p>
                <div className="flex items-center gap-4 text-xs text-slate-600">
                  <span className="flex items-center gap-1">
                    <Bed className="h-3.5 w-3.5" /> {property.bedrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-3.5 w-3.5" /> {property.bathrooms}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-3.5 w-3.5" /> {property.sqft} sq ft
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy-700"
          >
            View all properties
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
