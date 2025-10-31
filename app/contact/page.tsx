import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Linkedin, Github } from "lucide-react";

export const metadata = {
  title: "Contact | Ethan Serville",
  description: "Contactez-moi pour discuter de vos projets ou opportunités",
};

// ======
// STYLES
// ======

const styles = {
  // Conteneur principal
  container:
    "min-h-screen bg-gradient-to-b from-white to-brand-muted/20 dark:from-gray-900 dark:to-gray-800",

  // Section Hero
  heroSection: "py-20 px-4",
  heroContainer: "container mx-auto max-w-6xl",
  heroContent: "space-y-4",
  title:
    "text-5xl md:text-6xl font-light tracking-tight text-brand-text dark:text-gray-100",
  divider: "w-20 h-1 bg-brand-primary rounded-full",
  description:
    "text-xl text-brand-text/70 max-w-2xl font-light dark:text-gray-300",

  // Section Contact
  contactSection: "pb-20 px-4",
  contactContainer: "container mx-auto max-w-6xl",
  contactGrid: "grid lg:grid-cols-2 gap-12",

  // Infos de contact
  infoContainer: "space-y-8",
  infoTitle: "text-2xl font-light text-brand-text mb-6 dark:text-gray-100",
  infoList: "space-y-6",

  // Item de contact
  contactItem: "flex items-start gap-4 group",
  iconBox:
    "p-3 bg-brand-primary/10 rounded-lg group-hover:bg-brand-primary/20 transition-colors dark:bg-teal-900/30 dark:group-hover:bg-teal-900/40",
  icon: "text-brand-primary dark:text-teal-400",
  itemTitle: "font-medium text-brand-text mb-1 dark:text-gray-200",
  itemLink:
    "text-brand-text/70 hover:text-brand-primary transition-colors dark:text-gray-300 dark:hover:text-teal-400",
  itemText: "text-brand-text/70 dark:text-gray-300",

  // Carte de disponibilité
  availabilityCard:
    "bg-brand-primary/5 p-6 rounded-lg border border-brand-primary/10 dark:bg-gray-800/50 dark:border-gray-700",
  availabilityTitle: "font-medium text-brand-text mb-2 dark:text-gray-200",
  availabilityText: "text-brand-text/70 text-sm dark:text-gray-300",

  // Formulaire
  formContainer:
    "bg-white p-8 rounded-lg shadow-sm border border-brand-muted/30 dark:bg-gray-900/50 dark:border-gray-700 dark:shadow-none",
  formTitle: "text-2xl font-light text-brand-text mb-6 dark:text-gray-100",
};

export default function ContactPage() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Contact</h1>
            <div className={styles.divider} />
            <p className={styles.description}>
              Proposition de votre projet, et offre de stage. Je suis ouvert à
              toute discussion.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactGrid}>
            {/* Contact Info */}
            <div className={styles.infoContainer}>
              <div>
                <h2 className={styles.infoTitle}>Informations de contact</h2>
                <div className={styles.infoList}>
                  {/* Email */}
                  <div className={styles.contactItem}>
                    <div className={styles.iconBox}>
                      <Mail className={styles.icon} size={24} />
                    </div>
                    <div>
                      <h3 className={styles.itemTitle}>Email</h3>
                      <a
                        href="mailto:ethanserville@gmail.com"
                        className={styles.itemLink}
                      >
                        ethanserville@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className={styles.contactItem}>
                    <div className={styles.iconBox}>
                      <MapPin className={styles.icon} size={24} />
                    </div>
                    <div>
                      <h3 className={styles.itemTitle}>Localisation</h3>
                      <p className={styles.itemText}>Reims, France</p>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className={styles.contactItem}>
                    <div className={styles.iconBox}>
                      <Linkedin className={styles.icon} size={24} />
                    </div>
                    <div>
                      <h3 className={styles.itemTitle}>LinkedIn</h3>
                      <a
                        href="https://linkedin.com/ethan-serville"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.itemLink}
                      >
                        Ethan Serville
                      </a>
                    </div>
                  </div>

                  {/* GitHub */}
                  <div className={styles.contactItem}>
                    <div className={styles.iconBox}>
                      <Github className={styles.icon} size={24} />
                    </div>
                    <div>
                      <h3 className={styles.itemTitle}>GitHub</h3>
                      <a
                        href="https://github.com/EthanS0107"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.itemLink}
                      >
                        EthanS0107
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className={styles.availabilityCard}>
                <h3 className={styles.availabilityTitle}>Disponibilité</h3>
                <p className={styles.availabilityText}>
                  Actuellement en recherche de stage dans le développement (web,
                  application et logiciel) à partir du 7 avril pour une durée de
                  8 à 12 semaines.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className={styles.formContainer}>
              <h2 className={styles.formTitle}>Envoyez-moi un message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
