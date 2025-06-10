
import { Button } from "@/components/ui/button";
import { Cloud, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/10 py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Onbeperkte Cloud Opslag
            <span className="text-primary"> Gratis</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            VentureCloud biedt gratis cloudopslag en mailservices met onbeperkte ruimte. 
            Geen verborgen kosten, geen beperkingen - gewoon betrouwbare cloud services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              onClick={() => window.open('https://dash.venturecloud.nl/auth', '_blank')}
              className="text-lg px-8 py-3"
            >
              Gratis Beginnen
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lg px-8 py-3"
            >
              Meer Informatie
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="flex flex-col items-center">
              <Cloud className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Onbeperkte Opslag</h3>
              <p className="text-muted-foreground">Geen limiet op je bestanden</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">100% Veilig</h3>
              <p className="text-muted-foreground">Jouw data is bij ons veilig</p>
            </div>
            <div className="flex flex-col items-center">
              <Zap className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Supersnel</h3>
              <p className="text-muted-foreground">Razendsnel uploaden en downloaden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
