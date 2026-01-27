import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "@/styles/globals.css";
import { UmamiAnalytics } from "@/components/shared/umami-analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Fox & Sons Southsea | Premium Estate Agents in Portsmouth",
    template: "%s | Fox & Sons Southsea",
  },
  description:
    "Southsea's premier estate agency. Discover exceptional properties across Portsmouth, Southsea, and the Hampshire coast. Expert valuations, AI-powered property matching, and dedicated local agents.",
  keywords: [
    "estate agents southsea",
    "property for sale portsmouth",
    "southsea estate agents",
    "fox and sons",
    "portsmouth property",
    "houses for sale southsea",
    "lettings portsmouth",
    "property valuation southsea",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Fox & Sons Southsea",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen font-sans">
        {children}
        <UmamiAnalytics />
      </body>
    </html>
  );
}
