import { NavLink } from "react-router-dom";
import Gallery from "../../ui/Gallery";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.columnLeft}>
        <h1 className="text-6xl">We are changing the way people shop</h1>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>

        <div>
          <NavLink to="/products" className="btn-primary">
            Our Products
          </NavLink>
        </div>
      </div>

      <div className={styles.columnRight}>
        <Gallery />
      </div>
    </section>
  );
}
