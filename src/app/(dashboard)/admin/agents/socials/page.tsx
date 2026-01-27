import { Metadata } from "next";
import { SocialsDashboard } from "@/components/agents/socials-dashboard";

export const metadata: Metadata = {
  title: "Socials Agent",
};

async function getSocialsData() {
  return {
    stats: {
      postsThisWeek: 7,
      totalReach: 12400,
      engagement: 4.8,
      leadsFromSocial: 14,
    },
    posts: [
      {
        id: "1",
        platform: "INSTAGRAM" as const,
        content:
          "Golden hour over Southsea seafront. There's nothing quite like watching the sun dip behind the Isle of Wight from your own balcony. This stunning 3-bed penthouse on Clarence Parade makes that dream a reality.\n\nDM us for private viewing details.",
        imageUrl: "/images/southsea/seafront-sunset.jpg",
        hashtags: ["#Southsea", "#PortsmouthProperty", "#SeafrontLiving", "#FoxAndSons", "#EstateAgent", "#DreamHome", "#SouthseaLife", "#IoW"],
        status: "SCHEDULED",
        scheduledAt: "2026-01-27T14:00:00Z",
        engagement: null,
      },
      {
        id: "2",
        platform: "FACEBOOK" as const,
        content:
          "NEW LISTING: Beautifully restored Victorian terrace on Kent Road, Southsea. 4 bedrooms, period features throughout, south-facing garden.\n\nGuide price: £475,000\n\nThis one won't last — our AI Scout flagged it as a top match for 12 registered buyers. Book your viewing today.",
        imageUrl: "/images/properties/victorian-terrace.jpg",
        hashtags: ["#NewListing", "#Southsea", "#VictorianProperty", "#FoxAndSons"],
        status: "PUBLISHED",
        scheduledAt: null,
        engagement: { likes: 47, shares: 12, comments: 8, reach: 2340 },
      },
      {
        id: "3",
        platform: "INSTAGRAM" as const,
        content:
          "Albert Road — the beating heart of Southsea. From independent coffee shops to vintage boutiques, this is where community thrives.\n\nLooking to live in one of Portsmouth's most vibrant neighbourhoods? We have 14 properties available within walking distance.",
        imageUrl: "/images/southsea/albert-road.jpg",
        hashtags: ["#AlbertRoad", "#Southsea", "#PortsmouthLife", "#CommunityLiving", "#FoxAndSons"],
        status: "DRAFT",
        scheduledAt: null,
        engagement: null,
      },
      {
        id: "4",
        platform: "FACEBOOK" as const,
        content:
          "JUST SOLD: Congratulations to our clients on the exchange of this beautiful Edwardian home in Craneswater. From valuation to exchange in just 23 days.\n\nThinking of selling? Book your free valuation today and see what your home is worth.",
        imageUrl: "/images/properties/edwardian-detached.jpg",
        hashtags: ["#JustSold", "#Craneswater", "#Southsea", "#FoxAndSons", "#SoldByUs"],
        status: "PUBLISHED",
        scheduledAt: null,
        engagement: { likes: 83, shares: 5, comments: 21, reach: 4100 },
      },
    ],
  };
}

export default async function SocialsAgentPage() {
  const data = await getSocialsData();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-navy-900">
            Socials Agent
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            AI-generated social media content with Portsmouth imagery
          </p>
        </div>
        <button className="rounded-lg bg-navy-900 px-4 py-2 text-sm font-medium text-white hover:bg-navy-800">
          + Generate Post
        </button>
      </div>
      <SocialsDashboard stats={data.stats} posts={data.posts} />
    </div>
  );
}
