import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Users, 
  BarChart3, 
  Brain, 
  Zap,
  CheckCircle,
  ArrowRight,
  Cloud,
  Shield,
  Smartphone
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: Building2,
      title: "ERP Intégré",
      description: "Solution complète de gestion des ressources d'entreprise",
      longDescription: "Notre ERP intégré couvre tous vos besoins de gestion : comptabilité, stocks, production, ventes, achats et ressources humaines. Une plateforme unifiée pour centraliser toutes vos données d'entreprise.",
      features: [
        "Gestion comptable complète",
        "Suivi des stocks en temps réel",
        "Planification de production",
        "Gestion des ventes et achats",
        "Module RH intégré",
        "Tableaux de bord exécutifs"
      ],
      benefits: [
        "Réduction des coûts opérationnels",
        "Amélioration de la productivité",
        "Visibilité complète sur l'entreprise",
        "Automatisation des processus"
      ],
      color: "from-blue-500 to-blue-600",
      href: "/solutions/erp"
    },
    {
      icon: Users,
      title: "CRM Intelligent",
      description: "Gestion de la relation client optimisée par l'IA",
      longDescription: "Notre CRM intelligent utilise l'IA pour optimiser vos ventes, automatiser le marketing et améliorer la satisfaction client. Gérez efficacement votre pipeline commercial.",
      features: [
        "Pipeline de ventes automatisé",
        "Scoring client par IA",
        "Marketing automation",
        "Service client intégré",
        "Analytics de performance",
        "Intégration multi-canaux"
      ],
      benefits: [
        "Augmentation du taux de conversion",
        "Fidélisation client améliorée",
        "Automatisation marketing",
        "Insights clients précis"
      ],
      color: "from-green-500 to-green-600",
      href: "/solutions/crm"
    },
    {
      icon: BarChart3,
      title: "Business Intelligence",
      description: "Analytics avancées pour la prise de décision",
      longDescription: "Transformez vos données en insights actionnables avec nos outils de BI. Dashboards interactifs, rapports automatisés et analyses prédictives pour piloter votre entreprise.",
      features: [
        "Dashboards interactifs",
        "Rapports automatisés",
        "Analyses prédictives",
        "KPI en temps réel",
        "Data mining avancé",
        "Visualisations personnalisées"
      ],
      benefits: [
        "Décisions basées sur les données",
        "Identification des opportunités",
        "Optimisation des performances",
        "Réduction des risques"
      ],
      color: "from-purple-500 to-purple-600",
      href: "/solutions/bi"
    },
    {
      icon: Brain,
      title: "Intelligence Artificielle",
      description: "Solutions IA pour automatiser et optimiser",
      longDescription: "Intégrez l'IA dans vos processus métier : prévisions de ventes, maintenance prédictive, chatbots intelligents et automatisation cognitive.",
      features: [
        "Prévisions de ventes par IA",
        "Maintenance prédictive",
        "Chatbots intelligents",
        "OCR et traitement document",
        "Détection d'anomalies",
        "Recommandations automatiques"
      ],
      benefits: [
        "Automatisation cognitive",
        "Prédictions précises",
        "Réduction des erreurs",
        "Innovation continue"
      ],
      color: "from-orange-500 to-orange-600",
      href: "/solutions/ai"
    },
    {
      icon: Zap,
      title: "Automatisation RPA",
      description: "Robotisation des processus répétitifs",
      longDescription: "Éliminez les tâches manuelles avec notre solution RPA. Automatisez vos workflows, intégrez vos systèmes et libérez vos équipes pour des tâches à plus forte valeur.",
      features: [
        "Workflows automatisés",
        "Intégrations systèmes",
        "Planification intelligente",
        "Monitoring en continu",
        "Gestion des exceptions",
        "Scalabilité dynamique"
      ],
      benefits: [
        "Gain de temps significatif",
        "Réduction des erreurs",
        "ROI rapide",
        "Flexibilité opérationnelle"
      ],
      color: "from-cyan-500 to-cyan-600",
      href: "/solutions/rpa"
    }
  ];

  const deploymentOptions = [
    {
      icon: Cloud,
      title: "SaaS Cloud",
      description: "Déploiement rapide, maintenance incluse",
      features: ["Mise en service immédiate", "Mises à jour automatiques", "Support 24/7", "Sécurité renforcée"]
    },
    {
      icon: Shield,
      title: "On-Premise",
      description: "Contrôle total, sécurité maximale",
      features: ["Données sur site", "Personnalisation complète", "Intégration legacy", "Conformité stricte"]
    },
    {
      icon: Smartphone,
      title: "Hybride",
      description: "Le meilleur des deux mondes",
      features: ["Flexibilité maximale", "Migration progressive", "Coûts optimisés", "Évolutivité garantie"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-background via-accent/30 to-primary/5">
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="px-4 py-2">
                  🚀 Solutions Entreprise
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Nos <span className="text-gradient">Solutions</span>
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Des outils puissants et intégrés pour transformer votre entreprise, 
                  optimiser vos processus et accélérer votre croissance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="section-padding">
          <div className="section-container space-y-16">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={solution.title}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
                >
                  {/* Content */}
                  <div className={`space-y-8 ${!isEven ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-foreground">{solution.title}</h3>
                          <p className="text-lg text-muted-foreground">{solution.description}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {solution.longDescription}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Fonctionnalités clés :</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {solution.features.map((feature) => (
                          <div key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground">Bénéfices :</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.benefits.map((benefit) => (
                          <Badge key={benefit} variant="secondary" className="px-3 py-1">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="btn-hero group">
                      En savoir plus
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Visual */}
                  <div className={`${!isEven ? 'lg:col-start-1' : ''}`}>
                    <Card className="bg-gradient-card border-0 shadow-2xl">
                      <div className="p-8">
                        <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center`}>
                          <IconComponent className="h-24 w-24 text-white/80" />
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Deployment Options */}
        <section className="section-padding bg-muted/30">
          <div className="section-container">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Options de déploiement
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choisissez le mode de déploiement qui correspond le mieux à vos besoins et contraintes
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {deploymentOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card 
                    key={option.title}
                    className="tech-card text-center"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="space-y-6">
                      <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold text-foreground">{option.title}</h3>
                        <p className="text-muted-foreground">{option.description}</p>
                      </div>
                      <ul className="space-y-2">
                        {option.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;