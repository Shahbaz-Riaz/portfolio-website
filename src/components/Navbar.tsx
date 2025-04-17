
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-xl md:text-2xl font-display font-bold gradient-text">
              DevFolio
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            size="icon" 
            className="md:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-md">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            <a href="#home" className="text-lg font-medium" onClick={toggleMenu}>Home</a>
            <a href="#about" className="text-lg font-medium" onClick={toggleMenu}>About</a>
            <a href="#skills" className="text-lg font-medium" onClick={toggleMenu}>Skills</a>
            <a href="#projects" className="text-lg font-medium" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="text-lg font-medium" onClick={toggleMenu}>Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
