import ProductsList from "../products/ProductsList";
import useFeaturedProducts from "./useFeaturedProducts";
import SectionTitle from "../../ui/SectionTitle";

export default function FeaturedProducts() {
  const { isLoading, data } = useFeaturedProducts();

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <SectionTitle title="Featured Products" />
      <ProductsList list={data} />
    </section>
  );
}
