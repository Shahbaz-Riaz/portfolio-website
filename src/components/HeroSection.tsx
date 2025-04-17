import { ArrowDown } from "lucide-react";
export function HeroSection() {
  return <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-2/3 h-2/3 rounded-full bg-purple-400/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-pink-400/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Muhammad Shahbaz</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 text-foreground/80">
            Full Stack Web Developer
          </p>
          <p className="max-w-2xl text-lg mb-10 text-muted-foreground">
            I craft responsive websites where technology meets creativity. 
            Building beautiful web experiences with modern technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="btn-gradient">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 font-medium text-foreground rounded-md border border-border hover:bg-secondary transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm mb-2 text-foreground/70">Scroll Down</span>
          <ArrowDown size={20} className="text-foreground/70" />
        </div>
      </div>
    </section>;
}