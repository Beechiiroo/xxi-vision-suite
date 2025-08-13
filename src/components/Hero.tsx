import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-accent/30 to-primary/5 section-padding">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                🚀 Solutions ERP/CRM de nouvelle génération
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Transformez votre{" "}
                <span className="text-gradient">entreprise</span>{" "}
                avec l'IA
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                XXIMMIII fournit des solutions de gestion intégrées qui boostent l'efficacité 
                et la prise de décision grâce à l'intelligence artificielle.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Automatisation intelligente",
                "Insights temps réel",
                "Intégration complète",
                "Support 24/7"
              ].map((benefit) => (
                <div key={benefit} className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-muted-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-hero group">
                Demander une démo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="btn-outline-hero group">
                <Play className="mr-2 h-5 w-5" />
                Voir la vidéo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm text-muted-foreground">Entreprises</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="bg-gradient-card rounded-3xl p-8 shadow-2xl">
                <div className="space-y-6">
                  {/* Dashboard Preview */}
                  <div className="bg-primary/5 rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-foreground">Dashboard Analytics</h3>
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-background rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-primary">847K</div>
                        <div className="text-xs text-muted-foreground">Revenus</div>
                      </div>
                      <div className="bg-background rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-success">+23%</div>
                        <div className="text-xs text-muted-foreground">Croissance</div>
                      </div>
                      <div className="bg-background rounded-lg p-3 text-center">
                        <div className="text-lg font-bold text-foreground">156</div>
                        <div className="text-xs text-muted-foreground">Commandes</div>
                      </div>
                    </div>
                  </div>

                  {/* AI Insights */}
                  <div className="bg-accent rounded-2xl p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-bold">AI</span>
                      </div>
                      <span className="font-medium text-foreground">Recommandations IA</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Optimisez vos stocks : 3 produits à réapprovisionner cette semaine
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;