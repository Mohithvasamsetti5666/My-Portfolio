
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

const experienceData: ExperienceItem[] = [
  {
    title: "Cybersecurity Analyst",
    company: "Nexa Vertex",
    location: "Overland Park, KS",
    period: "Jan 2025 - Present",
    description: [
      "Developed automated Python scripts for encryption standards, access controls, and audit logs compliance",
      "Enhanced SIEM log analysis pipelines using Splunk and ELK Stack for real-time threat detection",
      "Implemented secure CI/CD pipelines with static code analysis and container image scanning",
      "Built dynamic Splunk dashboards for threat monitoring and SOC operations support",
      "Managed endpoint protection and data encryption solutions across application environments"
    ]
  },
  {
    title: "Security Analyst Intern",
    company: "Security Brigade",
    location: "Mumbai, India",
    period: "Jan 2022 - July 2023",
    description: [
      "Monitored network and endpoint activity using Splunk SIEM for real-time threat detection",
      "Conducted packet capture analysis with Wireshark to identify security anomalies",
      "Executed threat hunting using IOCs and MITRE ATT&CK framework",
      "Performed vulnerability assessments using Kali Linux tools",
      "Contributed to security awareness campaigns and compliance tracking"
    ]
  },
  {
    title: "Electrical Intern",
    company: "AP Genco",
    location: "Vijayawada, India",
    period: "May 2019 - Nov 2019",
    description: [
      "Studied thermal power plant operations and grid transmission protocols",
      "Monitored turbine, generator, and boiler systems for stable electricity output",
      "Analyzed schematic diagrams and SCADA dashboards for system responses",
      "Documented load distribution patterns and performance metrics",
      "Prepared technical reports on energy dispatch and monitoring systems"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-100/80 dark:bg-gray-950/80 backdrop-blur relative">
      <div className="absolute inset-0 bg-[url('/photo-1510511233900-1982d92bd835')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-100/90 to-gray-200/90 dark:from-gray-950/90 dark:to-gray-900/90" />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-blue-400 animate-fade-in glow-text">
          Professional Experience
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((experience, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-l-4 border-blue-500 bg-white/80 dark:bg-gray-800/50 backdrop-blur animate-fade-in hover:bg-white/90 dark:hover:bg-gray-800/80 transition-all duration-300 border-t border-r border-b border-gray-200 dark:border-gray-700"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-500/20 p-2 rounded-full w-12 h-12 flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">{experience.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{experience.company} - {experience.location}</p>
                  </div>
                  <div className="md:text-right flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                    <span className="text-gray-500 dark:text-gray-400">{experience.period}</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                  {experience.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
