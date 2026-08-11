import styles from "../page.module.css";

type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({
  title,
}: SectionTitleProps) {
  return (
    <section className={styles.sectionTitle}>
      <h1 className={styles.sectionHeading}>
        {title}
      </h1>
    </section>
  );
}