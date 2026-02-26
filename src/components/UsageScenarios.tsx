import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const UsageScenarios = () => (
  <section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Scenariusze użytkowania</h2>
        <p className="text-muted-foreground">Sprawdź, co zasili każda stacja w praktyce</p>
      </motion.div>

      <div className="max-w-2xl mx-auto overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-muted-foreground">Zastosowanie</th>
              <th className="text-center py-3 px-4 text-primary font-bold">ORLLO</th>
              <th className="text-center py-3 px-4 text-muted-foreground">EcoFlow</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-medium text-foreground">Kocioł CO</td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-medium text-foreground">Lodówka</td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-medium text-foreground">Laptop</td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-medium text-foreground">Dom — blackout</td>
              <td className="py-3 px-4 text-center"><span className="text-primary font-bold">pełny</span></td>
              <td className="py-3 px-4 text-center"><span className="text-accent">ograniczony</span></td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-medium text-foreground">Camping / outdoor</td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-medium text-foreground">Router Wi-Fi + monitoring</td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-medium text-foreground">Telewizor</td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
            </tr>
            <tr className="border-b border-border/50">
              <td className="py-3 px-4 font-medium text-foreground">Maszyna CPAP</td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
              <td className="py-3 px-4 text-center"><Check className="w-5 h-5 text-primary mx-auto" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default UsageScenarios;
