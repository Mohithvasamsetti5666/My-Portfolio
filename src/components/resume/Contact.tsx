
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_wxaik07',
        'template_cjigyrk',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: `Portfolio Get In Touch Message: ${formData.subject}`,
          message: formData.message,
          to_email: 'mohithnagaadithya2001@gmail.com',
        },
        'WoWxuRdlwuxOsKLBP'
      );

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Email error:', error);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-red-900/10 dark:from-blue-900/10 dark:via-transparent dark:to-red-900/10" />
      
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-blue-400 animate-fade-in glow-text">
          Get In Touch
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="animate-fade-in bg-white/70 dark:bg-gray-800/50 backdrop-blur border border-gray-200/50 dark:border-blue-900/30 h-full">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-blue-300">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-500/20 p-2.5 rounded-full">
                    <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="text-gray-800 dark:text-gray-300">mohithnagaadithya2001@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-500/20 p-2.5 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="text-gray-800 dark:text-gray-300">+1 (913) 238-8252</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-500/20 p-2.5 rounded-full">
                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/mvasamsetti/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 dark:bg-blue-500/20 p-2.5 rounded-full">
                    <Github className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">GitHub</p>
                    <a href="https://github.com/Mohithvasamsetti5666" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                      GitHub Profile
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in bg-white/70 dark:bg-gray-800/50 backdrop-blur border border-gray-200/50 dark:border-blue-900/30">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 text-gray-800 dark:text-blue-300">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <Input 
                      id="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      className="bg-white/90 dark:bg-gray-800/70 border-blue-200/50 dark:border-blue-900/30 text-gray-800 dark:text-gray-200" 
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <Input 
                      id="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com" 
                      className="bg-white/90 dark:bg-gray-800/70 border-blue-200/50 dark:border-blue-900/30 text-gray-800 dark:text-gray-200" 
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <Input 
                    id="subject" 
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="How can I help you?" 
                    className="bg-white/90 dark:bg-gray-800/70 border-blue-200/50 dark:border-blue-900/30 text-gray-800 dark:text-gray-200" 
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <Textarea 
                    id="message" 
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..." 
                    rows={5} 
                    className="bg-white/90 dark:bg-gray-800/70 border-blue-200/50 dark:border-blue-900/30 text-gray-800 dark:text-gray-200 min-h-[120px]" 
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full mt-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white shadow-lg hover:shadow-blue-700/40 dark:shadow-blue-500/30 dark:hover:shadow-blue-500/50 transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
