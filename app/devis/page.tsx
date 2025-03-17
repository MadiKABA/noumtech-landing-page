"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string; // Ajout du champ téléphone
  service: string;
  message: string;
}

export default function DevisPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "", // Initialisation du champ téléphone
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSubmitMessage(result.message);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        }); // Réinitialiser le formulaire
      } else {
        setSubmitMessage(
          result.message || "Erreur lors de l'envoi de la demande."
        );
      }
    } catch (error) {
      setSubmitMessage("Erreur lors de l'envoi de la demande.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {/* Bannière d'image */}
      <div
        className="w-full h-64 bg-cover bg-center mb-8 rounded-lg shadow-lg"
        style={{ backgroundImage: "url('/images/devis.avif')" }}
      >
        <div className="w-full h-full flex items-center justify-center bg-black/50 rounded-lg">
          <h1 className="text-4xl font-bold text-white text-center">
            Demandez un <span className="text-blue-400">Devis</span>
          </h1>
        </div>
      </div>

      {/* Formulaire */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-xl shadow-lg p-8 max-w-2xl w-full"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="name"
            >
              Nom complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre email"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="phone"
            >
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Votre numéro de téléphone"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="service"
            >
              Service souhaité
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Sélectionnez un service
              </option>
              <option value="Développement Web">Développement Web</option>
              <option value="Applications Mobiles">Applications Mobiles</option>
              <option value="Design UI/UX">Design UI/UX</option>
              <option value="Marketing Digital">Marketing Digital</option>
              <option value="Hébergement Cloud">Hébergement Cloud</option>
            </select>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-semibold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Décrivez votre projet..."
              rows={5}
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
            </button>
          </div>
          {submitMessage && (
            <p className="text-center text-gray-600 mt-4">{submitMessage}</p>
          )}
        </form>
      </motion.div>
    </div>
  );
}
