import { motion } from "framer-motion";
import orloSolar from "@/assets/orllo-solar.png";
import orloPortsLed from "@/assets/orllo-ports-led.png";

const showcaseItems = [
  {
    image: orloSolar,
    title: "Przenośna Stacja Zasilania z Możliwością Ładowania Panelem Słonecznym",
    desc: "Ładowanie panelem fotowoltaicznym do 600W — idealne rozwiązanie off-grid na działkę, kemping czy awaryjne zasilanie domu.",
    alt: "ORLLO Power Station z panelem słonecznym — ładowanie solarne do 600W",
    reverse: false,
  },
  {
    image: orloPortsLed,
    title: "Mobilny Magazyn Energii OFF GRID — 13 Portów Wyjściowych",
    desc: "13 portów wyjściowych i wbudowane oświetlenie LED. Naładuj jednocześnie laptopa, telefon, głośnik i wiele więcej.",
    alt: "ORLLO Power Station — 13 portów wyjściowych i wbudowane oświetlenie LED",
    reverse: true,
  },
];

const ProductShowcase = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
          <span className="text-gradient-primary">ORLLO</span> w akcji
        </h2>
        <p className="text-muted-foreground">Zobacz możliwości stacji zasilania</p>
      </motion.div>

      <div className="flex flex-col gap-10">
        {showcaseItems.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`flex flex-col ${item.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-6 md:gap-10 surface-elevated rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-colors`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-full md:w-1/2 aspect-square object-contain bg-muted/30"
              loading="lazy"
            />
            <div className="p-6 md:p-10 flex-1">
              <h3 className="font-display font-bold text-foreground text-lg md:text-xl mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductShowcase;
