"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type Service = {
  id: number;
  icon: string;
  title: string;
  description: string;
  image: string;
};

const services = [
  {
    id: 1,
    icon: "🌐",
    title: "Développement Web",
    description:
      "Donnez vie à votre vision en ligne avec des sites web ultra-performants, conçus pour convertir vos visiteurs en clients fidèles. Nous combinons design élégant, rapidité et optimisation SEO pour maximiser votre visibilité et votre impact.",
    image: "/images/services/Website-dev.png",
  },
  {
    id: 2,
    icon: "📱",
    title: "Développement Mobile",
    description:
      "Passez à la vitesse supérieure avec des applications mobiles intuitives et puissantes. Que ce soit pour iOS ou Android, nous créons des expériences utilisateur qui captivent et fidélisent votre audience.",
    image: "/images/services/Mobile wireframe-amico.png",
  },
  {
    id: 3,
    icon: "🛍️",
    title: "Sites E-commerce et Vitrine",
    description:
      "Transformez vos visiteurs en acheteurs avec des boutiques en ligne et des sites vitrines qui allient esthétique, simplicité et performance. Augmentez vos ventes grâce à une expérience d'achat fluide et sécurisée.",
    image: "/images/services/Ecommerce web page-amico.png",
  },
  {
    id: 4,
    icon: "💡",
    title: "Développement de Logiciels Personnalisés",
    description:
      "Libérez le potentiel de votre entreprise avec des logiciels sur mesure, conçus pour répondre à vos besoins uniques. Automatisez vos processus, boostez votre productivité et prenez une longueur d'avance sur vos concurrents.",
    image: "/images/services/Dashboard-cuate.png",
  },
  {
    id: 5,
    icon: "📢",
    title: "Gestion des Réseaux Sociaux",
    description:
      "Dominez les réseaux sociaux avec une stratégie de contenu percutante et une gestion professionnelle. Augmentez votre engagement, construisez une communauté fidèle et boostez votre notoriété.",
    image: "/images/services/New notifications-amico.png",
  },
  {
    id: 6,
    icon: "🎨",
    title: "Conception d'Identités Visuelles",
    description:
      "Donnez une identité forte et mémorable à votre marque. Nous créons des logos, chartes graphiques et designs qui captivent et reflètent vos valeurs, pour vous démarquer sur tous les supports.",
    image: "/images/services/4005104_14665.jpg",
  },
  {
    id: 7,
    icon: "🔧",
    title: "Conseil en Technologie",
    description:
      "Optimisez vos infrastructures et vos processus grâce à notre expertise technologique. Nous vous aidons à prendre les bonnes décisions pour rester compétitif dans un monde en constante évolution.",
    image: "/images/services/Digital presentation-amico.png",
  },
];

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-full h-20 bg-wave bg-cover bg-no-repeat"></div>

      <div className="container mx-auto px-8 lg:px-16 xl:px-24">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-blue-900">Nos Services</h2>
          <p className="text-lg text-center mt-6 max-w-2xl mx-auto">
            Chez <span className="font-bold">Noumtech</span>, nous nous
            engageons à offrir des solutions technologiques innovantes et
            sur-mesure, conçues pour répondre aux besoins spécifiques de nos
            clients et améliorer leur performance.
          </p>
        </div>

        {/* Navigation des services */}
        <div className="flex justify-center space-x-4 mb-12 flex-wrap">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveService(service)}
              className={`px-6 py-2 rounded-full text-lg font-semibold transition duration-300 ${
                activeService.id === service.id
                  ? "bg-gradient-to-r from-blue-600 to-blue-200 text-white shadow-lg hover:shadow-xl"
                  : "bg-white text-blue-900 hover:bg-gradient-to-r from-blue-100 to-orange-100"
              }`}
            >
              {service.icon}
            </button>
          ))}
        </div>

        {/* Contenu du service actif */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Description du service */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-blue-900">
                {activeService.title}
              </h3>
              <p className="text-lg text-gray-800">
                {activeService.description}
              </p>
              <Link href="/devis">
                <button className=" mt-7 bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-blue-700 transition duration-300 shadow-lg hover:shadow-xl">
                  Demander un devis
                </button>
              </Link>
            </div>

            {/* Image du service */}
            <div className="flex justify-center rounded-lg overflow-hidden shadow-sm">
              <Image
                src={activeService.image}
                alt={activeService.title}
                width={400}
                height={400}
                // className="w-full h-15 object-cover"
                priority
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
