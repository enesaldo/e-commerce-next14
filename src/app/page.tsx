import { fetchProducts } from "../lib/ProductFetcher";
import { Product } from "../lib/types";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products: Product[] = await fetchProducts();

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
