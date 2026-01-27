import { Metadata } from "next";
import { ScoutDashboard } from "@/components/agents/scout-dashboard";

export const metadata: Metadata = {
  title: "Scout Agent",
};

async function getScoutData() {
  return {
    lastRun: "12 minutes ago",
    nextRun: "48 minutes",
    totalMatches: 247,
    pendingReview: 14,
    matchesThisWeek: 32,
    accuracy: 87,
    recentMatches: [
      {
        id: "1",
        title: "3-bed Victorian, Campbell Road",
        source: "Council planning portal",
        matchScore: 94,
        status: "PENDING" as const,
        summary: "Recently approved change of use — potential conversion to 3 flats. High yield area.",
        detectedAt: "12 min ago",
      },
      {
        id: "2",
        title: "Probate listing — Marmion Road",
        source: "Local solicitor network",
        matchScore: 88,
        status: "PENDING" as const,
        summary: "4-bed semi-detached, executor sale likely. Below market value opportunity for investors.",
        detectedAt: "2 hours ago",
      },
      {
        id: "3",
        title: "Off-market — St Ronan's Avenue",
        source: "Direct vendor contact",
        matchScore: 91,
        status: "REVIEWED" as const,
        summary: "5-bed Edwardian detached in Craneswater. Vendor seeking discreet sale, no portal listing.",
        detectedAt: "5 hours ago",
      },
      {
        id: "4",
        title: "New development — Elm Grove",
        source: "Planning applications",
        matchScore: 76,
        status: "MATCHED" as const,
        summary: "12-unit residential development approved. Pre-construction opportunity for early buyers.",
        detectedAt: "1 day ago",
      },
      {
        id: "5",
        title: "Auction lot — Fratton Road",
        source: "Auction house feed",
        matchScore: 72,
        status: "DISMISSED" as const,
        summary: "Commercial unit with residential potential. Guide price £180k, needs significant work.",
        detectedAt: "2 days ago",
      },
    ],
  };
}

export default async function ScoutAgentPage() {
  const data = await getScoutData();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-navy-900">Scout Agent</h1>
        <p className="mt-1 text-sm text-slate-500">
          Automated local data intelligence — runs on Vercel Cron
        </p>
      </div>
      <ScoutDashboard data={data} />
    </div>
  );
}
