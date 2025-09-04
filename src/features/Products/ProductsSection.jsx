import useFilteredProducts from "./useFilteredProducts";
import ProductsList from "./ProductsList";
import Pagination from "../../ui/Pagination";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import Loading from "../../ui/Loading";
import Empty from "../../ui/Empty";

export default function ProductsTable() {
  const { isLoading, data } = useFilteredProducts();
  const [layout, setLayout] = useState("grid");

  if (isLoading) return <Loading />;

  if (!data?.length) return <Empty resourceName="products" />;

  const { total } = data?.meta.pagination || 0;

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

      <ProductsList list={data?.data} layout={layout} />

      <Pagination pagination={data?.meta.pagination} />
    </section>
  );
}
