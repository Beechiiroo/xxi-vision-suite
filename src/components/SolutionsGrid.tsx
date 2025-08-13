import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, BarChart3, Brain, Zap } from "lucide-react";

const SolutionsGrid = () => {
  const solutions = [
    {
      icon: Building2,
      title: "ERP Intégré",
      description: "Gestion complète de vos ressources d'entreprise avec modules interconnectés",
      features: ["Comptabilité", "Stocks", "Production", "Ventes"],
      color: "from-blue-500 to-blue-600",
      href: "/solutions/erp"
    },
    {
      icon: Users,
      title: "CRM Intelligent",
      description: "Gestion client optimisée par l'IA pour maximiser vos ventes",
      features: ["Pipeline", "Automation", "Scoring", "Analytics"],
      color: "from-green-500 to-green-600",
      href: "/solutions/crm"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Tableaux de bord et analyses avancées pour la prise de décision",
      features: ["Dashboards", "Reporting", "KPIs", "Prédictions"],
      color: "from-purple-500 to-purple-600",
      href: "/solutions/bi"
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Solutions IA pour automatiser et optimiser vos processus métier",
      features: ["Prévisions", "Automatisation", "OCR", "Chatbots"],
      color: "from-orange-500 to-orange-600",
      href: "/solutions/ai"
    },
    {
      icon: Zap,
      title: "Automatisation RPA",
      description: "Robotisation des processus pour éliminer les tâches répétitives",
      features: ["Workflows", "Intégrations", "Notifications", "Planification"],
      color: "from-cyan-500 to-cyan-600",
      href: "/solutions/rpa"
    }
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Nos Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des outils puissants pour transformer votre entreprise et accélérer votre croissance
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={solution.title}
                className="group relative overflow-hidden bg-gradient-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="p-8 space-y-6">
                  {/* Icon */}
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature) => (
                        <span 
                          key={feature}
                          className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="ghost" 
                    className="group/btn p-0 h-auto text-primary hover:text-primary-dark font-semibold"
                    asChild
                  >
                    <a href={solution.href} className="flex items-center space-x-2">
                      <span>En savoir plus</span>
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </a>
                  </Button>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="btn-hero">
              Découvrir toutes nos solutions
            </Button>
            <Button variant="outline" size="lg" className="btn-outline-hero">
              Planifier une consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsGrid;