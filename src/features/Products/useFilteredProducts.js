import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "../../services/apiProducts";
import { useLocation } from "react-router-dom";

export default function useFilteredProducts() {
  const location = useLocation();

  const { isLoading, data } = useQuery({
    queryKey: ["filtered-products", location.search],
    queryFn: () => {
      return getFilteredProducts(location.search);
    },
  });

  return { isLoading, data };
}
