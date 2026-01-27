import { Metadata } from "next";
import { LeadGenChat } from "@/components/agents/lead-gen-chat";

export const metadata: Metadata = {
  title: "Lead Gen Agent",
};

export default function LeadGenAgentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-serif text-2xl font-bold text-navy-900">
          Lead Gen Agent
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          AI-powered lead generation and qualification using Vercel AI SDK
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Agent Stats */}
        <div className="space-y-4">
          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold text-navy-900">
              Agent Performance
            </h3>
            <div className="space-y-3">
              {[
                { label: "Leads Generated Today", value: "8" },
                { label: "Qualification Score", value: "92%" },
                { label: "Response Time", value: "< 30s" },
                { label: "Conversion Assist", value: "34%" },
              ].map((stat) => (
                <div key={stat.label} className="flex justify-between">
                  <span className="text-sm text-slate-600">{stat.label}</span>
                  <span className="text-sm font-semibold text-navy-900">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
            <h3 className="mb-3 text-sm font-semibold text-navy-900">
              Agent Configuration
            </h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-500">Persona</label>
                <p className="text-sm text-slate-700">
                  Friendly Southsea property expert
                </p>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500">
                  Auto-qualify threshold
                </label>
                <p className="text-sm text-slate-700">Score &gt; 60</p>
              </div>
              <div>
                <label className="text-xs font-medium text-slate-500">
                  Escalation
                </label>
                <p className="text-sm text-slate-700">
                  Auto-assign to available agent when qualified
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-2">
          <LeadGenChat />
        </div>
      </div>
    </div>
  );
}
