import Image from "next/image";
import Hero from "./components/Hero";
import ServicesSection from "./components/home/ServicesSection";
import SectionAboutUs from "./components/home/SectionAboutUs";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <SectionAboutUs />
        <ServicesSection />
      </main>
    </div>
  );
}
