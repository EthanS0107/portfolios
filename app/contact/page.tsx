import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export const metadata = {
  title: "Contact | Ethan Serville",
  description: "Contactez-moi pour discuter de vos projets ou opportunités",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-muted/20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-brand-text">
              Contact
            </h1>
            <div className="w-20 h-1 bg-brand-primary rounded-full" />
            <p className="text-xl text-brand-text/70 max-w-2xl font-light">
              Discutons de votre projet. Je suis toujours ouvert à de nouvelles
              opportunités et collaborations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-light text-brand-text mb-6">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                      <Mail className="text-brand-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-text mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:ethan.serville@example.com"
                        className="text-brand-text/70 hover:text-brand-primary transition-colors"
                      >
                        ethan.serville@example.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                      <MapPin className="text-brand-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-text mb-1">
                        Localisation
                      </h3>
                      <p className="text-brand-text/70">Paris, France</p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                      <Linkedin className="text-brand-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-text mb-1">
                        LinkedIn
                      </h3>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-text/70 hover:text-brand-primary transition-colors"
                      >
                        linkedin.com/in/ethan-serville
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors">
                      <Github className="text-brand-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-text mb-1">
                        GitHub
                      </h3>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-text/70 hover:text-brand-primary transition-colors"
                      >
                        github.com/ethan-serville
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-brand-primary/5 p-6 rounded-lg border border-brand-primary/10">
                <h3 className="font-medium text-brand-text mb-2">
                  Disponibilité
                </h3>
                <p className="text-brand-text/70 text-sm">
                  Actuellement disponible pour des missions freelance et des
                  opportunités en CDI. Temps de réponse habituel : 24-48h.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-brand-muted/30">
              <h2 className="text-2xl font-light text-brand-text mb-6">
                Envoyez-moi un message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
