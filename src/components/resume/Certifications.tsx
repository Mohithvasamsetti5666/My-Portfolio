import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, CheckCircle } from "lucide-react";
import MatrixRain from "../matrix-rain";

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative bg-gray-50/70 dark:bg-gray-900/50 backdrop-blur">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-transparent to-red-900/5 dark:from-blue-900/10 dark:via-transparent dark:to-red-900/10" />
            
      <div className="container relative mx-auto px-4 md:px-6 z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-blue-400 animate-fade-in glow-text">
          Professional Certifications
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="animate-fade-in bg-white/80 dark:bg-gray-800/50 backdrop-blur border border-gray-200 dark:border-blue-900/30 hover:bg-white/90 dark:hover:bg-gray-800/70 transition-all duration-300">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="relative w-48 h-48 transition-transform duration-300 hover:scale-105 cursor-pointer mb-6 group">
                <a 
                  href="https://www.credly.com/badges/5ad262e7-7b78-4307-ac31-ba810b98b077" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <div className="absolute inset-0 rounded-full bg-red-500/20 filter blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-glow"></div>
                  <img 
                    src="/lovable-uploads/f05cf2cb-8929-4a8d-be7f-17cb8acd4663.png" 
                    alt="CompTIA Security+" 
                    className="w-full h-full object-contain relative z-10"
                  />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-blue-400 mb-2">CompTIA Security+</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-4">Certified security professional with expertise in risk management, cryptography, and network security.</p>
              
              <div className="flex items-center text-blue-600 dark:text-blue-300">
                <Shield className="mr-2 h-4 w-4" />
                <a 
                  href="https://www.credly.com/badges/5ad262e7-7b78-4307-ac31-ba810b98b077" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  Verify Credential
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in bg-white/80 dark:bg-gray-800/50 backdrop-blur border border-gray-200 dark:border-blue-900/30 hover:bg-white/90 dark:hover:bg-gray-800/70 transition-all duration-300" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="relative w-48 h-48 transition-transform duration-300 hover:scale-105 cursor-pointer mb-6 group">
                <a 
                  href="https://www.credly.com/badges/123cc5c0-d996-45bb-a432-f9f42b2e6268" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative"
                >
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 filter blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-glow"></div>
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center p-8 border-4 border-gray-200 dark:border-gray-700">
                    <img 
                      src="/lovable-uploads/f3b7e4d2-23da-4e4a-b549-9091f81d014c.png"
                      alt="IBM Cybersecurity" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-blue-400 mb-2">IBM Cybersecurity</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-4">Trained in cybersecurity fundamentals with expertise in IBM security protocols and best practices.</p>
              
              <div className="flex items-center text-blue-600 dark:text-blue-300">
                <Award className="mr-2 h-4 w-4" />
                <a 
                  href="https://www.credly.com/badges/123cc5c0-d996-45bb-a432-f9f42b2e6268" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:underline"
                >
                  Verify Credential
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="animate-fade-in bg-white/80 dark:bg-gray-800/50 backdrop-blur border border-gray-200 dark:border-blue-900/30 hover:bg-white/90 dark:hover:bg-gray-800/70 transition-all duration-300" style={{ animationDelay: "0.3s" }}>
            <CardContent className="p-6 flex flex-col items-center">
              <div className="w-48 h-48 relative mb-6 flex items-center justify-center group">
                <div className="rounded-full bg-gray-100 dark:bg-blue-500/10 p-10 border border-gray-300 dark:border-blue-500/30 relative">
                  <div className="absolute inset-0 rounded-full bg-blue-500/20 dark:bg-blue-500/40 filter blur-lg opacity-0 group-hover:opacity-70 transition-opacity duration-700 animate-pulse-glow"></div>
                  <Shield className="h-24 w-24 text-gray-800 dark:text-blue-400 relative z-10" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-blue-400 mb-2">ISC² Candidate</h3>
              <p className="text-gray-700 dark:text-gray-300 text-center mb-4">Actively pursuing advanced cybersecurity certifications from the globally recognized ISC² organization.</p>
              
              <div className="flex items-center text-blue-600 dark:text-blue-300">
                <CheckCircle className="mr-2 h-4 w-4" />
                <span className="text-sm">In Progress</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
