import { Metadata } from "next";
import { TrafficConversionChart } from "@/components/dashboard/traffic-conversion-chart";
import { AuditStats } from "@/components/dashboard/audit-stats";
import { AEOScoreboard } from "@/components/dashboard/aeo-scoreboard";
import { LeadPipeline } from "@/components/dashboard/lead-pipeline";
import { TopAgents } from "@/components/dashboard/top-agents";
import { LeadSourceBreakdown } from "@/components/dashboard/lead-source-breakdown";
import { RecentActivity } from "@/components/dashboard/recent-activity";
import { AIAgentStatus } from "@/components/dashboard/ai-agent-status";

export const metadata: Metadata = {
  title: "Dashboard",
};

// Real audit data injected from client brief
async function getDashboardData() {
  return {
    // Audit data from client
    auditStats: {
      totalVisits: 267116,
      mobilePercentage: 79.68,
      socialTraffic: 3,
      bounceRate: 59.62,
      desktopPercentage: 20.32,
      directTraffic: 42,
    },
    // Traffic vs Conversion data
    trafficConversion: {
      currentBounceRate: 59.62,
      agenticConversionRate: 34.5, // Projected with AI agents
      data: [
        { month: "Aug", traffic: 21500, conversions: 860, agenticConversions: 1290 },
        { month: "Sep", traffic: 23200, conversions: 928, agenticConversions: 1392 },
        { month: "Oct", traffic: 24800, conversions: 992, agenticConversions: 1488 },
        { month: "Nov", traffic: 22100, conversions: 884, agenticConversions: 1326 },
        { month: "Dec", traffic: 19800, conversions: 792, agenticConversions: 1188 },
        { month: "Jan", traffic: 26400, conversions: 1056, agenticConversions: 1584 },
      ],
    },
    // AEO Scoreboard
    aeoScore: {
      overall: 78,
      engines: [
        {
          name: "ChatGPT",
          icon: "🤖",
          score: 82,
          status: "excellent" as const,
          queries: ["estate agents southsea", "property valuation portsmouth"],
        },
        {
          name: "Claude",
          icon: "🟠",
          score: 85,
          status: "excellent" as const,
          queries: ["best estate agent PO5", "southsea house prices"],
        },
        {
          name: "Perplexity",
          icon: "🔮",
          score: 74,
          status: "good" as const,
          queries: ["buy house southsea", "portsmouth property market"],
        },
        {
          name: "Google SGE",
          icon: "🔍",
          score: 71,
          status: "good" as const,
          queries: ["fox and sons southsea", "estate agents near me"],
        },
      ],
    },
    leadPipeline: [
      { stage: "New", count: 42, color: "#3c5fa4" },
      { stage: "Contacted", count: 38, color: "#5c7dbb" },
      { stage: "Qualified", count: 28, color: "#ecad28" },
      { stage: "Viewing", count: 22, color: "#f1c044" },
      { stage: "Offer", count: 15, color: "#537853" },
      { stage: "Converted", count: 11, color: "#406040" },
    ],
    topAgents: [
      { id: "1", name: "Sarah Mitchell", leadsConverted: 18, revenue: 245000, viewings: 42, rating: 4.9 },
      { id: "2", name: "James Parker", leadsConverted: 15, revenue: 198000, viewings: 38, rating: 4.8 },
      { id: "3", name: "Emily Chen", leadsConverted: 12, revenue: 167000, viewings: 31, rating: 4.7 },
      { id: "4", name: "David Ross", leadsConverted: 9, revenue: 134000, viewings: 28, rating: 4.6 },
    ],
    leadSources: [
      { source: "Website", count: 48, percentage: 30.8, color: "#3c5fa4" },
      { source: "AI Scout", count: 32, percentage: 20.5, color: "#ecad28" },
      { source: "Rightmove", count: 28, percentage: 17.9, color: "#537853" },
      { source: "Zoopla", count: 18, percentage: 11.5, color: "#926b56" },
      { source: "Referral", count: 16, percentage: 10.3, color: "#5c7dbb" },
      { source: "Social", count: 8, percentage: 5.1, color: "#b0917a" },
    ],
    recentActivity: [
      {
        id: "1",
        type: "LEAD_CREATED",
        description: "New lead from AI Scout — James Wilson, budget £450k, Southsea",
        timestamp: "2 min ago",
        user: { name: "Lead Gen Agent" },
      },
      {
        id: "2",
        type: "SCOUT_RUN",
        description: "Planning application detected: PO5 3LS — Potential 4-bed instruction",
        timestamp: "8 min ago",
        user: { name: "Scout Agent" },
      },
      {
        id: "3",
        type: "VIEWING_SCHEDULED",
        description: "Viewing booked: 14 Kent Road — Saturday 10am",
        timestamp: "15 min ago",
        user: { name: "Sarah Mitchell" },
      },
      {
        id: "4",
        type: "SOCIAL_POSTED",
        description: "Instagram post scheduled: Southsea seafront at golden hour",
        timestamp: "32 min ago",
        user: { name: "Socials Agent" },
      },
      {
        id: "5",
        type: "OFFER_RECEIVED",
        description: "Offer received £465,000 on Clarence Parade penthouse",
        timestamp: "1 hour ago",
        user: { name: "James Parker" },
      },
      {
        id: "6",
        type: "LEAD_CONVERTED",
        description: "Lead converted — Sophie Taylor, exchanged on Merton Road",
        timestamp: "3 hours ago",
        user: { name: "David Ross" },
      },
    ],
    aiAgents: {
      leadGen: { status: "active" as const, leadsToday: 8, score: 92 },
      scout: { status: "active" as const, lastRun: "8 min ago", matches: 14 },
      socials: { status: "scheduled" as const, nextPost: "2:00 PM", postsThisWeek: 7 },
    },
  };
}

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-navy-900">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-500">
            Fox & Sons Southsea — Agentic SaaS Platform
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 border border-green-200">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          3 AI Agents Active
        </div>
      </div>

      {/* AI Agent Status Bar */}
      <AIAgentStatus agents={data.aiAgents} />

      {/* Main Analytics Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <TrafficConversionChart
            data={data.trafficConversion.data}
            currentBounceRate={data.trafficConversion.currentBounceRate}
            agenticConversionRate={data.trafficConversion.agenticConversionRate}
          />
        </div>
        <AuditStats
          totalVisits={data.auditStats.totalVisits}
          mobilePercentage={data.auditStats.mobilePercentage}
          socialTraffic={data.auditStats.socialTraffic}
          bounceRate={data.auditStats.bounceRate}
          desktopPercentage={data.auditStats.desktopPercentage}
          directTraffic={data.auditStats.directTraffic}
        />
      </div>

      {/* AEO & Pipeline Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <AEOScoreboard
          overallScore={data.aeoScore.overall}
          engines={data.aeoScore.engines}
        />
        <LeadPipeline stages={data.leadPipeline} />
        <LeadSourceBreakdown sources={data.leadSources} />
      </div>

      {/* Bottom Row */}
      <div className="grid gap-6 lg:grid-cols-3">
        <TopAgents agents={data.topAgents} />
        <div className="lg:col-span-2">
          <RecentActivity activities={data.recentActivity} />
        </div>
      </div>
    </div>
  );
}
