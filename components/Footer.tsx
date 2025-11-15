// ======
// STYLES
// ======

const styles = {
  // Conteneur du footer
  footer:
    "border-t border-brand-muted mt-12 bg-brand-surface border-brand-muted/100",

  // Texte du copyright
  text: "container py-6 text-center text-sm text-brand-text/70",
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
