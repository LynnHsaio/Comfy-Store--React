import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "../../services/ApiProducts";

export default function useFeaturedProducts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProducts,
  });

  return { isLoading, data, error };
}
