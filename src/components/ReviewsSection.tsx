import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
{ name: "Marek K.", role: "Dom jednorodzinny", text: "Kupiłem ORLLO przed zimą i podczas awarii prądu zasilałem kocioł CO przez 8 godzin. Rewelacja — polecam każdemu właścicielowi domu." },
{ name: "Anna W.", role: "Rodzina 2+2", text: "Lodówka, router i lampki chodziły całą noc podczas burzy. Dzieci nawet nie zauważyły, że nie było prądu. Naprawdę warto." },
{ name: "Tomasz R.", role: "Firma budowlana", text: "Używam na budowie do zasilania elektronarzędzi. Kompaktowa, lekka i ładuje się ekspresowo. Lepsza niż generator spalinowy." },
{ name: "Katarzyna M.", role: "Camping", text: "Na campingu zasilam lodówkę turystyczną i ładuję telefony. Trzy dni bez gniazdka — żaden problem!" },
{ name: "Paweł S.", role: "Dom Blackout", text: "Po ostatnich wichurach byliśmy 12h bez prądu. ORLLO uratował nam lodówkę pełną jedzenia. Inwestycja, która się zwraca." },
{ name: "Ewa L.", role: "Praca zdalna", text: "Pracuję z domu i przerwy w prądzie to koszmar. Z ORLLO laptop i router działają bez przerwy — zero stresu." },
{ name: "Jakub D.", role: "Fotowoltaika", text: "Ładuję panelami solarnymi i mam darmową energię na działce. Świetna stacja, polska dystrybucja to duży plus." },
{ name: "Monika G.", role: "Dom jednorodzinny", text: "Serwis odpowiedział w 24h, wysyłka tego samego dnia. Jakość obsługi na najwyższym poziomie. Polecam!" }];


const Stars = () =>
<div className="flex gap-0.5">
    {[...Array(5)].map((_, i) =>
  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
  )}
  </div>;


const ReviewsSection = () =>
<section className="py-16 md:py-24 bg-card/50">
    <div className="container mx-auto px-4">
      <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-12">

        <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">Opinie klientów ORLLO</h2>
        <p className="text-muted-foreground">Sprawdź, co mówią użytkownicy naszych stacji zasilania</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {reviews.map((r, i) =>
      <motion.div
        key={r.name}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.05 }}
        className="surface-elevated rounded-2xl p-5 border border-border">

            <Stars />
            <p className="text-foreground/90 text-sm mt-3 mb-4 leading-relaxed">„{r.text}"</p>
            <div>
              <p className="font-bold text-foreground text-sm">{r.name}</p>
              <p className="text-muted-foreground text-xs">{r.role}</p>
            </div>
          </motion.div>
      )}
      </div>
    </div>
  </section>;


export default ReviewsSection;