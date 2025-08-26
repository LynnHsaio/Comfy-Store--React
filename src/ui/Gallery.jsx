import styles from "./Gallery.module.scss";
const images = import.meta.glob("../assets/gallery/*.webp", { eager: true });

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      {Object.values(images).map((img, i) => (
        <img key={i} src={img.default} alt={`gallery-${i}`} />
      ))}
    </div>
  );
}
