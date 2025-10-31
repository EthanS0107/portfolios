import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export const metadata = {
  title: "Contact | Ethan Serville",
  description: "Contactez-moi pour discuter de vos projets ou opportunités",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-brand-muted/20 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-brand-text dark:text-gray-100">
              Contact
            </h1>
            <div className="w-20 h-1 bg-brand-primary rounded-full" />
            <p className="text-xl text-brand-text/70 max-w-2xl font-light dark:text-gray-300">
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
                <h2 className="text-2xl font-light text-brand-text mb-6 dark:text-gray-100">
                  Informations de contact
                </h2>
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors dark:bg-teal-900/30 dark:group-hover:bg-teal-900/40">
                      <Mail
                        className="text-brand-primary dark:text-teal-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-text mb-1 dark:text-gray-200">
                        Email
                      </h3>
                      <a
                        href="mailto:ethan.serville@example.com"
                        className="text-brand-text/70 hover:text-brand-primary transition-colors dark:text-gray-300 dark:hover:text-teal-400"
                      >
                        ethanserville@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors dark:bg-teal-900/30 dark:group-hover:bg-teal-900/40">
                      <MapPin
                        className="text-brand-primary dark:text-teal-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-text mb-1 dark:text-gray-200">
                        Localisation
                      </h3>
                      <p className="text-brand-text/70 dark:text-gray-300">
                        Reims, France
                      </p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors dark:bg-teal-900/30 dark:group-hover:bg-teal-900/40">
                      <Linkedin
                        className="text-brand-primary dark:text-teal-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-text mb-1 dark:text-gray-200">
                        LinkedIn
                      </h3>
                      <a
                        href="https://linkedin.com/ethan-serville"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-text/70 hover:text-brand-primary transition-colors dark:text-gray-300 dark:hover:text-teal-400"
                      >
                        Ethan Serville
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors dark:bg-teal-900/30 dark:group-hover:bg-teal-900/40">
                      <Github
                        className="text-brand-primary dark:text-teal-400"
                        size={24}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-brand-text mb-1 dark:text-gray-200">
                        GitHub
                      </h3>
                      <a
                        href="https://github.com/EthanS0107"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-text/70 hover:text-brand-primary transition-colors dark:text-gray-300 dark:hover:text-teal-400"
                      >
                        EthanS0107
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-brand-primary/5 p-6 rounded-lg border border-brand-primary/10 dark:bg-gray-800/50 dark:border-gray-700">
                <h3 className="font-medium text-brand-text mb-2 dark:text-gray-200">
                  Disponibilité
                </h3>
                <p className="text-brand-text/70 text-sm dark:text-gray-300">
                  Actuellement disponible pour des missions freelance et des
                  opportunités en CDI. Temps de réponse habituel : 24-48h.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-sm border border-brand-muted/30 dark:bg-gray-900/50 dark:border-gray-700 dark:shadow-none">
              <h2 className="text-2xl font-light text-brand-text mb-6 dark:text-gray-100">
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
