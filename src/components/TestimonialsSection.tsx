import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amina Ben Salem",
      role: "Directrice Générale",
      company: "TechCorp Tunisie",
      rating: 5,
      quote: "XXIMMIII a révolutionné notre gestion d'entreprise. L'intégration ERP-CRM nous a fait gagner 40% de temps sur nos processus quotidiens.",
      avatar: "👩‍💼"
    },
    {
      name: "Mohamed Karim",
      role: "Chef de Production",
      company: "IndustrieMax",
      rating: 5,
      quote: "Les modules de production et gestion des stocks ont optimisé notre chaîne d'approvisionnement. Le ROI est visible dès le premier mois.",
      avatar: "👨‍🔧"
    },
    {
      name: "Fatma Gharbi",
      role: "Responsable Financière",
      company: "FinanceProTN",
      rating: 5,
      quote: "L'IA prédictive de XXIMMIII nous aide à anticiper les tendances financières. Une solution indispensable pour la prise de décision stratégique.",
      avatar: "👩‍💻"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez comment XXIMMIII transforme le quotidien des entreprises tunisiennes
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name}
              className="relative bg-gradient-card border-0 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="p-8 space-y-6">
                {/* Quote Icon */}
                <div className="flex justify-between items-start">
                  <Quote className="h-8 w-8 text-primary/30" />
                  {/* Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-muted-foreground leading-relaxed text-lg">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primary font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 px-8 py-4 bg-background rounded-2xl shadow-lg">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium text-muted-foreground">+500 entreprises</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium text-muted-foreground">96% de satisfaction</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-success rounded-full"></div>
              <span className="text-sm font-medium text-muted-foreground">Support 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;