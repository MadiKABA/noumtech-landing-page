"use client";

import ServiceCard from "../ServiceCard";

// Définir le type pour un service
type Service = {
  icon: string; // Vous pouvez utiliser des icônes (ex: Heroicons, FontAwesome, etc.)
  title: string;
  description: string;
};

// Données des services (à remplacer par vos données réelles)
const services: Service[] = [
  {
    icon: "💻", // Exemple d'icône (remplacez par une icône réelle)
    title: "Développement Web",
    description:
      "Création de sites web modernes, responsives et optimisés pour le SEO.",
  },
  {
    icon: "📱",
    title: "Développement Mobile",
    description:
      "Applications iOS et Android intuitives et performantes, conçues pour vos utilisateurs.",
  },
  {
    icon: "🚀",
    title: "Solutions Digitales",
    description:
      "Automatisation des processus métiers pour gagner en efficacité.",
  },
  {
    icon: "🎨",
    title: "Design UX/UI",
    description:
      "Interfaces utilisateur intuitives et engageantes pour maximiser l’expérience client.",
  },
  {
    icon: "🔒",
    title: "Sécurité Informatique",
    description: "Protégez vos données et systèmes contre les cybermenaces.",
  },
  {
    icon: "📊",
    title: "Analyse de Données",
    description: "Transformez vos données en insights actionnables.",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Effet Wave */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-wave bg-cover bg-no-repeat"></div>

      {/* Conteneur avec espace de gauche à droite */}
      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        {/* Titre et sous-titre */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-blue-900">Nos Services</h2>
          <div className="flex justify-center">
            <p className="text-lg text-center mt-6 max-w-2xl mx-auto">
              <span className="font-bold">Noumtech</span> s’engage à fournir des solutions technologiques
              innovantes et performantes, accompagnant ses clients dans la
              réalisation de leurs ambitions commerciales et leur permettant de
              se démarquer dans un environnement numérique en perpétuelle
              évolution.
            </p>
          </div>
        </div>

        {/* Grille des services - 3 cartes par ligne */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
