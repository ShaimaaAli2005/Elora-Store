import axios from "axios";

const api = axios.create({ baseURL: "https://dummyjson.com", timeout: 10000 });

const womenCategories = [
  "beauty", "womens-bags", "womens-dresses", "womens-jewellery",
  "womens-shoes", "sunglasses", "tops", "fragrances"
];

export async function getProducts() {
  const { data } = await api.get("/products?limit=100");
  return data.products.filter(p => womenCategories.includes(p.category));
}

export async function getProductById(id) {
  const { data } = await api.get(`/products/${id}`);
  return data;
}

export async function getProductsByCategory(category) {
  const { data } = await api.get(`/products/category/${category}?limit=100`);
  return data.products;
}
