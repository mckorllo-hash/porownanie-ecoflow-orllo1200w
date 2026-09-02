import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Wróć do strony głównej
        </Link>

        <h1 className="mb-8 text-3xl font-bold sm:text-4xl">Polityka prywatności i cookies</h1>

        <div className="space-y-8 text-sm leading-relaxed text-muted-foreground sm:text-base">
          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">1. Administrator danych</h2>
            <p>
              Administratorem danych osobowych zbieranych za pośrednictwem tej strony jest ORLLO
              (orllo.pl). W sprawach dotyczących przetwarzania danych osobowych można kontaktować
              się poprzez formularz kontaktowy na stronie orllo.pl.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">2. Jakie dane zbieramy</h2>
            <p className="mb-2">
              Strona korzysta z narzędzi analitycznych i marketingowych firmy Google:
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>
                <strong className="text-foreground">Google Analytics (GA4)</strong> — anonimowe
                statystyki odwiedzin: liczba użytkowników, źródła ruchu, czas na stronie, kliknięcia
                w przyciski (np. zdarzenia „add_to_cart").
              </li>
              <li>
                <strong className="text-foreground">Google Tag Manager (GTM-K4ZXZRG)</strong> —
                narzędzie do zarządzania tagami marketingowymi i analitycznymi.
              </li>
            </ul>
            <p className="mt-2">
              Narzędzia te mogą zapisywać na Twoim urządzeniu pliki cookies (m.in. _ga, _ga_*) oraz
              przetwarzać adres IP, typ przeglądarki, system operacyjny i przybliżoną lokalizację.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">3. Podstawa prawna i zgoda</h2>
            <p>
              Cookies analityczne i reklamowe są zapisywane wyłącznie po wyrażeniu przez Ciebie
              zgody (art. 6 ust. 1 lit. a RODO) za pośrednictwem banera wyświetlanego przy pierwszej
              wizycie. Strona korzysta z Google Consent Mode v2 — przed udzieleniem zgody tagi
              Google działają w trybie ograniczonym i nie zapisują cookies analitycznych ani
              reklamowych. Baner zgody wyświetla się tylko odwiedzającym z regionów, w których zgoda
              jest wymagana prawnie (m.in. Unia Europejska, Wielka Brytania, Szwajcaria).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">4. Jak wycofać zgodę</h2>
            <p>
              Zgodę możesz zmienić lub wycofać w dowolnym momencie, klikając przycisk{" "}
              <button
                onClick={() => window.dispatchEvent(new Event("open-cookie-settings"))}
                className="font-semibold text-primary underline underline-offset-2"
              >
                „Cookies"
              </button>{" "}
              w lewym dolnym rogu strony. Wycofanie zgody nie wpływa na zgodność z prawem
              przetwarzania dokonanego przed jej wycofaniem. Możesz także usunąć cookies w
              ustawieniach swojej przeglądarki.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">5. Odbiorcy danych</h2>
            <p>
              Dane analityczne są przetwarzane przez Google Ireland Limited oraz Google LLC (USA) na
              podstawie standardowych klauzul umownych. Dane nie są sprzedawane ani udostępniane
              innym podmiotom w celach marketingowych.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">6. Okres przechowywania</h2>
            <p>
              Dane w Google Analytics przechowywane są przez okres do 14 miesięcy. Twoja decyzja
              dotycząca zgody zapisywana jest lokalnie w przeglądarce (localStorage) do momentu jej
              zmiany lub wyczyszczenia danych przeglądarki.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">7. Twoje prawa</h2>
            <p>
              Masz prawo dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia
              przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu. Masz również prawo
              wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-xl font-semibold text-foreground">8. Linki zewnętrzne</h2>
            <p>
              Strona zawiera linki do sklepu orllo.pl. Po przejściu na stronę zewnętrzną obowiązuje
              polityka prywatności tego serwisu.
            </p>
          </section>

          <p className="border-t border-border pt-6 text-xs">
            Ostatnia aktualizacja: wrzesień 2026 r.
          </p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
