"use client";
import React from "react";
import Image from "next/image"; // Importez le composant Image de Next.js
import { motion } from "framer-motion"; // Importez Framer Motion

// Variantes d'animation
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Délai entre les animations des enfants
    },
  },
};

const AboutUs = () => {
  return (
    <section id="about_us" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section: Qui nous sommes avec image et animations */}
        <motion.div
          className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Image à gauche avec bordures arrondies */}
          <motion.div className="w-full lg:w-1/2 relative" variants={fadeInUp}>
            <div className="relative h-64 lg:h-96 rounded-2xl overflow-hidden border-4 border-white shadow-sm">
              <Image
                src="/images/about.jpg" // Remplacez par le chemin de votre image
                alt="Noumtech - Qui nous sommes"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Texte à droite avec animations */}
          <motion.div className="w-full lg:w-1/2 space-y-6" variants={fadeInUp}>
            <h2 className="text-4xl font-extrabold text-black">
              Qui nous sommes
            </h2>
            <p className="text-lg text-gray-700">
              Chez <span className="font-bold text-black">Noumtech</span>,nous
              sommes les architectes de votre succès numérique. Basés au Guinée,
              notre équipe passionnée se spécialise dans le développement de
              logiciels, la création de sites web, le marketing digital et la
              consultation technologique.
            </p>
            <p className="text-lg text-gray-700">
              Notre mission est claire :{" "}
              <span className="font-bold text-black mr-1">
                accompagner les entreprises et entrepreneurs dans leur
                transformation numérique
              </span>
              en offrant des solutions innovantes, adaptées aux réalités locales
              et internationales. Nous croyons en un monde où la technologie est
              un moteur de croissance, d&apos;innovation et de compétitivité.
            </p>

            {/* Bouton "Contactez-nous" avec fond dégradé */}
            <motion.div
              className="mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="/contact" // Remplacez par le lien de votre page de contact
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-500 transition-all duration-300"
              >
                Contactez-nous
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
