import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import WorkSection from "../components/work/WorkSection";
import ServicesSection from "../components/services/ServicesSection";
import AboutSection from "../components/about/AboutSection";
import SkillsSection from "../components/skills/SkillsSection";
import ProcessSection from "../components/process/ProcessSection";
import ContactSection from "../components/contact/ContactSection";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <WorkSection />

      <ServicesSection />

      <AboutSection />

      <SkillsSection />

      <ProcessSection />

      <ContactSection />

      <Footer />
    </main>
  );
}