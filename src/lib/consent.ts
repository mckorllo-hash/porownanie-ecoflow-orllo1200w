export const CONSENT_KEY = "orllo_cookie_consent";

export type ConsentChoice = "accepted" | "rejected";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Regiony objęte obowiązkiem zgody (EEA + UK + CH). */
const REGULATED_REGIONS = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR",
  "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK",
  "SI", "ES", "SE", "IS", "LI", "NO", "GB", "CH",
]);

export function getSavedConsent(): ConsentChoice | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "rejected" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* ignore */
  }
  const granted = choice === "accepted" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    ad_storage: granted,
    ad_user_data: granted,
    ad_personalization: granted,
    analytics_storage: granted,
  });
}

/**
 * Sprawdza kraj odwiedzającego przez Cloudflare /cdn-cgi/trace.
 * Fail-open: przy błędzie, timeout lub nieznanym regionie zwraca true
 * (pokazujemy baner, żeby nie śledzić bez zgody).
 */
export async function requiresConsentBanner(): Promise<boolean> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2000);
    const res = await fetch("/cdn-cgi/trace", { signal: controller.signal });
    clearTimeout(timeout);
    if (!res.ok) return true;
    const text = await res.text();
    const loc = text
      .split("\n")
      .find((line) => line.startsWith("loc="))
      ?.split("=")[1]
      ?.trim()
      .toUpperCase();
    if (!loc || loc === "XX" || loc === "T1") return true;
    return REGULATED_REGIONS.has(loc);
  } catch {
    return true;
  }
}
