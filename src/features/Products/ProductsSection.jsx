import useFilteredProducts from "./useFilteredProducts";
import ProductsList from "./ProductsList";
import Pagination from "../../ui/Pagination";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

export default function ProductsTable() {
  const { isLoading, data } = useFilteredProducts();
  const [layout, setLayout] = useState("grid");

  if (isLoading) return <div>Loading</div>;

  const { total } = data.meta.pagination;

  return (
    <section>
      <p>{total} products</p>

      <span>
        <button onClick={() => setLayout("grid")}>
          <BsFillGridFill />
        </button>
        <button>
          <BsList onClick={() => setLayout("list")} />
        </button>
      </span>

      <ProductsList list={data.data} layout={layout} />

      <Pagination pagination={data.meta.pagination} />
    </section>
  );
}
