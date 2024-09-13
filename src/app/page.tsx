import { fetchProducts } from "../lib/ProductFetcher";
import { Product } from "../lib/types";
import ProductCard from "@/components/ProductCard";

export default async function Home() {
  const products: Product[] = await fetchProducts();

  return (
    <div className="container mx-auto py-4">
      <div className=" w-full shadow-lg h-16 items-center flex bg-white flex-row my-8 text-center ">
        <div className="bg-primary w-2 h-full "> </div>
        <h1 className="text-2xl capitalize text-gray-400 font-bold px-10 ">
          See Our Products
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 my-4 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
