import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import MatrixRain from "../matrix-rain";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-transparent to-red-50/30 dark:from-blue-900/10 dark:via-transparent dark:to-red-900/10" />
      <div className="absolute inset-0 bg-[url('/lovable-uploads/68e07a39-0361-4460-b397-03d9694d7a08.png')] bg-cover bg-center opacity-10 mix-blend-overlay dark:opacity-10" />
      <MatrixRain />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left animate-fade-in">
            <h1 className="space-y-2">
              <span className="block text-lg md:text-xl font-medium text-blue-600 dark:text-blue-400">Hello, I'm</span>
              <span className="block text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-700 to-blue-500 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Mohith Naga Adithya Vasamsetti
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200">
              Cybersecurity Analyst & Engineer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto lg:mx-0 dark:text-gray-300">
              Specialized in threat monitoring, incident response, and vulnerability assessment across multiple sectors. Passionate about fortifying enterprise security through emerging technologies and best practices.
            </p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button asChild variant="default" className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white shadow-lg shadow-blue-700/20 hover:shadow-blue-700/40 dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transition-all duration-300">
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button asChild variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600/10 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400/10">
                <a href="#experience">
                  View Experience
                </a>
              </Button>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 w-full max-w-[300px] aspect-square animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-red-500/30 dark:from-blue-600/20 dark:to-red-600/20 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-gradient-to-br from-gray-100/70 to-white/60 dark:from-gray-800/50 dark:to-gray-900/60 backdrop-blur rounded-full w-full h-full overflow-hidden border-4 border-blue-300/30 dark:border-blue-500/30 shadow-xl transition-all duration-500 hover:shadow-blue-300/30 dark:hover:shadow-blue-600/40 hover:shadow-xl group">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-300/10 to-blue-400/30 dark:via-blue-400/10 dark:to-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute inset-0 border-8 border-white/10 dark:border-white/5 rounded-full"></div>
              <img
                src="/lovable-uploads/578738b3-02c0-4935-94fc-7b3aea92c52f.png"
                alt="Profile"
                className="object-cover w-full h-full scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-blue-500/10 dark:from-blue-500/0 dark:via-blue-500/0 dark:to-blue-500/20 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
