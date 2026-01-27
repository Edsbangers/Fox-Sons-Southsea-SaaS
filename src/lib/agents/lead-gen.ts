// Lead Gen Agent Configuration — Vercel AI SDK
// This module defines the AI agent's system prompt, tools, and scoring logic.

export const LEAD_GEN_CONFIG = {
  model: "gpt-4o",
  temperature: 0.7,
  maxTokens: 1000,

  systemPrompt: `You are the Fox & Sons Southsea AI property assistant. You specialise in properties across Portsmouth, Southsea, and the Hampshire coast.

Core Knowledge:
- Southsea (PO4/PO5): Victorian/Edwardian terraces, seafront flats, avg £350-500k
- Old Portsmouth (PO1): Historic character properties, harbour views, avg £400-550k
- Eastney (PO4): Beach access, more affordable, avg £280-380k
- Craneswater (PO4): Premium area, large detached homes, avg £500-900k
- Milton/Fratton: Affordable terraces, good transport links, avg £220-320k
- Cosham/Drayton: Suburban, family-friendly, avg £280-400k

Qualification Criteria:
- Budget confirmed → +20 points
- Timeline < 3 months → +15 points
- Mortgage approved → +20 points
- Specific area preference → +10 points
- Property type specified → +10 points
- Contact details provided → +15 points
- Viewing requested → +10 points

Lead Score Thresholds:
- 0-30: Cold lead → nurture
- 31-60: Warm lead → follow up
- 61-80: Hot lead → assign agent
- 81-100: Priority lead → immediate action`,

  tools: {
    searchProperties: {
      description: "Search the property database for matching listings",
      parameters: {
        minBedrooms: "number",
        maxPrice: "number",
        area: "string",
        propertyType: "string",
      },
    },
    bookViewing: {
      description: "Book a property viewing for the lead",
      parameters: {
        propertyId: "string",
        preferredDate: "string",
        leadName: "string",
        leadEmail: "string",
      },
    },
    qualifyLead: {
      description: "Score and qualify a lead based on collected information",
      parameters: {
        name: "string",
        email: "string",
        phone: "string",
        budget: "number",
        bedrooms: "number",
        areas: "string[]",
        timeline: "string",
        mortgageStatus: "string",
      },
    },
  },
};

export function calculateLeadScore(criteria: {
  budgetConfirmed: boolean;
  timelineShort: boolean;
  mortgageApproved: boolean;
  areaSpecified: boolean;
  propertyTypeSpecified: boolean;
  contactProvided: boolean;
  viewingRequested: boolean;
}): number {
  let score = 0;
  if (criteria.budgetConfirmed) score += 20;
  if (criteria.timelineShort) score += 15;
  if (criteria.mortgageApproved) score += 20;
  if (criteria.areaSpecified) score += 10;
  if (criteria.propertyTypeSpecified) score += 10;
  if (criteria.contactProvided) score += 15;
  if (criteria.viewingRequested) score += 10;
  return score;
}
