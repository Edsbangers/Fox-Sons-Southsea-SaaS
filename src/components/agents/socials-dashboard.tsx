"use client";

import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Heart,
  Share2,
  MessageCircle,
  Eye,
  Clock,
  CheckCircle2,
  FileEdit,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

type SocialPost = {
  id: string;
  platform: "INSTAGRAM" | "FACEBOOK" | "TWITTER" | "LINKEDIN";
  content: string;
  imageUrl?: string;
  hashtags: string[];
  status: string;
  scheduledAt: string | null;
  engagement: { likes: number; shares: number; comments: number; reach: number } | null;
};

type SocialsDashboardProps = {
  stats: {
    postsThisWeek: number;
    totalReach: number;
    engagement: number;
    leadsFromSocial: number;
  };
  posts: SocialPost[];
};

const platformConfig = {
  INSTAGRAM: { icon: Instagram, color: "text-pink-600", bg: "bg-pink-50" },
  FACEBOOK: { icon: Facebook, color: "text-blue-600", bg: "bg-blue-50" },
  TWITTER: { icon: Twitter, color: "text-sky-500", bg: "bg-sky-50" },
  LINKEDIN: { icon: Linkedin, color: "text-blue-700", bg: "bg-blue-50" },
};

const statusConfig: Record<string, { label: string; style: string; icon: typeof Clock }> = {
  DRAFT: { label: "Draft", style: "bg-slate-50 text-slate-600 border-slate-200", icon: FileEdit },
  SCHEDULED: { label: "Scheduled", style: "bg-amber-50 text-amber-700 border-amber-200", icon: Clock },
  PUBLISHED: { label: "Published", style: "bg-green-50 text-green-700 border-green-200", icon: CheckCircle2 },
};

export function SocialsDashboard({ stats, posts }: SocialsDashboardProps) {
  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-4">
        {[
          { label: "Posts This Week", value: stats.postsThisWeek.toString(), icon: FileEdit, color: "text-blue-600", bg: "bg-blue-50" },
          { label: "Total Reach", value: `${(stats.totalReach / 1000).toFixed(1)}k`, icon: Eye, color: "text-purple-600", bg: "bg-purple-50" },
          { label: "Engagement Rate", value: `${stats.engagement}%`, icon: TrendingUp, color: "text-green-600", bg: "bg-green-50" },
          { label: "Leads from Social", value: stats.leadsFromSocial.toString(), icon: Users, color: "text-amber-600", bg: "bg-amber-50" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
          >
            <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${stat.bg}`}>
              <stat.icon className={`h-5 w-5 ${stat.color}`} />
            </div>
            <div>
              <p className="text-lg font-bold text-navy-900">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => {
          const platform = platformConfig[post.platform];
          const status = statusConfig[post.status] || statusConfig.DRAFT;
          const PlatformIcon = platform.icon;
          const StatusIcon = status.icon;

          return (
            <div
              key={post.id}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Post Header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-full ${platform.bg}`}>
                    <PlatformIcon className={`h-4 w-4 ${platform.color}`} />
                  </div>
                  <span className="text-sm font-medium text-slate-700">
                    {post.platform.charAt(0) + post.platform.slice(1).toLowerCase()}
                  </span>
                </div>
                <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${status.style}`}>
                  <StatusIcon className="h-3 w-3" />
                  {status.label}
                </span>
              </div>

              {/* Image Preview */}
              <div className="aspect-video bg-gradient-to-br from-navy-800 to-navy-950 flex items-center justify-center">
                <PlatformIcon className="h-12 w-12 text-white/10" />
              </div>

              {/* Content */}
              <div className="p-4">
                <p className="text-sm text-slate-700 line-clamp-3 leading-relaxed">
                  {post.content}
                </p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {post.hashtags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-blue-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {post.hashtags.length > 4 && (
                    <span className="text-xs text-slate-400">
                      +{post.hashtags.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Engagement / Schedule */}
              <div className="border-t border-slate-100 px-4 py-3">
                {post.engagement ? (
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Heart className="h-3.5 w-3.5 text-red-400" />
                      {post.engagement.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <Share2 className="h-3.5 w-3.5" />
                      {post.engagement.shares}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="h-3.5 w-3.5" />
                      {post.engagement.comments}
                    </span>
                    <span className="ml-auto flex items-center gap-1 font-medium text-navy-700">
                      <Eye className="h-3.5 w-3.5" />
                      {post.engagement.reach.toLocaleString()} reach
                    </span>
                  </div>
                ) : post.scheduledAt ? (
                  <div className="flex items-center gap-2 text-xs text-amber-600">
                    <Clock className="h-3.5 w-3.5" />
                    Scheduled for{" "}
                    {new Date(post.scheduledAt).toLocaleString("en-GB", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button className="flex-1 rounded-lg border border-slate-200 py-1.5 text-xs font-medium text-slate-600 hover:bg-slate-50">
                      Edit
                    </button>
                    <button className="flex-1 rounded-lg bg-navy-900 py-1.5 text-xs font-medium text-white hover:bg-navy-800">
                      Schedule
                    </button>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
