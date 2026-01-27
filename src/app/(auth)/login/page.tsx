"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // In production: Supabase auth
    // const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);
  }

  return (
    <div className="flex min-h-screen">
      {/* Left - Brand Panel */}
      <div className="hidden flex-1 items-center justify-center bg-navy-950 lg:flex">
        <div className="max-w-md px-8 text-center">
          <h1 className="font-serif text-4xl font-bold text-white">Fox & Sons</h1>
          <p className="mt-1 text-sm uppercase tracking-[0.3em] text-gold-400">
            Southsea
          </p>
          <p className="mt-6 text-slate-400">
            Premium estate agency management portal. Access your dashboard,
            leads, and AI-powered tools.
          </p>
        </div>
      </div>

      {/* Right - Login Form */}
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="w-full max-w-sm">
          <div className="mb-8 lg:hidden">
            <h1 className="font-serif text-2xl font-bold text-navy-900">Fox & Sons</h1>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-600">
              Southsea
            </p>
          </div>

          <h2 className="text-xl font-semibold text-navy-900">Sign in</h2>
          <p className="mt-1 text-sm text-slate-500">
            Access the admin dashboard
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="agent@foxandsons.co.uk"
                required
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-navy-300 focus:ring-2 focus:ring-navy-100"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-navy-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800 disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-500">
            <Link
              href="/"
              className="font-medium text-navy-700 hover:text-navy-900"
            >
              Back to website
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
