import Header from "../components/resume/Header";
import Hero from "../components/resume/Hero";
import About from "../components/resume/About";
import Experience from "../components/resume/Experience";
import Skills from "../components/resume/Skills";
import Projects from "../components/resume/Projects";
import Certifications from "../components/resume/Certifications";
import Research from "../components/resume/Research";
import Education from "../components/resume/Education";
import Contact from "../components/resume/Contact";
import Footer from "../components/resume/Footer";
import { ScrollToTop } from "../components/scroll-to-top";
import { ThemeToggle } from "../components/theme-toggle";
import MatrixRain from "../components/matrix-rain";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-black dark:bg-black text-gray-900 dark:text-gray-100 overflow-x-hidden">
      
      {/* Matrix Rain Background */}
      <MatrixRain />

      {/* Optional soft background gradients */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-100/30 via-transparent to-red-100/30 dark:from-blue-900/20 dark:via-transparent dark:to-red-900/20 pointer-events-none" />
      <div className="fixed inset-0 bg-[url('/lovable-uploads/68e07a39-0361-4460-b397-03d9694d7a08.png')] bg-cover bg-center opacity-5 dark:opacity-10 mix-blend-overlay pointer-events-none" />
      
      {/* Main Content Above Matrix */}
      <div className="relative z-10">
        <Header />
        <main className="space-y-20 [&>section]:scroll-mt-16">
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Research />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>

      {/* Optional Theme Toggle Button */}
      <ThemeToggle />
    </div>
  );
};

export default Index;
