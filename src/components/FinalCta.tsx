import { motion } from "framer-motion";

const ORLLO_LINK = "https://orllo.pl/energy/przenosna-stacja-zasilania-zasilanie-awaryjne-magazyn-energii.html";

const FinalCta = () =>
<section className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-2xl mx-auto">

        <h2 className="text-2xl md:text-4xl font-display font-bold mb-4">
          Wybierz stację zasilania dopasowaną do Twoich potrzeb
        </h2>
        <p className="text-muted-foreground mb-10">
          Porównaj parametry, przeczytaj opinie i podejmij świadomą decyzję.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
          href={ORLLO_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all animate-pulse-glow">

            🟢 Kup teraz — ORLLO
          </a>
          <button
          disabled
          className="px-8 py-4 rounded-xl bg-muted text-muted-foreground font-bold text-lg cursor-not-allowed opacity-70">

            ⚪ EcoFlow
          </button>
        </div>
      </motion.div>
    </div>
  </section>;


export default FinalCta;