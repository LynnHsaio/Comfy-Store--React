import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import styles from "./ProductItem.module.scss";

export default function ProductItem({ item, style = "grid" }) {
  const { image, title, price } = item.attributes;

  return (
    <Link className={`${styles.productItem} ${styles[style]}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{formatCurrency(price)}</p>
    </Link>
  );
}
