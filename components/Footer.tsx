export default function Footer() {
  return (
    <footer className="border-t border-brand-muted mt-12 bg-brand-surface dark:bg-gray-900 dark:border-gray-700">
      <div className="container py-6 text-center text-sm text-brand-text/70 dark:text-gray-400">
        © {new Date().getFullYear()} — Portfolio étudiant
      </div>
    </footer>
  );
}
