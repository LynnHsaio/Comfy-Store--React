import ProductsList from "../products/ProductsList";
import useFeaturedProducts from "./useFeaturedProducts";
import SectionTitle from "../../ui/SectionTitle";
import Loading from "../../ui/Loading";

export default function FeaturedProducts() {
  const { isLoading, data } = useFeaturedProducts();

  if (isLoading) return <Loading />;

  return (
    <section>
      <SectionTitle title="Featured Products" />
      <ProductsList list={data} />
    </section>
  );
}
