import { useQuery } from "@tanstack/react-query";
import { getFeaturedProducts } from "../../services/apiProducts";

export default function useFeaturedProducts() {
  const { isLoading, data, error } = useQuery({
    queryKey: ["featured-products"],
    queryFn: getFeaturedProducts,
  });

  return { isLoading, data, error };
}
