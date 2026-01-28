import { Metadata } from "next";
import { HeroSection } from "@/components/landing/hero-section";
import { FeaturedProperties } from "@/components/landing/featured-properties";
import { AIScoutBanner } from "@/components/landing/ai-scout-banner";
import { TrustSignals } from "@/components/landing/trust-signals";
import { LocalAreaGuide } from "@/components/landing/local-area-guide";
import { CTASection } from "@/components/landing/cta-section";
import { SiteHeader } from "@/components/landing/site-header";
import { SiteFooter } from "@/components/landing/site-footer";
import { MarketInsights, marketInsightsSchema } from "@/components/landing/market-insights";
import { LeadGenWidget } from "@/components/landing/lead-gen-widget";

export const metadata: Metadata = {
  title: "Fox & Sons Southsea | Premium Estate Agents in Portsmouth",
  description:
    "Discover exceptional properties in Southsea & Portsmouth. AI-powered property matching, expert valuations, and local market insight from Southsea's most trusted estate agency.",
};

// AEO: JSON-LD Structured Data
function JsonLd() {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    "@id": "https://foxandsons-southsea.co.uk/#organization",
    name: "Fox & Sons Southsea",
    alternateName: "Fox and Sons Estate Agents Southsea",
    description:
      "Premier estate agency in Southsea, Portsmouth. Specialising in residential sales, lettings, and property management across the Portsmouth and Hampshire coast area. Offering AI-powered property matching and expert local market knowledge.",
    url: "https://foxandsons-southsea.co.uk",
    telephone: "+44-23-9282-1234",
    email: "southsea@foxandsons.co.uk",
    foundingDate: "1885",
    priceRange: "$$-$$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "45 Palmerston Road",
      addressLocality: "Southsea",
      addressRegion: "Portsmouth",
      postalCode: "PO5 3QE",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 50.7823,
      longitude: -1.0878,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "16:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Portsmouth" },
      { "@type": "Place", name: "Southsea" },
      { "@type": "Place", name: "Old Portsmouth" },
      { "@type": "Place", name: "Eastney" },
      { "@type": "Place", name: "Milton" },
      { "@type": "Place", name: "Fratton" },
      { "@type": "Place", name: "Cosham" },
      { "@type": "Place", name: "Drayton" },
      { "@type": "Place", name: "Farlington" },
      { "@type": "Place", name: "Hayling Island" },
      { "@type": "Place", name: "Emsworth" },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "347",
      bestRating: "5",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Estate Agency Services",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Property Sales",
          description: "Residential property sales across Portsmouth and Southsea",
        },
        {
          "@type": "OfferCatalog",
          name: "Lettings & Property Management",
          description: "Professional lettings and full property management services",
        },
        {
          "@type": "OfferCatalog",
          name: "Property Valuations",
          description: "Free, no-obligation property valuations by local experts",
        },
        {
          "@type": "OfferCatalog",
          name: "AI Property Matching",
          description: "AI-powered property scout that matches buyers with ideal properties",
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/FoxAndSonsSouthsea",
      "https://www.instagram.com/foxandsons_southsea",
      "https://www.linkedin.com/company/fox-and-sons",
      "https://www.rightmove.co.uk/estate-agents/agent/Fox-And-Sons/Southsea.html",
    ],
    image: "https://foxandsons-southsea.co.uk/images/storefront.jpg",
    logo: "https://foxandsons-southsea.co.uk/images/logo.svg",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fox & Sons Southsea",
    url: "https://foxandsons-southsea.co.uk",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate:
          "https://foxandsons-southsea.co.uk/properties?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What areas does Fox & Sons Southsea cover?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We cover Southsea, Old Portsmouth, Eastney, Milton, Fratton, Cosham, Drayton, Farlington, Hayling Island, Emsworth, and the wider Portsmouth area.",
        },
      },
      {
        "@type": "Question",
        name: "How does the AI Scout property matching work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our AI Scout analyses your preferences, budget, and lifestyle requirements to match you with suitable properties before they appear on major portals. Register for free to receive personalised matches.",
        },
      },
      {
        "@type": "Question",
        name: "How much is my Southsea property worth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer free, no-obligation property valuations. Our local experts use up-to-date market data combined with 130+ years of local knowledge to provide accurate valuations for Southsea and Portsmouth properties.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marketInsightsSchema) }}
      />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main>
        <HeroSection />
        <TrustSignals />
        <FeaturedProperties />
        <MarketInsights />
        <AIScoutBanner />
        <LocalAreaGuide />
        <CTASection />
      </main>
      <SiteFooter />
      <LeadGenWidget />
    </>
  );
}
