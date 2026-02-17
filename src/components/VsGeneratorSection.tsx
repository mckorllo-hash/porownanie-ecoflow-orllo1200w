import { motion } from "framer-motion";
import { Volume2, Fuel, Home, Wind, Shield } from "lucide-react";

const comparisons = [
  { icon: Volume2, label: "Cisza pracy", station: "Bezgłośna praca", generator: "60-80 dB hałasu" },
  { icon: Fuel, label: "Paliwo", station: "Brak — ładowanie z sieci/solaru", generator: "Wymaga benzyny/gazu" },
  { icon: Home, label: "Użycie w mieszkaniu", station: "Bezpieczna w pomieszczeniu", generator: "Tylko na zewnątrz" },
  { icon: Wind, label: "Spaliny", station: "Zero emisji", generator: "Toksyczne spaliny" },
  { icon: Shield, label: "Bezpieczeństwo elektroniki", station: "Czysta sinusoida", generator: "Ryzyko uszkodzenia" },
];

const VsGeneratorSection = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Stacja zasilania vs generator spalinowy</h2>
        <p className="text-muted-foreground">Dlaczego przenośna stacja zasilania to lepszy wybór do domu</p>
      </motion.div>

      <div className="max-w-3xl mx-auto grid gap-4">
        {comparisons.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="grid grid-cols-[auto_1fr_1fr] gap-4 items-center surface-elevated rounded-xl p-4 border border-border"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <c.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Stacja zasilania</p>
              <p className="text-sm font-medium text-primary">{c.station}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-0.5">Generator</p>
              <p className="text-sm font-medium text-muted-foreground">{c.generator}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default VsGeneratorSection;
