import { fetchProducts } from "../lib/ProductFetcher";
import { Product } from "../lib/types";
import ProductCard from "../components/ProductCard";

export default async function Home() {
  const products: Product[] = await fetchProducts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">E-commerce Store</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
