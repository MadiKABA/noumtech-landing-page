"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-12 lg:px-20"
      style={{
        backgroundImage: "url('/images/hero-bg1.jpg')", // Image de fond
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay pour meilleure lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenu du Hero avec animations */}
      <div className="relative z-10 max-w-3xl text-white">
        {/* Titre avec animation */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
        >
          L&apos;innovation au service de votre succès
        </motion.h1>

        {/* Description avec animation */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="my-12 text-base sm:text-lg md:text-xl"
        >
          Des solutions digitales pour booster votre entreprise.
        </motion.p>

        {/* Boutons avec animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-6 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-semibold rounded-md transition duration-300"
          >
            Découvrir Nos Services
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 text-lg font-semibold rounded-md transition duration-300"
          >
            Contactez-nous
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
