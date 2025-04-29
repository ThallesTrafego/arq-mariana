
import { Header } from "@/components/Header";
import { useState } from "react";

// Import all section components
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { CTASection } from "@/components/sections/CTASection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { SecondCTASection } from "@/components/sections/SecondCTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const Index = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden font-century">
      <Header />
      
      {/* Hero Section */}
      <HeroSection onScrollToProjects={scrollToProjects} />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Process Section */}
      <ProcessSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Differentials Section */}
      <DifferentialsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Second CTA Section */}
      <SecondCTASection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
