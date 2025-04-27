
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const skillsData = [
  {
    name: "Technical Skills",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java (OOP)", level: 85 },
      { name: "SQL", level: 85 },
      { name: "Splunk", level: 90 },
      { name: "Wireshark", level: 85 },
      { name: "Kali Linux", level: 88 },
    ]
  },
  {
    name: "Frameworks & Tools",
    skills: [
      { name: "MITRE ATT&CK", level: 85 },
      { name: "NIST SP 800-53", level: 90 },
      { name: "ISO 27001", level: 85 },
      { name: "HIPAA", level: 80 },
    ]
  }
];

const coreSkills = [
  { name: "Incident Response", type: "defense" },
  { name: "Threat Hunting", type: "defense" },
  { name: "Security Awareness", type: "both" },
  { name: "GRC", type: "defense" },
  { name: "Vulnerability Assessment", type: "offense" },
  { name: "Policy Development", type: "defense" },
  { name: "Risk Management", type: "defense" },
  { name: "Endpoint Security", type: "defense" },
  { name: "Network Security", type: "defense" },
  { name: "Cloud Security", type: "both" },
  { name: "Encryption & Data Protection", type: "both" },
  { name: "Security Awareness Training", type: "defense" }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-[url('/photo-1518770660439-4636190af475')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-900" />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700 dark:text-blue-400 animate-fade-in glow-text">
          Skills & Expertise
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {skillsData.map((category, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
              <h3 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-400 relative inline-block">
                {category.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </h3>
              <div className="grid gap-6">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="space-y-2 group" 
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-800 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 transition-all duration-1000"
                        style={{ 
                          width: hoveredSkill === skill.name ? `${skill.level}%` : '0%',
                          transitionDelay: hoveredSkill === skill.name ? '0ms' : `${i * 100}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-400">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill, i) => (
                <Badge 
                  key={i} 
                  className={`px-3 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105
                    ${skill.type === 'offense' 
                      ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-800/40' 
                      : skill.type === 'defense'
                        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800/40'
                        : 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-800/40'}`}
                >
                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
