// ======
// STYLES
// ======

const styles = {
  // Conteneur du footer
  footer:
    "border-t border-brand-muted mt-12 bg-brand-surface dark:bg-gray-900 dark:border-gray-700",

  // Texte du copyright
  text: "container py-6 text-center text-sm text-brand-text/70 dark:text-gray-400",
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.text}>
        © {new Date().getFullYear()} — Portfolio étudiant
      </div>
    </footer>
  );
}
