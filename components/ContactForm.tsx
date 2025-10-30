"use client";
import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Success Message */}
      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-sm">
          ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
        </div>
      )}

      {/* Name Field */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-brand-text mb-2"
        >
          Nom complet *
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-brand-muted/50 px-4 py-3 bg-brand-surface text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all"
          placeholder="Jean Martin"
        />
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-brand-text mb-2"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-brand-muted/50 px-4 py-3 bg-brand-surface text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all"
          placeholder="jean.martin@example.com"
        />
      </div>

      {/* Message Field */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-text mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-brand-muted/50 px-4 py-3 bg-brand-surface text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary transition-all resize-none"
          rows={6}
          placeholder="Bonjour, ..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-white font-medium hover:bg-brand-primary/90 focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            <span>Envoi en cours...</span>
          </>
        ) : (
          <>
            <span>Envoyer le message</span>
            <Send
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </>
        )}
      </button>

      <p className="text-xs text-brand-text/50 text-center">
        * Champs obligatoires
      </p>
    </form>
  );
}
