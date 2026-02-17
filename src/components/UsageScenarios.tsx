import { motion } from "framer-motion";
import { X, CheckCheck } from "lucide-react";

const scenarios = [
{ name: "Kocioł CO", orllo: true, eco: true },
{ name: "Lodówka", orllo: true, eco: true },
{ name: "Laptop", orllo: true, eco: true },
{ name: "Dom — blackout", orllo: "pełny", eco: "ograniczony" },
{ name: "Camping / outdoor", orllo: true, eco: true },
{ name: "Router Wi-Fi + monitoring", orllo: true, eco: true },
{ name: "Telewizor", orllo: true, eco: true },
{ name: "Maszyna CPAP", orllo: true, eco: true }];


const renderVal = (v: boolean | string) => {
  if (v === true) return <CheckCheck className="w-5 h-5 text-primary mx-auto" />;
  if (v === false) return <X className="w-5 h-5 text-destructive mx-auto" />;
  return <span className={v === "pełny" ? "text-primary font-bold" : "text-accent"}>{v}</span>;
};

const UsageScenarios = () =>
<section className="py-16 md:py-24">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12">

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
            {scenarios.map((s) =>
          <tr key={s.name} className="border-b border-border/50">
                <td className="py-3 px-4 font-medium text-foreground">{s.name}</td>
                <td className="py-3 px-4 text-center">{renderVal(s.orllo)}</td>
                <td className="py-3 px-4 text-center">{renderVal(s.eco)}</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  </section>;


export default UsageScenarios;