
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ThemeToggle } from "../theme-toggle";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-950/80 dark:bg-gray-950/80 backdrop-blur-md z-50 border-b border-blue-900/30">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 h-16">
        <a href="#hero" className="text-xl font-semibold text-blue-400 hover:text-blue-300 transition-colors">
          Mohith V.
        </a>
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
          <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
          <a href="#skills" className="text-gray-400 hover:text-blue-400 transition-colors">Skills</a>
          <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
          <a href="#certifications" className="text-gray-400 hover:text-blue-400 transition-colors">Certifications</a>
          <a href="#research" className="text-gray-400 hover:text-blue-400 transition-colors">Research</a>
          <a href="#education" className="text-gray-400 hover:text-blue-400 transition-colors">Education</a>
          <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"
            asChild
          >
            <a href="mailto:mohithnagaadithya2001@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"
            asChild
          >
            <a href="https://github.com/Mohithvasamsetti5666" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-gray-400 hover:text-blue-400 hover:scale-110 transition-all"
            asChild
          >
            <a href="https://www.linkedin.com/in/mvasamsetti/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
