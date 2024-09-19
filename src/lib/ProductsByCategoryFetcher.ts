import axios from "axios";
import { Product } from "../lib/types";

export async function ProductsByCategoryFetcher(
  category: string
): Promise<Product[]> {
  const response = await axios.get<{ products: Product[] }>(
    `https://dummyjson.com/products/category/${category}`
  );
  return response.data.products;
}
