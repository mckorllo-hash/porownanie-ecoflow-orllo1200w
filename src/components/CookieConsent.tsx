import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie } from "lucide-react";
import { getSavedConsent, saveConsent, requiresConsentBanner } from "@/lib/consent";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);
  const [decided, setDecided] = useState(false);

  useEffect(() => {
    const saved = getSavedConsent();
    if (saved) {
      setDecided(true);
      return;
    }
    let cancelled = false;
    requiresConsentBanner().then((required) => {
      if (!cancelled && required) setVisible(true);
      if (!cancelled && !required) setDecided(true); // poza regionami objętymi zgodą — bez banera
    });
    return () => {
      cancelled = true;
    };
  }, []);

  // Pozwól otworzyć baner ponownie (np. z linku "Ustawienia cookies")
  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  }, []);

  const choose = (choice: "accepted" | "rejected") => {
    saveConsent(choice);
    setVisible(false);
    setDecided(true);
  };

  return (
    <>
      {visible && (
        <div
          role="dialog"
          aria-label="Zgoda na pliki cookies"
          className="fixed inset-x-0 bottom-0 z-[100] border-t border-border bg-card/95 backdrop-blur-md shadow-2xl"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:gap-6">
            <div className="flex items-start gap-3 md:flex-1">
              <Cookie className="mt-0.5 h-6 w-6 shrink-0 text-primary" aria-hidden="true" />
              <div className="text-sm leading-relaxed text-muted-foreground">
                <p className="font-semibold text-foreground">Używamy plików cookies</p>
                <p>
                  Ta strona korzysta z Google Analytics i Google Tag Manager, aby analizować ruch i
                  mierzyć skuteczność reklam. Możesz zaakceptować lub odrzucić cookies
                  analityczne i reklamowe. Szczegóły znajdziesz w{" "}
                  <Link to="/polityka-prywatnosci" className="text-primary underline underline-offset-2">
                    polityce prywatności
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <button
                onClick={() => choose("rejected")}
                className="rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Odrzucam
              </button>
              <button
                onClick={() => choose("accepted")}
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
              >
                Akceptuję
              </button>
            </div>
          </div>
        </div>
      )}

      {decided && !visible && (
        <button
          onClick={() => setVisible(true)}
          aria-label="Ustawienia cookies"
          className="fixed bottom-3 left-3 z-[90] flex items-center gap-1.5 rounded-full border border-border bg-card/90 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur-sm transition-colors hover:text-foreground"
        >
          <Cookie className="h-3.5 w-3.5" aria-hidden="true" />
          Cookies
        </button>
      )}
    </>
  );
};

export default CookieConsent;
