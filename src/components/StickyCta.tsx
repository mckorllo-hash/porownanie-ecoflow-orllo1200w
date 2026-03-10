const ORLLO_LINK = "https://orllo.pl/energy/przenosna-stacja-zasilania-zasilanie-awaryjne-magazyn-energii.html?autoadd=true";

const StickyCta = () =>
<div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3">
    <a
    href={ORLLO_LINK}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => (window as any).gtag?.("event", "add_to_cart", { event_category: "ecommerce", event_label: "Kup teraz — ORLLO (Sticky)", value: 2699.0 })}
    className="flex items-center justify-center w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:brightness-110 transition-all">
    
      🟢 Kup teraz - ORLLO   
    </a>
  </div>;


export default StickyCta;