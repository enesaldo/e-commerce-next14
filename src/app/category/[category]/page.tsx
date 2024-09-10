"use client";
import { ProductsByCategoryFetcher } from "../../../lib/ProductsByCategoryFetcher";
import { Product } from "@/lib/types";
import { useState, useEffect } from "react";
import ProductCard from "@/components/ProductCard";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const categoryProducts = await ProductsByCategoryFetcher(category);
        setProducts(categoryProducts);
      } catch (error) {
        console.error("Error fetching products for category:", error);
      }
    };
    getProducts();
  }, [category]);

  return (
    <div className="container mx-auto">
      <div className=" w-full shadow-lg h-16 items-center flex flex-row my-8 text-center ">
        <div className="bg-primary w-2 h-full "> </div>
        <h1 className="text-2xl capitalize text-gray-400 font-bold px-10 ">
          Products in {category}
        </h1>
      </div>

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
