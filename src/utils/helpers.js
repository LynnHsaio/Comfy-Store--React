export const formatCurrency = (value) => {
  const num = Number(value) / 100;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(num);
};
