import { Metadata } from "next";
import { StatsGrid } from "@/components/dashboard/stats-grid";
import { PageViewsChart } from "@/components/dashboard/page-views-chart";
import { LeadPipeline } from "@/components/dashboard/lead-pipeline";
import { TopAgents } from "@/components/dashboard/top-agents";
import { LeadSourceBreakdown } from "@/components/dashboard/lead-source-breakdown";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { AIAgentStatus } from "@/components/dashboard/ai-agent-status";

export const metadata: Metadata = {
  title: "Dashboard",
};

// In production, this fetches from Supabase via server component
async function getDashboardData() {
  return {
    stats: {
      pageViews: { total: 12847, change: 12.5 },
      activeLeads: { total: 156, change: 8.3 },
      conversionRate: { rate: 14.2, change: 2.1 },
      revenue: { total: 847500, change: 15.7 },
      avgDaysOnMarket: 28,
      propertiesListed: 87,
      viewingsThisWeek: 34,
    },
    pageViewsTimeSeries: [
      { date: "Mon", value: 1420 },
      { date: "Tue", value: 1680 },
      { date: "Wed", value: 1520 },
      { date: "Thu", value: 1890 },
      { date: "Fri", value: 2100 },
      { date: "Sat", value: 2450 },
      { date: "Sun", value: 1787 },
    ],
    leadPipeline: [
      { stage: "New", count: 42, color: "#3c5fa4" },
      { stage: "Contacted", count: 38, color: "#5c7dbb" },
      { stage: "Qualified", count: 28, color: "#ecad28" },
      { stage: "Viewing", count: 22, color: "#f1c044" },
      { stage: "Offer", count: 15, color: "#537853" },
      { stage: "Converted", count: 11, color: "#406040" },
    ],
    topAgents: [
      {
        id: "1",
        name: "Sarah Mitchell",
        leadsConverted: 18,
        revenue: 245000,
        viewings: 42,
        rating: 4.9,
      },
      {
        id: "2",
        name: "James Parker",
        leadsConverted: 15,
        revenue: 198000,
        viewings: 38,
        rating: 4.8,
      },
      {
        id: "3",
        name: "Emily Chen",
        leadsConverted: 12,
        revenue: 167000,
        viewings: 31,
        rating: 4.7,
      },
      {
        id: "4",
        name: "David Ross",
        leadsConverted: 9,
        revenue: 134000,
        viewings: 28,
        rating: 4.6,
      },
    ],
    leadSources: [
      { source: "Website", count: 48, percentage: 30.8, color: "#3c5fa4" },
      { source: "AI Scout", count: 32, percentage: 20.5, color: "#ecad28" },
      { source: "Rightmove", count: 28, percentage: 17.9, color: "#537853" },
      { source: "Zoopla", count: 18, percentage: 11.5, color: "#926b56" },
      { source: "Referral", count: 16, percentage: 10.3, color: "#5c7dbb" },
      { source: "Social", count: 14, percentage: 9.0, color: "#b0917a" },
    ],
    recentActivity: [
      {
        id: "1",
        type: "LEAD_CREATED",
        description: "New lead from AI Scout — James Wilson, budget £450k, Southsea",
        timestamp: "2 min ago",
        user: { name: "AI Scout" },
      },
      {
        id: "2",
        type: "VIEWING_SCHEDULED",
        description: "Viewing booked: 14 Kent Road — Saturday 10am",
        timestamp: "15 min ago",
        user: { name: "Sarah Mitchell" },
      },
      {
        id: "3",
        type: "OFFER_RECEIVED",
        description: "Offer received £465,000 on Clarence Parade penthouse",
        timestamp: "1 hour ago",
        user: { name: "James Parker" },
      },
      {
        id: "4",
        type: "PROPERTY_LISTED",
        description: "New listing: Victorian terrace, Albert Road — £395,000",
        timestamp: "2 hours ago",
        user: { name: "Emily Chen" },
      },
      {
        id: "5",
        type: "LEAD_CONVERTED",
        description: "Lead converted — Sophie Taylor, exchanged on Merton Road",
        timestamp: "3 hours ago",
        user: { name: "David Ross" },
      },
      {
        id: "6",
        type: "SOCIAL_POSTED",
        description: "Instagram post published: Southsea seafront sunset — 847 reach",
        timestamp: "4 hours ago",
        user: { name: "Socials Agent" },
      },
    ],
    aiAgents: {
      leadGen: { status: "active" as const, leadsToday: 8, score: 92 },
      scout: { status: "active" as const, lastRun: "12 min ago", matches: 14 },
      socials: {
        status: "scheduled" as const,
        nextPost: "2:00 PM",
        postsThisWeek: 7,
      },
    },
  };
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="font-serif text-2xl font-bold text-navy-900">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-500">
          Real-time overview of Fox & Sons Southsea operations
        </p>
      </div>

      {/* KPI Stats Grid */}
      <StatsGrid stats={data.stats} />

      {/* Charts Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <PageViewsChart data={data.pageViewsTimeSeries} />
        </div>
        <LeadPipeline stages={data.leadPipeline} />
      </div>

      {/* AI Agent Status Bar */}
      <AIAgentStatus agents={data.aiAgents} />

      {/* Bottom Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <TopAgents agents={data.topAgents} />
        <LeadSourceBreakdown sources={data.leadSources} />
        <RecentActivity activities={data.recentActivity} />
      </div>
    </div>
  );
}
