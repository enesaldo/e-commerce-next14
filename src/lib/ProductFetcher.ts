import axios from "axios";
import { Product } from "../lib/types";

export async function fetchProducts(
  skip: number,
  limit: number
): Promise<{ products: Product[]; total: number }> {
  try {
    const response = await axios.get<{ products: Product[]; total: number }>(
      `https://dummyjson.com/products?skip=${skip}&limit=${limit}`
    );
    return {
      products: response.data.products,
      total: response.data.total,
    };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}
export async function fetchProduct(id: string | number) {
  try {
    const response = await axios.get(`https://dummyjson.com/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Product Not Found");
  }
}

export async function searchProducts(query: string): Promise<Product[]> {
  try {
    const response = await axios.get<{ products: Product[] }>(
      `https://dummyjson.com/products/search?q=${query}`
    );
    return response.data.products;
  } catch (error) {
    console.error("Error searching for products:", error);
    throw new Error("Failed to search products");
  }
}
