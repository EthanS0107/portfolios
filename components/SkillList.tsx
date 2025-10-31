// ======
// STYLES
// ======

const styles = {
  list: "flex flex-wrap gap-2",
  item: "text-sm px-3 py-1 border rounded",
};

export default function SkillList({ skills }: { skills: string[] }) {
  return (
    <ul className={styles.list}>
      {skills.map((s) => (
        <li key={s} className={styles.item}>
          {s}
        </li>
      ))}
    </ul>
  );
}
