
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Terminal, Book } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900/50 backdrop-blur relative">
      <div className="absolute inset-0 bg-[url('/photo-1555949963-ff9fe0c870eb')] bg-cover bg-center opacity-5" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-950/90" />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400 animate-fade-in">
          About Me
        </h2>
        
        <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <Card className="bg-gray-800/50 backdrop-blur border border-blue-900/30">
            <CardContent className="p-6 md:p-8">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Cybersecurity Analyst with hands-on experience in threat monitoring, incident response, vulnerability assessment, and risk management across sectors including non-profits, logistics, healthcare, and professional services. Proficient in tools such as Splunk, Wireshark, and Kali Linux for real-time log analysis, attack detection, and forensic investigations. Demonstrates a strong command of industry frameworks like NIST SP 800-53, ISO 27001, and MITRE ATT&CK, and excels at developing and implementing security policies, GRC practices, and cybersecurity awareness programs. Passionate about leveraging emerging technologies and best practices to fortify enterprise security posture. Known for excellent analytical, documentation, and communication skills, with a commitment to proactive, resilient security operations.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="flex flex-col items-center text-center p-4 bg-gray-800/70 rounded-lg border border-blue-900/20">
                  <Shield className="h-8 w-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-blue-300">Security Expert</h3>
                  <p className="text-sm text-gray-300">Proficient in Splunk, Wireshark, Burp Suite, Kali Linux, Nmap, Metasploit</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-800/70 rounded-lg border border-blue-900/20">
                  <Terminal className="h-8 w-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-blue-300">Technical Skills</h3>
                  <p className="text-sm text-gray-300">Python, Java, SQL, and Security Tools</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 bg-gray-800/70 rounded-lg border border-blue-900/20">
                  <Book className="h-8 w-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-blue-300">Frameworks</h3>
                  <p className="text-sm text-gray-300">MITRE ATT&CK, NIST SP 800-53, ISO 27001, HIPAA</p>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                Master's Graduate in Cybersecurity and Information Assurance at the University of Central Missouri, I am passionate about leveraging emerging technologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
