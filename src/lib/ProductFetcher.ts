import axios from "axios";
import { Product } from "../lib/types";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<{ products: Product[] }>(
      "https://dummyjson.com/products"
    );
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
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
