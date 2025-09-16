import useFilteredProducts from "./useFilteredProducts";
import ProductsList from "./ProductsList";
import Pagination from "../../ui/Pagination";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";
import styles from "./ProductsSection.module.scss";

export default function ProductsSection() {
  const { isLoading, data } = useFilteredProducts();
  const [layout, setLayout] = useState("grid");

  function getBtnClassName(btn) {
    return layout === btn ? "btn-primary" : "btn-ghost";
  }

  if (isLoading) return <Loading />;

  if (!data?.data.length) return <Empty resourceName="products" />;

  const { total } = data?.meta.pagination || 0;

  return (
    <section className={styles.productsSection}>
      <div className={`${styles.layoutToggle} border-base-300 text-lg`}>
        <span className="">{total} products</span>

        <div className={styles.btns}>
          <button
            className={getBtnClassName("grid")}
            onClick={() => setLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button className={getBtnClassName("list")}>
            <BsList onClick={() => setLayout("list")} />
          </button>
        </div>
      </div>

      <ProductsList list={data?.data} layout={layout} />

      <Pagination pagination={data?.meta.pagination} />
    </section>
  );
}
