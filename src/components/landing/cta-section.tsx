import { ArrowRight, Phone, Calculator } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2">
          {/* Valuation CTA */}
          <div className="rounded-2xl bg-navy-900 p-8 text-white sm:p-10">
            <Calculator className="mb-4 h-8 w-8 text-gold-400" />
            <h3 className="mb-2 font-serif text-2xl font-bold">
              What&apos;s your property worth?
            </h3>
            <p className="mb-6 text-slate-300">
              Get a free, no-obligation market appraisal from our local Southsea
              experts. AI-enhanced accuracy meets decades of local insight.
            </p>
            <Link
              href="/valuations"
              className="inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 font-medium text-navy-950 transition-colors hover:bg-gold-400"
            >
              Book free valuation
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Contact CTA */}
          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
            <Phone className="mb-4 h-8 w-8 text-navy-700" />
            <h3 className="mb-2 font-serif text-2xl font-bold text-navy-900">
              Speak to a local expert
            </h3>
            <p className="mb-6 text-slate-600">
              Our Southsea team knows every street, every school, every hidden gem.
              Call us or visit our Palmerston Road office.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+442392821234"
                className="flex items-center gap-2 text-lg font-bold text-navy-900"
              >
                <Phone className="h-5 w-5" />
                023 9282 1234
              </a>
              <p className="text-sm text-slate-500">
                45 Palmerston Road, Southsea, PO5 3QE
              </p>
              <p className="text-sm text-slate-500">
                Mon–Fri 9am–5:30pm | Sat 9am–4pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
