import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import styles from "./ProductItem.module.scss";

export default function ProductItem({ item, layout = "grid" }) {
  const { image, title, company, price } = item.attributes;

  return (
    <Link
      to={`/products/${item.id}`}
      className={`${styles.productItem} ${styles[layout]}`}
    >
      <figure>
        <img src={image} alt={title} />
      </figure>
      <div className={styles.textContainer}>
        <div>
          <h3>{title}</h3>
          <h4 className={`${styles.company} text-neutral-content`}>
            {company}
          </h4>
        </div>
        <p className="text-primary">{formatCurrency(price)}</p>
      </div>
    </Link>
  );
}
