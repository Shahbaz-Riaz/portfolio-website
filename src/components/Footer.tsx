import { Heart } from "lucide-react";
export function Footer() {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-display font-bold gradient-text">PORTFOLIO</a>
            <p className="text-sm text-muted-foreground mt-1">
              Showcasing creativity and code.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© {currentYear} John Doe. All rights reserved.</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1 flex items-center">
              Made with <Heart className="h-3 w-3 mx-1 text-pink-500" /> and React
            </p>
          </div>
        </div>
      </div>
    </footer>;
}