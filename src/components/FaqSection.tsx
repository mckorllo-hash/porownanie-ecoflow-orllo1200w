import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Czy EcoFlow River 2 Pro jest wart swojej ceny?",
    a: "EcoFlow River 2 Pro to solidna stacja, ale przy porównywalnych parametrach ORLLO oferuje większą pojemność (1024 Wh vs 768 Wh) i wyższą moc ciągłą (1200W vs 800W) w niższej cenie. Przy polskiej dystrybucji i serwisie UE — stosunek jakości do ceny przemawia na korzyść ORLLO."
  },
  {
    q: "Jaka stacja zasilania do domu jest najlepsza?",
    a: "Najlepsza stacja zasilania do domu powinna mieć pojemność minimum 1000 Wh, moc ciągłą 1000W+ i ogniwa LiFePO4 dla długiej żywotności. ORLLO Power Station spełnia wszystkie te kryteria i dodatkowo oferuje 4 gniazda AC 230V."
  },
  {
    q: "Ile wytrzyma lodówka na stacji zasilania?",
    a: "Typowa lodówka domowa zużywa 100-150W. Na stacji ORLLO 1024 Wh lodówka może pracować nawet 8-12 godzin ciągłej pracy, co wystarcza na przetrwanie większości awarii zasilania."
  },
  {
    q: "Czy można zasilać piec CO stacją zasilania?",
    a: "Tak! Pompa kotła CO pobiera zazwyczaj 80-120W. Stacja ORLLO z mocą ciągłą 1200W bez problemu zasili kocioł gazowy, pompę obiegową i sterownik jednocześnie. To kluczowe rozwiązanie na zimowe blackouty."
  },
  {
    q: "Jaka alternatywa dla EcoFlow River 2 Pro?",
    a: "ORLLO Power Station 1200W to najlepsza alternatywa dla EcoFlow River 2 Pro. Oferuje wyższą pojemność, większą moc ciągłą, więcej gniazd AC i niższą cenę — z polską dystrybucją i serwisem w UE."
  },
  {
    q: "Czy stacja zasilania LiFePO4 jest lepsza od NCM?",
    a: "Tak. Ogniwa LiFePO4 oferują 3000+ cykli ładowania (vs ~800 dla NCM), są bezpieczniejsze termicznie i trwalsze. Zarówno ORLLO jak i EcoFlow River 2 Pro korzystają z LiFePO4, co zapewnia wieloletnią eksploatację."
  },
  {
    q: "Ile kosztuje stacja zasilania ORLLO?",
    a: "Stacja zasilania ORLLO 1200W/1024Wh kosztuje ok. 2 699 zł z darmową wysyłką 24h. Dostępne są również raty 0%. To znacznie mniej niż porównywalne modele konkurencji."
  },
];

const FaqSection = () => (
  <section className="py-16 md:py-24 bg-card/50" id="faq">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Najczęściej zadawane pytania</h2>
        <p className="text-muted-foreground">Odpowiedzi na pytania, które zadajecie najczęściej</p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="surface-elevated border border-border rounded-xl px-5 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FaqSection;
