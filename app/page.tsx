import Hero from "./components/Hero";
import ServicesSection from "./components/home/ServicesSection";
import SectionAboutUs from "./components/home/SectionAboutUs";
import SectionProjects from "./components/home/SectionProjects";
import StatsSection from "./components/home/StatsSection";
import HowWeWorkSection from "./components/home/HowWeWorkSection ";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Hero />
        <SectionAboutUs />
        <ServicesSection />
        <SectionProjects />
        <StatsSection />
        <HowWeWorkSection />
      </main>
    </div>
  );
}
