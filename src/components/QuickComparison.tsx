import { motion } from "framer-motion";
import { Battery, Zap, Clock, Weight, Plug, BatteryCharging } from "lucide-react";

const features = [
  { icon: Battery, label: "Pojemność", orllo: "1024 Wh", eco: "768 Wh", orlloWin: true },
  { icon: Zap, label: "Moc ciągła", orllo: "1200W", eco: "800W", orlloWin: true },
  { icon: BatteryCharging, label: "Moc szczytowa", orllo: "1500W", eco: "1600W", orlloWin: false },
  { icon: Battery, label: "Typ baterii", orllo: "LiFePO4 EVE", eco: "LiFePO4", orlloWin: true },
  { icon: Clock, label: "Ładowanie 0-100%", orllo: "~60 min", eco: "~70 min", orlloWin: true },
  { icon: Plug, label: "Gniazda 230V", orllo: "4", eco: "2", orlloWin: true },
  { icon: Weight, label: "Waga", orllo: "~12 kg", eco: "~7.8 kg", orlloWin: false },
];

const QuickComparison = () => (
  <section className="py-16 md:py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Szybkie porównanie kluczowych parametrów</h2>
        <p className="text-muted-foreground">Najważniejsze cechy obu stacji zasilania w jednym miejscu</p>
      </motion.div>

      <div className="max-w-3xl mx-auto grid gap-3">
        {/* Header */}
        <div className="grid grid-cols-[1fr_1fr_1fr] gap-2 text-sm font-bold text-muted-foreground px-4">
          <span>Parametr</span>
          <span className="text-center text-primary">ORLLO</span>
          <span className="text-center">EcoFlow</span>
        </div>

        {features.map((f, i) => (
          <motion.div
            key={f.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`grid grid-cols-[1fr_1fr_1fr] gap-2 items-center rounded-xl px-4 py-3 ${f.orlloWin ? "bg-orllo-highlight border border-primary/20" : "surface-elevated"}`}
          >
            <div className="flex items-center gap-2 text-sm font-medium text-foreground">
              <f.icon className="w-4 h-4 text-muted-foreground shrink-0" />
              {f.label}
            </div>
            <span className={`text-center font-bold text-sm ${f.orlloWin ? "text-primary" : "text-foreground"}`}>
              {f.orllo}
            </span>
            <span className="text-center text-sm text-muted-foreground">{f.eco}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickComparison;
