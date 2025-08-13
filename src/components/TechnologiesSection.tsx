import { Card } from "@/components/ui/card";

const TechnologiesSection = () => {
  const technologies = [
    {
      name: "React",
      icon: "⚛️",
      description: "Interface utilisateur moderne",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Node.js",
      icon: "🟢",
      description: "Backend performant",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "TypeScript",
      icon: "📘",
      description: "Code robuste et typé",
      color: "from-blue-600 to-blue-400"
    },
    {
      name: "PostgreSQL",
      icon: "🐘",
      description: "Base de données fiable",
      color: "from-blue-700 to-indigo-600"
    },
    {
      name: "AI/ML",
      icon: "🧠",
      description: "Intelligence artificielle",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Docker",
      icon: "🐳",
      description: "Déploiement conteneurisé",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Azure",
      icon: "☁️",
      description: "Cloud Microsoft",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "GraphQL",
      icon: "📊",
      description: "API flexible",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="section-padding bg-muted/30">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="flex items-center justify-center space-x-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
            <span className="text-primary font-semibold">Nos Technologies</span>
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Technologies que nous utilisons
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre stack technologique moderne garantit des solutions performantes, 
            sécurisées et évolutives pour votre entreprise.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card 
              key={tech.name} 
              className="tech-card group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center space-y-4">
                {/* Icon */}
                <div className="relative">
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${tech.color} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {tech.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {tech.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technology Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="font-semibold text-xl text-foreground">Performance</h3>
            <p className="text-muted-foreground">
              Technologies optimisées pour des performances exceptionnelles
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="font-semibold text-xl text-foreground">Sécurité</h3>
            <p className="text-muted-foreground">
              Protection avancée et conformité aux standards industriels
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <span className="text-2xl">📈</span>
            </div>
            <h3 className="font-semibold text-xl text-foreground">Évolutivité</h3>
            <p className="text-muted-foreground">
              Solutions qui grandissent avec votre entreprise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;