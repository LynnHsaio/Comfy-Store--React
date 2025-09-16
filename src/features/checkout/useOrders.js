import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../../services/apiOrders";
import { useSearchParams } from "react-router-dom";

export function useOrders() {
  const [searchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const { data: orderData, isLoading } = useQuery({
    queryKey: ["orders", page],
    queryFn: () => getOrders(page),
  });

  return { orderData, isLoading };
}
