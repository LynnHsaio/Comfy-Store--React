import axios from "axios";

const API_URL = "https://strapi-store-server.onrender.com/api/orders";
const userToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaWF0IjoxNzU3NzUxMDM5LCJleHAiOjE3NjAzNDMwMzl9.m2-JfgCMM78_jWYhyDRssQDRZhdsQftk_STZLHlFxZ0";

export async function getOrders(page) {
  const res = await axios.get(`${API_URL}?page=${page}`, {
    headers: {
      Authorization: `Bearer ${userToken}`,
    },
  });

  if (!res) {
    throw new Error("取得訂單列表錯誤");
  }
  return res.data;
}

export async function createOrder(order) {
  const res = await axios.post(
    `${API_URL}`,
    { data: order },
    {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    }
  );

  if (!res) {
    throw new Error("建立訂單錯誤");
  }

  return res.data.data;
}
