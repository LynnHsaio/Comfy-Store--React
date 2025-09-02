import styles from "./SectionTitle.module.scss";

export default function SectionTitle({ title }) {
  return (
    <h2 className={`text-3xl border-base-300 ${styles.sectionTitle}`}>
      {title}
    </h2>
  );
}
