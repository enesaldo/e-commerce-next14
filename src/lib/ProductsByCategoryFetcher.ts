import axios from "axios";
import { Product } from "../lib/types";

export async function ProductsByCategoryFetcher(
  category: string
): Promise<Product[]> {
  try {
    const response = await axios.get<{ products: Product[] }>(
      `https://dummyjson.com/products/category/${category}`
    );
    console.log(response.data);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}
