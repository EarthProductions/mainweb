
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Mail, Calendar, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Cloud,
      title: "Cloud Opslag",
      description: "Onbeperkte ruimte voor al je bestanden. Upload, sync en deel je documenten veilig in de cloud.",
      features: ["Onbeperkte opslag", "Bestanden delen"]
    },
    {
      icon: Mail,
      title: "Mail Services",
      description: "Professionele e-mail services verbonden met IMAP, POP & SMTP. Betrouwbaar en spam-vrij.",
      features: ["IMAP/POP3/SMTP support", "Spam bescherming", "Webmail interface"]
    },
    {
      icon: Calendar,
      title: "Kalender Services",
      description: "Plan en organiseer je afspraken met onze geïntegreerde kalender functionaliteit.",
      features: ["Afspraken beheer", "Gedeelde kalenders", "Notificaties", "Synchronisatie"]
    },
    {
      icon: Globe,
      title: "Web Interface",
      description: "Toegang tot al je services via een gebruiksvriendelijke web interface.",
      features: ["Responsive design", "Cross-platform", "Real-time updates", "Gebruiksvriendelijk"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Onze Diensten</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Alles wat je nodig hebt voor cloud opslag en communicatie, 
            gebundeld in één krachtig platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <service.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
