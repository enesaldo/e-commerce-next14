import axios from "axios";
import { Product } from "../lib/types";

export async function ProductsByCategoryFetcher(
  category: string,
  productId?: number
): Promise<Product[]> {
  const response = await axios.get<{ products: Product[] }>(
    `https://dummyjson.com/products/category/${category}`
  );

  const products = response.data.products;

  if (productId) {
    return products
      .filter((product: Product) => product.id !== productId)
      .slice(0, 7);
  }

  return products.slice(0, 7);
}
