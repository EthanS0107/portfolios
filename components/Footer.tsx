// ======
// STYLES
// ======

const styles = {
  // Conteneur du footer
  footer: "border-t border-danger/700 mt-12 bg-blackbrand/95",

  // Texte du copyright
  text: "container py-6 text-center text-sm text-brand-text/60",
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
