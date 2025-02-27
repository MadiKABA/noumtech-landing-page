"use client";
import { motion } from "framer-motion";

// Définir les props du composant
type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
      variants={{
        offscreen: {
          y: 50,
          opacity: 0,
        },
        onscreen: {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8,
          },
        },
      }}
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
        borderColor: "#F97316", // Couleur orange pour la bordure au survol
        transition: {
          type: "spring",
          stiffness: 300,
        },
      }}
      className="bg-white/80 backdrop-blur-md p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-orange-500 text-center transform hover:-translate-y-2 group"
    >
      {/* Icône dans un cercle - notez l'utilisation de group-hover: */}
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-blue-500 group-hover:bg-orange-500 transition-colors duration-300">
        <span className="text-2xl text-white">{icon}</span>
      </div>
      {/* Titre */}
      <h3 className="text-xl font-semibold text-blue-900 mb-6">{title}</h3>
      {/* Description */}
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
