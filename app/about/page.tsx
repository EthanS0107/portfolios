// ======
// STYLES
// ======

const styles = {
  section: "",
  title: "text-2xl font-semibold",
  text: "mt-4 text-gray-700 dark:text-gray-300",
};

export default function About() {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>À propos de moi</h2>
      <p className={styles.text}>
        Étudiant en BUT informatique | Passionné par le développement web
      </p>
    </section>
  );
}
