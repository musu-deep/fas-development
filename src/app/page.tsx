import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WorkshopsSection from "@/components/WorkshopsSection";
import PartnersSection from "@/components/PartnersSection";
import VisionSection from "@/components/VisionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />

      {/* Section Divider */}
      <div className="section-divider" />

      <AboutSection />

      {/* Section Divider */}
      <div className="section-divider" />

      <ServicesSection />

      {/* Section Divider */}
      <div className="section-divider" />

      <WorkshopsSection />

      {/* Section Divider */}
      <div className="section-divider" />

      <PartnersSection />

      {/* Section Divider */}
      <div className="section-divider" />

      <VisionSection />

      {/* Section Divider */}
      <div className="section-divider" />

      <ContactSection />

      <Footer />
    </main>
  );
}
