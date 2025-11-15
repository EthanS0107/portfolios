"use client";
import { useState } from "react";
import { Send } from "lucide-react";

// ======
// STYLES
// ======

const styles = {
  // Formulaire principal
  form: "space-y-6",

  // Message de succès
  success:
    "p-4 bg-brand-success/50 border border-brand-success/30 rounded-lg text-brand-success/800 text-sm",

  // Label des champs
  label: "block text-sm font-medium text-brand-text mb-2",

  // Champs input et textarea
  input:
    "w-full rounded-lg border border-brand-muted/50 px-4 py-3 bg-brand-surface text-brand-text \
    focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all",

  // Textarea spécifique
  textarea:
    "w-full rounded-lg border border-brand-muted/50 px-4 py-3 bg-brand-surface text-brand-text \
    focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary \
    transition-all",

  // Bouton d'envoi
  button:
    "w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 \
    text-white font-medium hover:bg-brand-primary/90 focus:outline-none focus:ring-2 \
    focus:ring-brand-primary/30 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group",

  // Spinner de chargement
  spinner:
    "w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin",

  // Icône Send avec animation
  sendIcon: "group-hover:translate-x-1 transition-transform",

  // Note en bas du formulaire
  note: "text-xs text-brand-text/50 text-center",
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // Added dark classes for inputs
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");

      // Reset le message de succès après 5 secondes
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {/* Success Message */}
      {submitted && (
        <div className={styles.success}>
          ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
        </div>
      )}

      {/* Name Field */}
      <div>
        <label htmlFor="name" className={styles.label}>
          Nom complet *
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.input}
          placeholder="Ex : Jean Martin"
        />
      </div>

      {/* Email Field */}
      <div>
        <label htmlFor="email" className={styles.label}>
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          placeholder="Ex : jean.martin@example.com"
        />
      </div>

      {/* Message Field */}
      <div>
        <label htmlFor="message" className={styles.label}>
          Message *
        </label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.textarea}
          rows={6}
          placeholder="Ex : Bonjour, ..."
        />
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting} className={styles.button}>
        {isSubmitting ? (
          <>
            <div className={styles.spinner} />
            <span>Envoi en cours...</span>
          </>
        ) : (
          <>
            <span>Envoyer le message</span>
            <Send size={18} className={styles.sendIcon} />
          </>
        )}
      </button>

      <p className={styles.note}>* Champs obligatoires</p>
    </form>
  );
}
