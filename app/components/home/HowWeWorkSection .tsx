import Image from "next/image";

const HowWeWorkSection = () => {
  return (
    <section id="contact" className="py-32 bg-gradient-to-r from-blue-50 to-orange-50 text-gray-800">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Partie Texte */}
          <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
            <h2 className="text-5xl font-bold text-blue-700 mb-6">
              Transformez vos idées en{" "}
              <span className="text-orange-500">expériences digitales</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nous combinons créativité, expertise technique et collaboration
              pour créer des solutions sur mesure qui propulsent votre
              entreprise vers l&apos;avenir.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Carte 1 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <span className="text-3xl">🤝</span>
                </div>
                <p className="font-semibold text-xl mb-2">
                  Collaboration transparente
                </p>
                <p className="text-gray-500">
                  Nous travaillons en étroite collaboration avec vous pour des
                  résultats durables.
                </p>
              </div>

              {/* Carte 2 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-teal-500 text-white rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <span className="text-3xl">✨</span>
                </div>
                <p className="font-semibold text-xl mb-2">Design innovant</p>
                <p className="text-gray-500">
                  Des interfaces modernes et intuitives pour une expérience
                  utilisateur exceptionnelle.
                </p>
              </div>

              {/* Carte 3 */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-yellow-500 text-black rounded-full flex items-center justify-center mb-4 mx-auto lg:mx-0">
                  <span className="text-3xl">🚀</span>
                </div>
                <p className="font-semibold text-xl mb-2">
                  Croissance accélérée
                </p>
                <p className="text-gray-500">
                  Des solutions agiles pour booster votre croissance et votre
                  compétitivité.
                </p>
              </div>
            </div>

            <a
              href="#realizations"
              className="inline-block bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition duration-300 transform hover:scale-105"
            >
              Découvrez nos réalisations
            </a>
          </div>

          {/* Partie Image (masquée sur mobile) */}
          <div className="hidden lg:block w-full lg:w-1/2">
            <div className="relative h-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src="/images/about-us.jpg" // Remplacez par votre propre chemin d'image
                alt="Notre équipe en action"
                className="w-full h-auto object-cover transform transition-transform duration-300 hover:scale-105"
                width={600} // Ajustez la largeur selon vos besoins
                height={400} // Ajustez la hauteur selon vos besoins
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
