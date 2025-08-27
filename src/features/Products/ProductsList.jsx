import ProductItem from "./ProductItem";
import styles from "./ProductsList.module.scss";

export default function ProductsList({ list, layout = "grid" }) {
  return (
    <ul className={`${styles.ProductsList} ${styles[layout]}`}>
      {list.map((item) => (
        <li key={item.id}>
          <ProductItem item={item} layout={layout} />
        </li>
      ))}
    </ul>
  );
}
