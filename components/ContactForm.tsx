"use client";
import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // placeholder: integrate with email service or API
    alert(`Merci ${name} — message envoyé (simulation).`);
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg text-brand-text">
      <label className="block">
        <span className="text-sm">Nom</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full rounded border border-brand-muted px-3 py-2 bg-brand-surface text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
        />
      </label>
      <label className="block mt-3">
        <span className="text-sm">Email</span>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="mt-1 block w-full rounded border border-brand-muted px-3 py-2 bg-brand-surface text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
        />
      </label>
      <label className="block mt-3">
        <span className="text-sm">Message</span>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 block w-full rounded border border-brand-muted px-3 py-2 bg-brand-surface text-brand-text focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary"
          rows={5}
        />
      </label>
      <button
        type="submit"
        className="mt-4 inline-flex items-center rounded bg-brand-primary px-4 py-2 text-white hover:opacity-90"
      >
        Envoyer
      </button>
    </form>
  );
}
