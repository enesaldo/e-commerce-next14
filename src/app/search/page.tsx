"use client";

import ProductCard from "@/components/ProductCard";
import { Product, SearchProps } from "../../lib/types";
import ProductCart from "@/components/ProductCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { searchProducts } from "../../lib/ProductFetcher";

export default function SearchPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        const results = await searchProducts(query);
        setProducts(results);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Results for "{query}"</h1>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5
       gap-4"
      >
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
