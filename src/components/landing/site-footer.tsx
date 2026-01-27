import Link from "next/link";

const footerLinks = {
  "Property Search": [
    { name: "Buy in Southsea", href: "/properties?type=sale&area=southsea" },
    { name: "Rent in Portsmouth", href: "/properties?type=rent" },
    { name: "New Developments", href: "/properties?tag=new-development" },
    { name: "AI Scout", href: "/ai-scout" },
  ],
  Services: [
    { name: "Free Valuations", href: "/valuations" },
    { name: "Sales", href: "/services/sales" },
    { name: "Lettings", href: "/services/lettings" },
    { name: "Property Management", href: "/services/management" },
  ],
  "Local Areas": [
    { name: "Southsea", href: "/areas/southsea" },
    { name: "Old Portsmouth", href: "/areas/old-portsmouth" },
    { name: "Eastney", href: "/areas/eastney" },
    { name: "Craneswater", href: "/areas/craneswater" },
  ],
  Company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Links Grid */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <span className="font-serif text-lg font-bold text-navy-900">
                Fox & Sons
              </span>
              <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-600">
                Southsea
              </div>
            </div>
            <p className="text-sm text-slate-500">
              Premium estate agency serving Portsmouth, Southsea, and the Hampshire
              coast since 1885.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-3 text-sm font-semibold text-navy-900">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-navy-700"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} Fox & Sons Southsea. All rights reserved.
            Registered in England & Wales.
          </p>
          <div className="flex gap-4 text-xs text-slate-400">
            <Link href="/privacy" className="hover:text-slate-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-600">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-slate-600">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
