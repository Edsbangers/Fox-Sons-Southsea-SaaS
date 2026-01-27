// Privacy-focused analytics tracking via Umami
// Wraps Umami's client API for type-safe event tracking

type EventName =
  | "property_view"
  | "property_search"
  | "lead_form_submit"
  | "viewing_request"
  | "valuation_request"
  | "ai_scout_activate"
  | "phone_click"
  | "email_click"
  | "social_share";

type EventData = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: EventData) => void;
    };
  }
}

export function trackEvent(name: EventName, data?: EventData) {
  if (typeof window !== "undefined" && window.umami) {
    window.umami.track(name, data);
  }
}

export function trackPropertyView(propertySlug: string, propertyType: string) {
  trackEvent("property_view", {
    slug: propertySlug,
    type: propertyType,
  });
}

export function trackSearch(query: string, resultCount: number) {
  trackEvent("property_search", {
    query,
    results: resultCount,
  });
}

export function trackLeadSubmission(source: string, score: number) {
  trackEvent("lead_form_submit", {
    source,
    score,
  });
}
