"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Application de gestion de stock",
    description:
      "Une plateforme complète pour la gestion des stocks et des ventes en temps réel.",
    image: "/images/stock-management.jpg", // Remplacez par votre image
  },
  {
    id: 2,
    title: "Marketplace e-commerce",
    description:
      "Un site de vente en ligne avec gestion des paiements et des commandes.",
    image: "/images/ecommerce-marketplace.jpg", // Remplacez par votre image
  },
  {
    id: 3,
    title: "Application de réservation de taxi",
    description:
      "Une solution mobile et web pour la réservation de taxis en toute simplicité.",
    image: "/images/taxi-booking.jpg", // Remplacez par votre image
  },
  {
    id: 4,
    title: "Plateforme de formation en ligne",
    description:
      "Un espace d'apprentissage numérique avec des cours interactifs.",
    image: "/images/online-learning.jpg", // Remplacez par votre image
  },
  {
    id: 5,
    title: "Application de gestion d'événements",
    description:
      "Une solution complète pour organiser et gérer des événements en toute simplicité.",
    image: "/images/event-management.jpg", // Remplacez par votre image
  },
];

export default function SectionProjects() {
  return (
    <section className="py-20 bg-white min-h-screen relative overflow-hidden">
      {/* Effet de pulse en arrière-plan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse -top-32 -left-32"></div>
        <div className="absolute w-64 h-64 bg-blue-100 rounded-full opacity-20 animate-pulse -bottom-32 -right-32"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Titre avec animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-blue-600 mb-16"
        >
          Nos Projets Réalisés
        </motion.h2>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }} // Effet de zoom et de rotation au survol
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 border border-gray-100 relative group"
            >
              {/* Image du projet */}
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                {/* Overlay au survol */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Contenu du projet */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>

              {/* Bouton "En savoir plus" dynamique */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
              >
                <a
                  href="#"
                  className="px-6 py-2 text-white font-semibold text-lg rounded-lg bg-blue-600 shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                  En savoir plus
                </a>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bouton "Voir plus de projets" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-white font-bold text-lg rounded-lg bg-blue-600 shadow-lg hover:bg-blue-700 transition-all duration-300"
          >
            Voir plus de projets
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}