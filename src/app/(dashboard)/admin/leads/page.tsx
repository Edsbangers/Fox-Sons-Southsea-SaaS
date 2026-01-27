import { Metadata } from "next";
import { LeadTable } from "@/components/leads/lead-table";
import { LeadFilters } from "@/components/leads/lead-filters";
import { LeadStats } from "@/components/leads/lead-stats";

export const metadata: Metadata = {
  title: "Lead Management",
};

// Mock data - replace with Supabase query
async function getLeads() {
  return {
    summary: {
      total: 156,
      new: 42,
      qualified: 28,
      converted: 11,
      avgScore: 64,
    },
    leads: [
      {
        id: "1",
        name: "James Wilson",
        email: "james.wilson@email.com",
        phone: "07700 900123",
        source: "AI_SCOUT",
        status: "NEW",
        priority: "HIGH",
        budget: 450000,
        score: 87,
        message: "Looking for 3-bed Victorian terrace in Southsea, ideally PO5",
        createdAt: "2026-01-27T09:15:00Z",
        assignedAgent: { id: "1", name: "Sarah Mitchell" },
        property: { id: "1", title: "Victorian Terrace, Kent Road", slug: "victorian-terrace-kent-road" },
        notes: [],
      },
      {
        id: "2",
        name: "Sophie Taylor",
        email: "sophie.taylor@email.com",
        phone: "07700 900456",
        source: "WEBSITE",
        status: "VIEWING_BOOKED",
        priority: "HIGH",
        budget: 550000,
        score: 92,
        message: "Family relocating from London, need 4-bed with garden",
        createdAt: "2026-01-26T14:30:00Z",
        assignedAgent: { id: "2", name: "James Parker" },
        property: null,
        notes: [
          { id: "n1", content: "Called, very motivated buyer, budget flexible", authorName: "James Parker", createdAt: "2026-01-26T15:00:00Z" },
        ],
      },
      {
        id: "3",
        name: "Mark Henderson",
        email: "mark.h@email.com",
        phone: "07700 900789",
        source: "RIGHTMOVE",
        status: "QUALIFIED",
        priority: "MEDIUM",
        budget: 320000,
        score: 68,
        message: "First time buyer, interested in Eastney flats",
        createdAt: "2026-01-25T11:00:00Z",
        assignedAgent: { id: "3", name: "Emily Chen" },
        property: null,
        notes: [],
      },
      {
        id: "4",
        name: "Rebecca Liu",
        email: "rebecca.liu@email.com",
        phone: null,
        source: "SOCIAL_MEDIA",
        status: "CONTACTED",
        priority: "MEDIUM",
        budget: 275000,
        score: 54,
        message: "Saw Instagram post, interested in Old Portsmouth area",
        createdAt: "2026-01-24T16:45:00Z",
        assignedAgent: null,
        property: null,
        notes: [],
      },
      {
        id: "5",
        name: "Tom & Amy Richards",
        email: "richards.family@email.com",
        phone: "07700 900321",
        source: "REFERRAL",
        status: "OFFER_MADE",
        priority: "URGENT",
        budget: 695000,
        score: 95,
        message: "Referred by previous client, looking at Craneswater properties",
        createdAt: "2026-01-23T09:30:00Z",
        assignedAgent: { id: "1", name: "Sarah Mitchell" },
        property: { id: "2", title: "Seafront Penthouse, Clarence Parade", slug: "seafront-penthouse-clarence-parade" },
        notes: [
          { id: "n2", content: "Offer submitted at £680,000, awaiting vendor response", authorName: "Sarah Mitchell", createdAt: "2026-01-26T17:00:00Z" },
          { id: "n3", content: "Second viewing completed, very keen", authorName: "Sarah Mitchell", createdAt: "2026-01-25T11:30:00Z" },
        ],
      },
    ],
  };
}

export default async function LeadsPage() {
  const { summary, leads } = await getLeads();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-navy-900">
            Lead Management
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Track and manage your sales pipeline
          </p>
        </div>
        <button className="rounded-lg bg-navy-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-navy-800">
          + Add Lead
        </button>
      </div>

      <LeadStats summary={summary} />
      <LeadFilters />
      <LeadTable leads={leads} />
    </div>
  );
}
