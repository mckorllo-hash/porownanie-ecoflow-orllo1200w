import HeroSection from "@/components/HeroSection";
import QuickComparison from "@/components/QuickComparison";
import FullComparisonTable from "@/components/FullComparisonTable";
import AdvantagesSection from "@/components/AdvantagesSection";
import UsageScenarios from "@/components/UsageScenarios";
import ReviewsSection from "@/components/ReviewsSection";
import VsGeneratorSection from "@/components/VsGeneratorSection";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import StickyCta from "@/components/StickyCta";

const Index = () => {
  return (
    <main className="min-h-screen bg-background pb-16 md:pb-0">
      <HeroSection />
      <QuickComparison />
      <FullComparisonTable />
      <AdvantagesSection />
      <UsageScenarios />
      <ReviewsSection />
      <VsGeneratorSection />
      <FaqSection />
      <FinalCta />
      <StickyCta />

      {/* Footer */}
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2026 Porównanie stacji zasilania. Wszystkie dane na podstawie specyfikacji producenta.</p>
          <p className="mt-1">Strona nie jest oficjalną stroną EcoFlow. EcoFlow® jest znakiem towarowym EcoFlow Technology.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
