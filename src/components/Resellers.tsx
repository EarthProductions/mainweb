
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Shield, Star } from "lucide-react";

const Resellers = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "5% Korting",
      description: "Verdien aan elke verkoop met onze aantrekkelijke kortingen"
    },
    {
      icon: Shield,
      title: "White Label Support",
      description: "Verkoop onder jouw eigen merknaam met volledige ondersteuning"
    },
    {
      icon: Star,
      title: "Prioriteit Ondersteuning",
      description: "Krijg voorrang bij technische support en vragen"
    },
    {
      icon: Users,
      title: "Marketing Materiaal",
      description: "Professionele marketing assets om je verkoop te ondersteunen"
    }
  ];

  return (
    <section id="resellers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm px-3 py-1">
            Partner Programma
          </Badge>
          <h2 className="text-4xl font-bold text-foreground mb-4">Word een VentureCloud Reseller</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sluit je aan bij ons reseller netwerk en verdien geld door VentureCloud producten 
            te verkopen met 5% korting op white label panels en source code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Waarom VentureCloud Reseller worden?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <benefit.icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Reseller Voordelen:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• White Label Panel: €25/maand → €23.75/maand (5% korting)</li>
                <li>• Source Code: €150 → €142.50 (5% korting)</li>
                <li>• Exclusieve reseller ondersteuning</li>
                <li>• Marketing materiaal en training</li>
              </ul>
            </div>
          </div>

          <Card className="h-fit">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Start als Reseller</CardTitle>
              <CardDescription>
                Begin vandaag nog met het verkopen van VentureCloud producten
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Neem contact met ons op via Discord om deel te nemen aan het reseller programma. 
                    We helpen je graag op weg met de benodigde informatie en ondersteuning.
                  </p>
                </div>
                
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={() => window.open('https://discord.gg/dN3fXfMyUB', '_blank')}
                >
                  Word Reseller Partner
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  Join onze Discord community voor meer informatie
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resellers;
