
import { Cloud, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Cloud className="h-8 w-8" />
              <span className="text-2xl font-bold">VentureCloud</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              VentureCloud biedt gratis cloudopslag en mailservices met onbeperkte ruimte. 
              Betrouwbaar, veilig en altijd beschikbaar.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>info@venturecloud.nl</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>+31 (0) 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Nederland</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Cloud Opslag</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Mail Services</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">API Toegang</a></li>
              <li><a href="#services" className="hover:text-primary-foreground transition-colors">Mobiele Apps</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Bedrijf</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#pricing" className="hover:text-primary-foreground transition-colors">Prijzen</a></li>
              <li><a href="#resellers" className="hover:text-primary-foreground transition-colors">Resellers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Voorwaarden</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © 2024 VentureCloud. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
