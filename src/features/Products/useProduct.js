import { useQuery } from "@tanstack/react-query";
import { getSingleProduct } from "../../services/ApiProducts";
import { useParams } from "react-router-dom";

export default function useProduct() {
  const { id } = useParams();

  const { isLoading, data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getSingleProduct(id),
  });

  return { isLoading, data };
}
