import { motion } from "framer-motion";
import orlloImg from "@/assets/orllo-station.jpg";
import ecoflowImg from "@/assets/ecoflow-station.jpg";

const ORLLO_LINK = "https://orllo.pl/energy/przenosna-stacja-zasilania-zasilanie-awaryjne-magazyn-energii.html?autoadd=true";

const HeroSection = () =>
<section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
    <div className="absolute inset-0 opacity-20" style={{
    backgroundImage: "radial-gradient(circle at 30% 50%, hsl(145 63% 42% / 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 50%, hsl(220 10% 40% / 0.1) 0%, transparent 50%)"
  }} />

    <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
      <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12">

        <span className="inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20 mb-6">
          Porównanie 2026
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
          <span className="text-primary">Stacja Zasilania ORLLO</span> vs EcoFlow
          <br />
          <span className="text-foreground/80 text-2xl sm:text-3xl md:text-4xl">Porównanie stacji zasilania</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
          Która stacja zasilania lepiej sprawdzi się w domu podczas braku prądu?
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* ORLLO */}
        <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="rounded-2xl border-2 border-primary/30 surface-elevated p-6 text-center glow-primary relative">

          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
            Rekomendowany
          </span>
          <img alt="Przenośna stacja zasilania ORLLO 1200W 1024Wh LiFePO4" className="w-full max-w-[280px] mx-auto rounded-xl mb-4" src="/lovable-uploads/9b2e6838-0c84-49df-8e25-5311da70c3c1.jpg" />
          <h2 className="font-display text-xl font-bold text-foreground mb-1">Stacja Zasilania ORLLO 1200W     </h2>
          <p className="text-muted-foreground text-sm mb-4">1200W / 1024Wh / LiFePO4</p>
          <a
          href={ORLLO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => (window as any).gtag?.("event", "add_to_cart", { event_category: "ecommerce", event_label: "Kup teraz — ORLLO (Hero)", value: 2699.0 })}
          className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:brightness-110 transition-all animate-pulse-glow">🟢 Kup teraz - ORLLO

        </a>
        </motion.div>

        {/* EcoFlow */}
        <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="rounded-2xl border border-border surface-elevated p-6 text-center">

          <img alt="EcoFlow River 2 Pro stacja zasilania" className="w-full max-w-[280px] mx-auto rounded-xl mb-4 opacity-75" src="/lovable-uploads/0b28164b-d547-4f92-b7ee-9cf070423089.jpg" />
          <h2 className="font-display text-xl font-bold text-foreground mb-1">EcoFlow River 2 Pro</h2>
          <p className="text-muted-foreground text-sm mb-4">800W / 768Wh / LiFePO4</p>
          <button
          disabled
          className="inline-flex items-center justify-center w-full px-6 py-3.5 rounded-xl bg-muted text-muted-foreground font-bold text-base cursor-not-allowed opacity-70">

            ⚪ Kup teraz - EcoFlow
          </button>
          <p className="text-xs text-muted-foreground mt-2">Link wkrótce dostępny</p>
        </motion.div>
      </div>
    </div>
  </section>;


export default HeroSection;