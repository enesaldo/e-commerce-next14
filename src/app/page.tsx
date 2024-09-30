import { Product } from "../lib/types";
import ProductCard from "@/components/ProductCard";
import { fetchProducts } from "../lib/ProductFetcher";
import Pagination from "@/components/Pagination";

type HomeProps = {
  searchParams: { page?: string };
};

export default async function Home({ searchParams }: HomeProps) {
  const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
  const limit = 30;
  const skip = (currentPage - 1) * limit;

  const { products, total } = await fetchProducts(skip, limit);

  const totalPages = Math.ceil(total / limit);

  return (
    <div className="container mx-auto lg:py-4 p-6">
      <div className="w-full shadow-lg h-16 items-center flex bg-white flex-row my-8 text-center">
        <div className="bg-primary w-2 h-full"></div>
        <h1 className="md:text-2xl text-md capitalize text-gray-400 font-bold px-10">
          See Our Products
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 my-4 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
}
