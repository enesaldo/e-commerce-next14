import axios from "axios";
import { Category } from "./types";

export async function fetchCategories(): Promise<Category[]> {
  try {
    const response = await axios.get<Category[]>(
      "https://dummyjson.com/products/categories"
    );
    return response.data;
  } catch (error) {
    console.error("Error Fetching Data Categories", error);
    throw new Error("Failed to fetch categories");
  }
}
