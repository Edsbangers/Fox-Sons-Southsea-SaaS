"use client";

import { Instagram, Heart, MessageCircle, Bookmark, MoreHorizontal, Camera, Sparkles } from "lucide-react";

type PhotoPreview = {
  id: string;
  imageDescription: string;
  location: string;
  caption: string;
  aiGenerated: boolean;
  suggestedTime: string;
  estimatedEngagement: {
    likes: string;
    comments: string;
  };
};

const southseaPhotoPreviews: PhotoPreview[] = [
  {
    id: "1",
    imageDescription: "Golden hour sunset over Southsea seafront with silhouetted Victorian pier",
    location: "South Parade Pier, Southsea",
    caption: "Golden hour magic at South Parade Pier. There's a reason Southsea is Portsmouth's most sought-after address. This view could be yours every evening.",
    aiGenerated: true,
    suggestedTime: "Today, 4:30 PM",
    estimatedEngagement: { likes: "180-240", comments: "12-18" },
  },
  {
    id: "2",
    imageDescription: "Aerial view of Southsea Common with seafront properties and Isle of Wight",
    location: "Clarence Parade, Southsea",
    caption: "Wake up to this. Our Clarence Parade penthouse offers uninterrupted views across to the Isle of Wight. 3 beds, wrap-around balcony, concierge service.",
    aiGenerated: true,
    suggestedTime: "Tomorrow, 8:00 AM",
    estimatedEngagement: { likes: "220-280", comments: "15-22" },
  },
  {
    id: "3",
    imageDescription: "Charming Victorian terrace houses with colorful doors on a tree-lined street",
    location: "Kent Road, Southsea PO5",
    caption: "Victorian charm meets modern living. This beautifully restored 4-bed on Kent Road is why Southsea is trending with young professionals and families alike.",
    aiGenerated: true,
    suggestedTime: "Tomorrow, 12:30 PM",
    estimatedEngagement: { likes: "150-200", comments: "8-14" },
  },
  {
    id: "4",
    imageDescription: "Beach huts and pebble beach with blue sky and calm sea",
    location: "Eastney Esplanade, Southsea",
    caption: "Beach life, city convenience. The iconic Southsea beach huts aren't just for summer — they're a lifestyle. Properties near Eastney selling within 14 days.",
    aiGenerated: true,
    suggestedTime: "Thursday, 2:00 PM",
    estimatedEngagement: { likes: "200-260", comments: "10-16" },
  },
  {
    id: "5",
    imageDescription: "Canoe Lake at dusk with swans and reflections of surrounding trees",
    location: "Canoe Lake, Southsea",
    caption: "Canoe Lake — Southsea's hidden gem. Morning jogs, weekend picnics, feeding the swans. This is what living in PO4 looks like.",
    aiGenerated: true,
    suggestedTime: "Friday, 9:00 AM",
    estimatedEngagement: { likes: "170-220", comments: "12-18" },
  },
  {
    id: "6",
    imageDescription: "Independent coffee shops and vintage stores on Albert Road",
    location: "Albert Road, Southsea",
    caption: "Albert Road — where independent spirit thrives. Coffee, culture, community. 8 properties available within 5 minutes walk. Link in bio.",
    aiGenerated: true,
    suggestedTime: "Saturday, 11:00 AM",
    estimatedEngagement: { likes: "190-250", comments: "14-20" },
  },
];

// Gradient backgrounds to simulate property images
const gradients = [
  "from-orange-400 via-pink-500 to-purple-600",
  "from-blue-400 via-cyan-500 to-teal-500",
  "from-amber-400 via-orange-500 to-red-500",
  "from-sky-400 via-blue-500 to-indigo-600",
  "from-emerald-400 via-teal-500 to-cyan-600",
  "from-rose-400 via-pink-500 to-fuchsia-500",
];

export function PhotoPreviewGrid() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-orange-400">
            <Instagram className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-navy-900">AI Photo Queue</h3>
            <p className="text-xs text-slate-500">Southsea seafront content ready to post</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-purple-50 px-3 py-1 text-xs font-medium text-purple-700">
          <Sparkles className="h-3.5 w-3.5" />
          AI Generated
        </span>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {southseaPhotoPreviews.map((photo, index) => (
          <div
            key={photo.id}
            className="group overflow-hidden rounded-lg border border-slate-200 bg-white transition-all hover:shadow-md"
          >
            {/* Instagram-style image placeholder */}
            <div className={`relative aspect-square bg-gradient-to-br ${gradients[index % gradients.length]}`}>
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <Camera className="h-8 w-8 text-white/60" />
              </div>
              {/* Image description overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-xs text-white/90 line-clamp-2">{photo.imageDescription}</p>
              </div>
              {/* AI badge */}
              {photo.aiGenerated && (
                <div className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/50 px-2 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                  <Sparkles className="h-2.5 w-2.5" />
                  AI
                </div>
              )}
            </div>

            {/* Instagram-style action bar */}
            <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2">
              <div className="flex items-center gap-3">
                <Heart className="h-5 w-5 text-slate-600 hover:text-red-500 cursor-pointer" />
                <MessageCircle className="h-5 w-5 text-slate-600 hover:text-slate-900 cursor-pointer" />
              </div>
              <Bookmark className="h-5 w-5 text-slate-600 hover:text-slate-900 cursor-pointer" />
            </div>

            {/* Caption preview */}
            <div className="p-3">
              <p className="text-xs text-slate-700 line-clamp-2 leading-relaxed">
                {photo.caption}
              </p>
              <div className="mt-2 flex items-center gap-2 text-[10px] text-slate-400">
                <span>{photo.location}</span>
              </div>
            </div>

            {/* Schedule info */}
            <div className="border-t border-slate-100 bg-slate-50 px-3 py-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-medium text-slate-600">
                  {photo.suggestedTime}
                </span>
                <span className="text-[10px] text-slate-400">
                  Est. {photo.estimatedEngagement.likes} likes
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Generate more CTA */}
      <div className="mt-4 flex items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-200 bg-slate-50/50 p-4 transition-colors hover:border-navy-300 hover:bg-navy-50/50 cursor-pointer">
        <Sparkles className="h-4 w-4 text-navy-600" />
        <span className="text-sm font-medium text-navy-600">Generate More Southsea Content</span>
      </div>
    </div>
  );
}
