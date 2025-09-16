import { useMutation } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiOrders";
import { toast } from "react-toastify";

export default function useCreateCheckout() {
  const { mutate: createOrder, isPending: isCreatingOrder } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      toast.success("order placed successfully");
    },
    onError: (error) => {
      console.error("建立訂單錯誤:", error);
      toast.error("order placed failed");
    },
  });

  return {
    createOrder,
    isCreatingOrder,
  };
}
