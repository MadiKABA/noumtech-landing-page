"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image"; // Import du composant Image de Next.js

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Suivre l'état du défilement
  const pathname = usePathname();

  // Gérer l'événement de défilement
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      } fixed w-full top-0 z-50 transition-all duration-300 md:px-6`}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo à gauche avec le composant Image de Next.js */}
        <Link href="/" className="flex items-center">
          <div className="h-12 w-auto">
            {" "}
            {/* Augmente la taille du conteneur */}
            <Image
              src="/logo/logo-noumtech.png"
              alt="Noumtech Logo"
              width={250}
              height={100}
              priority
            />
          </div>
        </Link>

        {/* Navigation Desktop */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLink href="/" pathname={pathname} isScrolled={isScrolled}>
            Accueil
          </NavLink>
          <NavLink href="/services" pathname={pathname} isScrolled={isScrolled}>
            Services
          </NavLink>
          <NavLink href="/about" pathname={pathname} isScrolled={isScrolled}>
            À propos
          </NavLink>
          <NavLink href="/contact" pathname={pathname} isScrolled={isScrolled}>
            Contact
          </NavLink>
          <Link href="/devis" className="cta-button">
            Demander un devis
          </Link>
        </div>

        {/* Menu Burger (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-600"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Animé */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            className="md:hidden fixed top-0 right-0 h-full w-full sm:w-3/4 bg-white shadow-lg flex flex-col items-center py-10 space-y-6"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-blue-600"
            >
              <X size={28} />
            </button>

            <NavLink
              href="/"
              pathname={pathname}
              onClick={() => setMenuOpen(false)}
              isScrolled={isScrolled}
            >
              Accueil
            </NavLink>
            <NavLink
              href="/services"
              pathname={pathname}
              onClick={() => setMenuOpen(false)}
              isScrolled={isScrolled}
            >
              Services
            </NavLink>
            <NavLink
              href="/about"
              pathname={pathname}
              onClick={() => setMenuOpen(false)}
              isScrolled={isScrolled}
            >
              À propos
            </NavLink>
            <NavLink
              href="/contact"
              pathname={pathname}
              onClick={() => setMenuOpen(false)}
              isScrolled={isScrolled}
            >
              Contact
            </NavLink>
            <Link
              href="/devis"
              className="cta-button"
              onClick={() => setMenuOpen(false)}
            >
              Demander un devis
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Composant pour gérer les liens actifs
const NavLink = ({
  href,
  pathname,
  children,
  onClick,
  isScrolled,
}: {
  href: string;
  pathname: string;
  children: React.ReactNode;
  onClick?: () => void;
  isScrolled: boolean;
}) => {
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-link ${isActive ? "active" : ""} ${
        !isScrolled && !isActive ? "text-white" : ""
      } ${isScrolled && !isActive ? "text-black" : ""}`}
    >
      {children}
    </Link>
  );
};

export default Navbar;
