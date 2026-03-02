import { motion } from "framer-motion";
import { DollarSign, Battery, Home, Flag, Wrench, Package } from "lucide-react";

const advantages = [
{ icon: DollarSign, title: "Lepszy stosunek ceny do mocy", desc: "Więcej watów i watogodzin za mniejszą cenę — realna oszczędność przy tej samej funkcjonalności." },
{ icon: Battery, title: "Większa pojemność w tej klasie", desc: "1024 Wh vs 768 Wh — więcej energii do zasilania domu podczas blackoutu." },
{ icon: Home, title: "Dłuższa praca urządzeń domowych", desc: "Zasilisz lodówkę, kocioł CO i oświetlenie przez dłuższy czas bez ładowania." },
{ icon: Flag, title: "Polska dystrybucja", desc: "Szybka dostawa, faktura VAT, pełne wsparcie w języku polskim." },
{ icon: Wrench, title: "Serwis gwarancyjny w UE", desc: "Brak problemów z reklamacjami — autoryzowany serwis na terenie Unii Europejskiej." },
{ icon: Package, title: "Dostępność od ręki", desc: "Produkt dostępny w magazynie — wysyłka w 24h bez czekania na dostawę z zagranicy." }];


const AdvantagesSection = () =>
<section className="py-16 md:py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12">

        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
          Dlaczego <span className="text-gradient-primary">Stacja Zasilania ORLLO</span>?
        </h2>
        <p className="text-muted-foreground">6 kluczowych przewag nad konkurencją</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {advantages.map((a, i) =>
      <motion.div
        key={a.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.08 }}
        className="surface-elevated rounded-2xl p-6 border border-border hover:border-primary/30 transition-colors">

            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <a.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">{a.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{a.desc}</p>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default AdvantagesSection;