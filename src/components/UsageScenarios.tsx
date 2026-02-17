import { motion } from "framer-motion";
import { Check } from "lucide-react";

const OrlloCheck1 = () => <Check className="w-5 h-5 text-primary mx-auto" />;
const EcoCheck1 = () => <Check className="w-5 h-5 text-primary mx-auto" />;

const OrlloCheck2 = () => <Check className="w-5 h-5 text-primary mx-auto" />;
const EcoCheck2 = () => <Check className="w-5 h-5 text-primary mx-auto" />;

const OrlloCheck3 = () => <Check className="w-5 h-5 text-primary mx-auto" />;
const EcoCheck3 = () => <Check className="w-5 h-5 text-primary mx-auto" />;

const OrlloCheck4 = () => <span className="text-primary font-bold">pełny</span>;
const EcoCheck4 = () => <span className="text-accent">ograniczony</span>;

const OrlloCheck5 = () => <Check className="w-5 h-5 text-primary mx-auto" />;
const EcoCheck5 = () => <Check className="w-5 h-5 text-primary mx-auto" />;

const OrlloCheck6 = () => <Check className="w-5 h-5 text-primary mx-auto" />;
const EcoCheck6 = () => <Check className="w-5 h-5 text-primary mx-auto" />;

const OrlloCheck7 = () => <Check className="w-5 h-5 text-primary mx-auto" />;
const EcoCheck7 = () => <Check className="w-5 h-5 text-primary mx-auto" />;

const OrlloCheck8 = () => <Check className="w-5 h-5 text-primary mx-auto" />;
const EcoCheck8 = () => <Check className="w-5 h-5 text-primary mx-auto" />;

const scenarios = [
  { name: "Kocioł CO", orllo: <OrlloCheck1 />, eco: <EcoCheck1 /> },
  { name: "Lodówka", orllo: <OrlloCheck2 />, eco: <EcoCheck2 /> },
  { name: "Laptop", orllo: <OrlloCheck3 />, eco: <EcoCheck3 /> },
  { name: "Dom — blackout", orllo: <OrlloCheck4 />, eco: <EcoCheck4 /> },
  { name: "Camping / outdoor", orllo: <OrlloCheck5 />, eco: <EcoCheck5 /> },
  { name: "Router Wi-Fi + monitoring", orllo: <OrlloCheck6 />, eco: <EcoCheck6 /> },
  { name: "Telewizor", orllo: <OrlloCheck7 />, eco: <EcoCheck7 /> },
  { name: "Maszyna CPAP", orllo: <OrlloCheck8 />, eco: <EcoCheck8 /> },
];

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
                <td className="py-3 px-4 text-center">{s.orllo}</td>
                <td className="py-3 px-4 text-center">{s.eco}</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  </section>;


export default UsageScenarios;