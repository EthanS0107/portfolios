"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="py-20 bg-brand-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-brand-text mb-12 text-center">
            Contact
          </h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-brand-text mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-brand-surface text-brand-text rounded-lg border border-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
                placeholder="Votre nom"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-brand-text mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-brand-surface text-brand-text rounded-lg border border-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
                placeholder="votre@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-brand-text mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 bg-brand-surface text-brand-text rounded-lg border border-brand-muted focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
                placeholder="Votre message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-brand-primary text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity"
            >
              Envoyer
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
