import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BackgroundElements from "@/components/BackgroundElements";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Alex Johnson | Full Stack Developer</title>
        <meta name="description" content="Portfolio of Alex Johnson, a Full Stack Developer specializing in React, Node.js, and responsive design." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet" />
      </Helmet>
      
      <BackgroundElements />
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ScrollToTop />
    </>
  );
}
