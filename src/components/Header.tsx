
import { Button } from "@/components/ui/button";
import { Cloud, LogIn } from "lucide-react";
import { DarkModeToggle } from "./DarkModeToggle";

const Header = () => {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Cloud className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold text-foreground">VentureCloud</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Diensten
          </a>
          <a href="#pricing" className="text-foreground hover:text-primary transition-colors">
            Prijzen
          </a>
          <a href="#resellers" className="text-foreground hover:text-primary transition-colors">
            Resellers
          </a>
          <a 
            href="https://discord.gg/dN3fXfMyUB" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            Discord
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <DarkModeToggle />
          <Button 
            onClick={() => window.open('https://dash.venturecloud.nl/auth', '_blank')}
            className="flex items-center space-x-2"
          >
            <LogIn className="h-4 w-4" />
            <span>Inloggen</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
