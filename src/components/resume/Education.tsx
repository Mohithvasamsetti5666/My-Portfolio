
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Master of Science in Cybersecurity and Information Assurance",
    institution: "University of Central Missouri",
    location: "Lee's Summit, MO",
    graduationDate: "May 2025"
  },
  {
    degree: "Bachelor of Technology in Electrical and Electronics Engineering",
    institution: "DVR & Dr. HS MIC College Of Technology",
    location: "Kanchikacherla, India",
    graduationDate: "May 2023"
  }
];

const certifications = [
  "CompTIA Security+ ce",
  "Getting Started with Cybersecurity (IBM)",
  "Cybersecurity Fundamentals (IBM)",
  "ISC2 Candidate",
  "IT Essentials: PC Hardware & Software (CISCO)"
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gray-100/80 dark:bg-gray-900/30 backdrop-blur">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-blue-400 animate-fade-in glow-text">
          Education & Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-blue-400 mb-6">Education</h3>
            {educationData.map((edu, index) => (
              <Card 
                key={index} 
                className="bg-white/80 dark:bg-gray-800/50 backdrop-blur hover:bg-white/90 dark:hover:bg-gray-800/80 transition-all duration-300 border border-gray-200 dark:border-gray-700"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-500/20 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-blue-400">{edu.degree}</h4>
                      <p className="text-gray-700 dark:text-gray-300 mt-1">{edu.institution}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{edu.location}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">{edu.graduationDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-blue-400 mb-6">Certifications</h3>
            <Card className="bg-white/80 dark:bg-gray-800/50 backdrop-blur hover:bg-white/90 dark:hover:bg-gray-800/80 transition-all duration-300 border border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-blue-600 dark:bg-blue-400"></div>
                      <span className="text-gray-700 dark:text-gray-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
