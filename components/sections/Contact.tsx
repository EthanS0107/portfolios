"use client";
import { motion } from "framer-motion";

// ======
// STYLES
// ======

const styles = {
  section: "py-20 bg-brand-surface",
  container: "container mx-auto px-4",
  content: "max-w-4xl mx-auto",
  title: "text-4xl font-bold text-brand-text mb-12 text-center",
  form: "space-y-6",
  label: "block text-brand-text mb-2",
  input:
    "w-full px-4 py-2 bg-brand-surface text-brand-text rounded-lg border border-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary",
  textarea:
    "w-full px-4 py-2 bg-brand-surface text-brand-text rounded-lg border border-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary",
  button:
    "w-full bg-brand-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity",
};

export default function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={styles.content}
        >
          <h2 className={styles.title}>Contact</h2>
          <form className={styles.form}>
            <div>
              <label htmlFor="name" className={styles.label}>
                Nom
              </label>
              <input
                type="text"
                id="name"
                className={styles.input}
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className={styles.label}>
                Email
              </label>
              <input
                type="email"
                id="email"
                className={styles.input}
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className={styles.label}>
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className={styles.textarea}
                placeholder="Votre message"
              />
            </div>
            <button type="submit" className={styles.button}>
              Envoyer
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
