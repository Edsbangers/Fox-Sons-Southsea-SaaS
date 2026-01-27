import { Shield, Award, Clock, Users } from "lucide-react";

const signals = [
  {
    icon: Shield,
    title: "NAEA Propertymark",
    description: "Fully qualified and regulated agents",
  },
  {
    icon: Award,
    title: "Est. 1885",
    description: "Over 130 years of trusted service",
  },
  {
    icon: Clock,
    title: "28 Day Average",
    description: "From listing to sale agreed",
  },
  {
    icon: Users,
    title: "4.8★ Rating",
    description: "From 347 verified client reviews",
  },
];

export function TrustSignals() {
  return (
    <section className="border-b border-slate-100 bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {signals.map((signal) => (
            <div key={signal.title} className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-50">
                <signal.icon className="h-5 w-5 text-navy-700" />
              </div>
              <div>
                <div className="text-sm font-semibold text-navy-900">{signal.title}</div>
                <div className="text-xs text-slate-500">{signal.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
