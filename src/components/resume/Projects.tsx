
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Shield, Activity, Terminal, Lock } from "lucide-react";
import { useEffect, useState } from "react";

type Project = {
  title: string;
  description: string;
  technologies: string[];
  type: "security" | "network" | "research";
  theme: "red" | "blue"; // Added red/blue team theme
  codeLink?: string;
};

const projectsData: Project[] = [
  {
    title: "Nmap Vulnerability Scan",
    description: "Active network scanning implementation using Nmap to identify open ports, services, and OS details for target machines. Generated comprehensive vulnerability reports.",
    technologies: ["Kali Linux", "Nmap", "Network Security"],
    type: "network",
    theme: "red", // Offensive security - red team
    codeLink: "https://github.com/Mohithvasamsetti5666/Nmap-Vulnerability-Scan"
  },
  {
    title: "Splunk Wi-Fi Network Monitor",
    description: "Developed a Wi-Fi network traffic monitoring pipeline using Splunk to track connected devices, visualize network patterns, and detect unauthorized access attempts.",
    technologies: ["Splunk Enterprise", "Network Monitoring", "Security Analytics"],
    type: "network",
    theme: "blue", // Defensive security - blue team
    codeLink: "https://github.com/Mohithvasamsetti5666/Splunk-wifi-network-monitor"
  },
  {
    title: "Burp Suite DVWA Pentest",
    description: "Conducted comprehensive vulnerability testing using Burp Suite to identify and exploit XSS, SQLi, and authentication flaws in web applications.",
    technologies: ["Burp Suite", "OWASP", "Web Security"],
    type: "security",
    theme: "red", // Offensive security - red team
    codeLink: "https://github.com/Mohithvasamsetti5666/burp-suite-dvwa-pentest"
  },
  {
    title: "Splunk SOC Monitor",
    description: "Built a centralized SOC dashboard for real-time monitoring of system events, login anomalies, and threat indicators with MITRE ATT&CK mapping.",
    technologies: ["Splunk", "SIEM", "Threat Detection"],
    type: "network",
    theme: "blue", // Defensive security - blue team
    codeLink: "https://github.com/Mohithvasamsetti5666/Splunk-SOC-Monitor"
  },
  {
    title: "Kali-Linux Firewall Hardening",
    description: "Designed and implemented firewall rules using iptables and UFW to restrict unauthorized access and harden system defenses and tested rule effectiveness.",
    technologies: ["Kali Linux", "UFW" , "Nmap", "scrot", "rsyslog", "VirtualBox"],
    type: "security",
    theme: "blue", // Defensive security - blue team
    codeLink: "https://github.com/Mohithvasamsetti5666/kali-linux-firewall"
  },
  {
    title: "Reconnaissance & Scanning Lab",
    description: "Performed active and passive reconnaissance using tools like whois, nslookup, theHarvester, and Nmap to map targets.",
    technologies: ["nmap", "theHarvester", "scrot", "firefox"],
    type: "security",
    theme: "red", // Offensive security - red team
    codeLink: "https://github.com/Mohithvasamsetti5666/recon-scanning-lab"
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsInView(true);
      }
    }, { threshold: 0.3 });
    
    const section = document.getElementById('projects');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section id="projects" className={`py-20 bg-gray-100/90 dark:bg-gray-950/90 backdrop-blur relative ${isInView ? 'in-view' : ''}`}>
      <div className="absolute inset-0 bg-[url('/photo-1526738549149-8e07eca6c147')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/80 to-gray-200/80 dark:from-gray-950/80 dark:to-gray-900/80" />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-blue-400 animate-fade-in glow-text">
          Notable Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden flex flex-col animate-fade-in 
                ${project.theme === 'red' 
                  ? 'bg-white/80 dark:bg-gray-800/50 border-red-200 dark:border-red-900/30 hover:shadow-red-200/30 dark:hover:shadow-red-700/20' 
                  : 'bg-white/80 dark:bg-gray-800/50 border-blue-200 dark:border-blue-900/30 hover:shadow-blue-200/30 dark:hover:shadow-blue-700/20'} 
                backdrop-blur hover:bg-white/90 dark:hover:bg-gray-800/70 transition-all duration-300 hover:shadow-lg`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`h-1 w-full ${project.theme === 'red' ? 'bg-gradient-to-r from-red-400 to-red-600 dark:from-red-500 dark:to-red-700' : 'bg-gradient-to-r from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700'}`}></div>
              
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  {project.type === "security" && (
                    <div className="h-8 w-8 flex items-center justify-center">
                      {project.theme === 'red' ? (
                        <div className={`${hoveredIndex === index ? 'animate-pulse' : ''} bg-red-100 dark:bg-red-900/30 p-1.5 rounded-full`}>
                          <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
                        </div>
                      ) : (
                        <div className={`${hoveredIndex === index ? 'animate-pulse' : ''} bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full`}>
                          <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      )}
                    </div>
                  )}
                  {project.type === "network" && (
                    <div className="h-8 w-8 flex items-center justify-center">
                      {project.theme === 'red' ? (
                        <div className={`${hoveredIndex === index ? 'animate-pulse' : ''} bg-red-100 dark:bg-red-900/30 p-1.5 rounded-full`}>
                          <Activity className="h-5 w-5 text-red-600 dark:text-red-400" />
                        </div>
                      ) : (
                        <div className={`${hoveredIndex === index ? 'animate-pulse' : ''} bg-blue-100 dark:bg-blue-900/30 p-1.5 rounded-full`}>
                          <Activity className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                      )}
                    </div>
                  )}
                  {project.type === "research" && (
                    <div className="h-8 w-8 flex items-center justify-center">
                      {hoveredIndex === index ? (
                        <div className="animate-pulse">
                          <Terminal className="h-6 w-6 text-purple-500 dark:text-purple-400" />
                        </div>
                      ) : (
                        <Terminal className="h-5 w-5 text-purple-500 dark:text-purple-400" />
                      )}
                    </div>
                  )}
                  <h3 className={`text-xl font-bold ${project.theme === 'red' ? 'text-red-700 dark:text-red-400' : 'text-blue-700 dark:text-blue-400'}`}>
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className={`
                        ${project.theme === 'red' 
                          ? 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200/20 dark:border-red-800/20' 
                          : 'bg-blue-50 dark:bg-blue-900/20 text-blue-800 dark:text-blue-200 border border-blue-200/20 dark:border-blue-800/20'} 
                        px-2 py-1 rounded-md text-sm`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.codeLink && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`
                        w-full 
                        ${project.theme === 'red' 
                          ? 'border-red-300/50 dark:border-red-700/50 text-red-700 dark:text-red-400 hover:bg-red-50/20 dark:hover:bg-red-700/20' 
                          : 'border-blue-300/50 dark:border-blue-700/50 text-blue-700 dark:text-blue-400 hover:bg-blue-50/20 dark:hover:bg-blue-700/20'}`} 
                      asChild
                    >
                      <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                        <Code className="h-4 w-4 mr-2" />
                        View Project
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
