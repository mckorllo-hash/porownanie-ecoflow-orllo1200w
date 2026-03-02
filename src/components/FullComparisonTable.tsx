import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

type CellValue = string | boolean | "partial";

interface Row {
  label: string;
  orllo: CellValue;
  eco: CellValue;
  orlloWin?: boolean;
}

const rows: Row[] = [
{ label: "Pojemność baterii", orllo: "1024 Wh", eco: "768 Wh", orlloWin: true },
{ label: "Moc ciągła (W)", orllo: "1200W", eco: "800W", orlloWin: true },
{ label: "Moc maksymalna (W)", orllo: "1500W", eco: "1600W" },
{ label: "Typ ogniw", orllo: "LiFePO4 EVE", eco: "LiFePO4", orlloWin: true },
{ label: "Żywotność cykli", orllo: "3000+", eco: "3000+" },
{ label: "Ładowanie 0–100%", orllo: "~60 min", eco: "~70 min", orlloWin: true },
{ label: "Ładowanie solarne", orllo: true, eco: true },
{ label: "UPS / EPS", orllo: true, eco: true },
{ label: "Gniazda AC 230V", orllo: "2", eco: "2", orlloWin: true },
{ label: "USB-A", orllo: "4", eco: "3", orlloWin: true },
{ label: "USB-C", orllo: "2", eco: "1", orlloWin: true },

{ label: "Waga", orllo: "~12 kg", eco: "~7.8 kg" },
{ label: "Gwarancja", orllo: "24 mies.", eco: "24 mies." },
{ label: "Polska dystrybucja", orllo: true, eco: false, orlloWin: true },
{ label: "Serwis w UE", orllo: true, eco: "partial", orlloWin: true },
{ label: "Cena", orllo: "~2 699 zł", eco: "~3 499 zł", orlloWin: true }];


const renderCell = (value: CellValue, highlight?: boolean) => {
  if (value === true) return <Check className="w-5 h-5 text-primary mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-destructive mx-auto" />;
  if (value === "partial") return <Minus className="w-5 h-5 text-accent mx-auto" />;
  return <span className={highlight ? "text-primary font-bold" : ""}>{value}</span>;
};

const FullComparisonTable = () =>
<section className="py-16 md:py-24" id="porownanie">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12">

        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Pełna tabela porównawcza</h2>
        <p className="text-muted-foreground">Szczegółowe zestawienie parametrów Stacji Zasilania ORLLO vs EcoFlow River 2 Pro</p>
      </motion.div>

      <div className="max-w-3xl mx-auto overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left py-3 px-4 text-muted-foreground font-medium">Parametr</th>
              <th className="text-center py-3 px-4 text-primary font-bold">ORLLO</th>
              <th className="text-center py-3 px-4 text-muted-foreground font-medium">EcoFlow</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) =>
          <motion.tr
            key={row.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className={`border-b border-border/50 ${row.orlloWin ? "bg-orllo-highlight" : ""}`}>

                <td className="py-3 px-4 font-medium text-foreground">{row.label}</td>
                <td className="py-3 px-4 text-center">{renderCell(row.orllo, row.orlloWin)}</td>
                <td className="py-3 px-4 text-center text-muted-foreground">{renderCell(row.eco)}</td>
              </motion.tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  </section>;


export default FullComparisonTable;