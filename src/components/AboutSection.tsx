import { GraduationCap, Briefcase, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function AboutSection() {
  const sectionRef = useScrollAnimation();
  
  return (
    <section ref={sectionRef} id="about" className="section bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="h-1 w-20 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <div className="prose prose-lg max-w-none">
                <p className="mb-4">
                  Hello! I'm Muhammad Shahbaz, a passionate web developer with a love for creating 
                  innovative and user-friendly digital experiences. 
                </p>
                <p className="mb-6">
                  With 5 years of experience in the field, I specialize in 
                  building full-stack applications using modern technologies like 
                  React, TypeScript, Node.js, and more.
                </p>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 rounded-full bg-gradient-primary text-white">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">Education</h3>
                      <p className="text-muted-foreground">BSc in Computer Science, University of Technology</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-3 rounded-full bg-gradient-primary text-white">
                      <Briefcase size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">Experience</h3>
                      <p className="text-muted-foreground">5 years of professional development experience</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-3 rounded-full bg-gradient-primary text-white">
                      <User size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold">Interests</h3>
                      <p className="text-muted-foreground">UI Design, Open Source, Web Accessibility</p>
                    </div>
                  </div>
                </div>
                
                <a href="#contact" className="btn-gradient inline-block">
                  Contact Me
                </a>
              </div>
            </div>
            
            <div className="order-1 md:order-2 animate-scale-in">
              <div className="relative rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-primary rounded-lg opacity-10 absolute inset-0"></div>
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Developer working on code"
                  className="rounded-lg relative z-10 object-cover w-full h-full mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 to-pink-600/30 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
