import axios from "axios";
import { Product } from "../lib/types";

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await axios.get<Product[]>(
      "https://fakestoreapi.com/products"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}
