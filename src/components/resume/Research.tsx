
import { Card, CardContent } from "@/components/ui/card";
import { Terminal, Shield, Brain, Lock, FileCode } from "lucide-react";

const researchData = [
  {
    title: "Incident Response (IR) Framework Development",
    institution: "UCM",
    icon: Shield,
    theme: "blue", // Defensive security
    points: [
      "Built a scalable IR framework integrating NIST-aligned procedures and real-world use cases to strengthen detection and response.",
      "Applied RACI mapping to enhance communication flow and accountability across cross-functional IRT stakeholders."
    ]
  },
  {
    title: "AI in Cybersecurity",
    institution: "UCM",
    icon: Brain,
    theme: "neutral", // Both
    points: [
      "Researched and analyzed AI-driven platforms like Darktrace and Cylance to explore their predictive and threat detection capabilities.",
      "Proposed automation workflows and AI-enhanced incident response mechanisms to mitigate sophisticated threats in real time."
    ]
  },
  {
    title: "Security Policy Implementation & Compliance",
    institution: "UCM",
    icon: Lock,
    theme: "blue", // Defensive security
    points: [
      "Developed HIPAA-compliant incident response plans, centralized logging protocols, and risk-based BYOD security policies.",
      "Implemented NIST SP 800-53 controls with ISO 27001 alignment for robust information security governance."
    ]
  },
  {
    title: "Social Engineering Tactics & Defense",
    institution: "UCM",
    icon: Terminal,
    theme: "red", // Offensive security
    points: [
      "Explored real-world phishing, baiting, and pretexting scenarios to model behavioural manipulation techniques and exploitation paths.",
      "Recommended layered defense mechanisms including employee training, multi-factor authentication, and strict verification protocols."
    ]
  },
  {
    title: "Deep Neural Networks for Object Detection",
    institution: "UCM",
    icon: FileCode,
    theme: "neutral", // Both
    points: [
      "Built and tested deep neural network models for real-time object detection using bounding box regression on Pascal VOC dataset.",
      "Assessed performance trade-offs in real-time inference systems and proposed computational optimization strategies."
    ]
  }
];

const Research = () => {
  return (
    <section id="research" className="py-20 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-700 dark:text-blue-400 animate-fade-in glow-text">
          Research Work
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {researchData.map((research, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden border-l-4 
                ${research.theme === 'red' 
                  ? 'border-red-500 dark:border-red-600' 
                  : research.theme === 'blue'
                    ? 'border-blue-500 dark:border-blue-600'
                    : 'border-purple-500 dark:border-purple-600'} 
                bg-white/70 dark:bg-gray-800/50 backdrop-blur animate-fade-in hover:bg-white/90 dark:hover:bg-gray-800/80 transition-all duration-300 group`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className={`
                    ${research.theme === 'red' 
                      ? 'bg-red-100/70 dark:bg-red-500/20' 
                      : research.theme === 'blue'
                        ? 'bg-blue-100/70 dark:bg-blue-500/20'
                        : 'bg-purple-100/70 dark:bg-purple-500/20'} 
                    p-3 rounded-full group-hover:scale-110 transition-transform duration-300`}>
                    <research.icon className={`h-6 w-6 
                      ${research.theme === 'red' 
                        ? 'text-red-600 dark:text-red-400' 
                        : research.theme === 'blue'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-purple-600 dark:text-purple-400'}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 relative inline-block
                      ${research.theme === 'red' 
                        ? 'text-red-600 dark:text-red-400' 
                        : research.theme === 'blue'
                          ? 'text-blue-600 dark:text-blue-400'
                          : 'text-purple-600 dark:text-purple-400'}`}>
                      {research.title}
                      <span className={`absolute -bottom-1 left-0 w-0 h-0.5 
                        ${research.theme === 'red' 
                          ? 'bg-red-500 dark:bg-red-400' 
                          : research.theme === 'blue'
                            ? 'bg-blue-500 dark:bg-blue-400'
                            : 'bg-purple-500 dark:bg-purple-400'} 
                        group-hover:w-full transition-all duration-300`}></span>
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">{research.institution}</p>
                    <ul className="list-disc pl-5 space-y-2">
                      {research.points.map((point, i) => (
                        <li key={i} className="text-gray-700 dark:text-gray-300">{point}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
