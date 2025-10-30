export default function Footer() {
  return (
    <footer className="border-t border-brand-muted mt-12 bg-brand-surface">
      <div className="container py-6 text-center text-sm text-brand-text/70">
        © {new Date().getFullYear()} — Portfolio étudiant
      </div>
    </footer>
  );
}
