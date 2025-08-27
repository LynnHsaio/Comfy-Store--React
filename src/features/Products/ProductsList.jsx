import ProductItem from "./ProductItem";
import styles from "./ProductsList.module.scss";

export default function ProductsList({ list, style = "grid" }) {
  return (
    <ul className={`${styles.ProductsList} ${styles[style]}`}>
      {list.map((item) => (
        <li key={item.id}>
          <ProductItem item={item} />
        </li>
      ))}
    </ul>
  );
}
