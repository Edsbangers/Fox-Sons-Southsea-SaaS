import { NextResponse } from "next/server";

// Analytics API endpoint — aggregates data from Umami + internal tracking
// In production, replace mock data with Supabase queries

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const period = searchParams.get("period") || "7d";

  // Mock aggregated analytics
  const analytics = {
    period,
    pageViews: {
      total: 12847,
      unique: 8932,
      change: 12.5,
      topPages: [
        { path: "/", views: 4230, title: "Home" },
        { path: "/properties", views: 3120, title: "Property Search" },
        { path: "/properties/victorian-terrace-kent-road", views: 890, title: "Victorian Terrace" },
        { path: "/valuations", views: 654, title: "Free Valuation" },
        { path: "/ai-scout", views: 521, title: "AI Scout" },
      ],
    },
    leads: {
      total: 156,
      new: 42,
      conversionRate: 14.2,
      avgScore: 64,
      bySource: {
        website: 48,
        ai_scout: 32,
        rightmove: 28,
        zoopla: 18,
        referral: 16,
        social: 14,
      },
    },
    agents: {
      activeCount: 12,
      avgLeadsPerAgent: 13,
      topPerformer: "Sarah Mitchell",
      totalViewings: 34,
    },
  };

  return NextResponse.json(analytics);
}
