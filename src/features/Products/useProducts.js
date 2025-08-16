import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/ApiProducts";

export default function useProducts() {
  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { isLoading, data };
}
