import ProductItem from "./ProductItem";
import styles from "./ProductsList.module.scss";

export default function ProductsList({ list, layout = "grid" }) {
  if (!list || !list.length) return <h5>Sorry, there are no products</h5>;

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
