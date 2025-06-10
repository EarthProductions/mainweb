
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Gratis",
      price: "€0",
      period: "per maand",
      description: "Perfect voor persoonlijk gebruik",
      badge: "Populair",
      features: [
        "Onbeperkte cloud opslag",
        "Gratis mail services",
        "Basis support",
        "Kalender services",
        "Web interface"
      ],
      buttonText: "Gratis Starten",
      highlighted: true
    },
    {
      name: "White Label",
      price: "€25",
      period: "per maand",
      description: "Voor bedrijven die hun eigen merk willen",
      features: [
        "Alles van Gratis plan",
        "White labeled admin paneel",
        "Custom branding",
        "Prioriteit support",
        "Analytics dashboard"
      ],
      buttonText: "Kies White Label"
    },
    {
      name: "Source Code",
      price: "€150",
      period: "eenmalig",
      description: "Volledige controle over het platform",
      features: [
        "Alles van White Label",
        "Volledige source code",
        "Zelf hosten mogelijk",
        "Aanpassingen toegestaan",
        "Levenslange licentie"
      ],
      buttonText: "Koop Source Code"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Transparante Prijzen</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Begin gratis en upgrade wanneer je meer functionaliteit nodig hebt. 
            Geen verborgen kosten, geen verrassingen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative h-full ${plan.highlighted ? 'border-primary shadow-lg scale-105' : ''}`}
            >
              {plan.badge && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary">
                  {plan.badge}
                </Badge>
              )}
              
              <CardHeader className="text-center pb-6">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>
                <CardDescription className="text-base">{plan.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full" 
                  variant={plan.highlighted ? "default" : "outline"}
                  onClick={() => window.open('mailto:order@venturecloud.nl?subject=Interesse in ' + plan.name + ' plan', '_blank')}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
