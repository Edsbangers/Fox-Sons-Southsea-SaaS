// Core application types for Fox & Sons Southsea SaaS

export type DashboardMetrics = {
  pageViews: { total: number; change: number; data: TimeSeriesPoint[] };
  activeLeads: { total: number; change: number };
  conversionRate: { rate: number; change: number };
  revenue: { total: number; change: number };
  avgDaysOnMarket: number;
  propertiesListed: number;
  viewingsThisWeek: number;
  topAgents: AgentPerformance[];
  leadsBySource: SourceBreakdown[];
  recentActivity: ActivityItem[];
};

export type TimeSeriesPoint = {
  date: string;
  value: number;
};

export type AgentPerformance = {
  id: string;
  name: string;
  avatarUrl?: string;
  leadsConverted: number;
  revenue: number;
  viewings: number;
  rating: number;
};

export type SourceBreakdown = {
  source: string;
  count: number;
  percentage: number;
  color: string;
};

export type ActivityItem = {
  id: string;
  type: string;
  description: string;
  timestamp: string;
  user?: { name: string; avatarUrl?: string };
};

export type LeadWithRelations = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  source: string;
  status: string;
  priority: string;
  budget?: number;
  message?: string;
  score: number;
  createdAt: string;
  assignedAgent?: { id: string; name: string; avatarUrl?: string };
  property?: { id: string; title: string; slug: string };
  notes: { id: string; content: string; authorName: string; createdAt: string }[];
};

export type PropertyListing = {
  id: string;
  slug: string;
  title: string;
  price: number;
  priceQualifier: string;
  propertyType: string;
  listingType: string;
  status: string;
  bedrooms: number;
  bathrooms: number;
  receptions: number;
  address: string;
  postcode: string;
  area: string;
  featuredImage?: string;
  isFeatured: boolean;
  keyFeatures: string[];
  agent: { name: string; avatarUrl?: string };
};

export type SocialPostPreview = {
  id: string;
  platform: "INSTAGRAM" | "FACEBOOK" | "TWITTER" | "LINKEDIN";
  content: string;
  imageUrl?: string;
  hashtags: string[];
  status: string;
  scheduledAt?: string;
  engagement?: {
    likes: number;
    shares: number;
    comments: number;
    reach: number;
  };
};
