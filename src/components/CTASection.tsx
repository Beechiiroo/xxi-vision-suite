import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section-padding bg-gradient-hero text-primary-foreground">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Content */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Prêt à transformer votre entreprise ?
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              Découvrez comment nos solutions peuvent optimiser vos processus, 
              améliorer votre productivité et accélérer votre croissance.
            </p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Entreprises satisfaites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">99.9%</div>
              <div className="text-primary-foreground/80">Disponibilité</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Support technique</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 group"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Demander une démo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Parler à un expert
            </Button>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/20">
            <p className="text-primary-foreground/80">
              Ou contactez-nous directement au{" "}
              <span className="font-semibold text-white">+216 XX XXX XXX</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;