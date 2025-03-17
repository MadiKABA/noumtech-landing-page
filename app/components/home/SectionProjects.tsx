"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Application de gestion de stock",
    description:
      "Une plateforme complète pour la gestion des stocks et des ventes en temps réel.",
    image: "/images/projet/gestionstock.PNG",
    category: "Business",
  },
  {
    id: 2,
    title: "Marketplace e-commerce",
    description:
      "Un site de vente en ligne avec gestion des paiements et des commandes.",
    image: "/images/projet/guifoottalent.PNG",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "Application de réservation de taxi",
    description:
      "Une solution mobile et web pour la réservation de taxis en toute simplicité.",
    image: "/images/projet/jolomobitiy.PNG",
    category: "Transport",
  },
  // {
  //   id: 4,
  //   title: "Plateforme de formation en ligne",
  //   description:
  //     "Un espace d'apprentissage numérique avec des cours interactifs.",
  //   image: "/images/online-learning.jpg",
  //   category: "Éducation",
  // },
  // {
  //   id: 5,
  //   title: "Application de gestion d'événements",
  //   description:
  //     "Une solution complète pour organiser et gérer des événements en toute simplicité.",
  //   image: "/images/event-management.jpg",
  //   category: "Événementiel",
  // },
  // {
  //   id: 6,
  //   title: "Analyse de données basée sur l'IA",
  //   description:
  //     "Une plateforme innovante pour l'analyse de données et les prédictions basées sur l'intelligence artificielle.",
  //   image: "/images/data-analysis.jpg",
  //   category: "Technologie",
  // },
];

export default function SectionProjects() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 min-h-screen relative overflow-hidden px-4 sm:px-6 lg:px-24">
      <div className="absolute inset-0 z-0 bg-pattern bg-repeat opacity-10"></div>

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-blue-700 mb-16"
        >
          Nos <span className="text-purple-600">Projets Réalisés</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              className="bg-white rounded-xl shadow-2xl overflow-hidden transform transition-transform duration-300 border border-gray-100 relative group hover:shadow-xl"
            >
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
