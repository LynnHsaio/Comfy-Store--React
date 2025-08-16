import axios from "axios";

export async function getFeaturedProducts() {
  const res = await axios.get(
    "https://strapi-store-server.onrender.com/api/products?featured=true"
  );

  if (!res) {
    throw new Error("取得特色產品錯誤");
  }

  return res.data.data;
}

export async function getProducts() {
  const res = await axios.get(
    "https://strapi-store-server.onrender.com/api/products"
  );

  if (!res) {
    throw new Error("取得所有產品錯誤");
  }

  return res.data.data;
}

export async function getFilteredProducts(search = "") {
  const res = await axios.get(
    `https://strapi-store-server.onrender.com/api/products${search}`
  );

  if (!res) {
    throw new Error("取得篩選產品錯誤");
  }

  return res.data.data;
}

export async function getSingleProduct(id) {
  const res = await axios.get(
    `https://strapi-store-server.onrender.com/api/products/${id}`
  );

  if (!res) {
    throw new Error("取得指定產品錯誤");
  }

  return res.data.data;
}
