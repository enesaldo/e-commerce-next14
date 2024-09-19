import { ProductsByCategoryFetcher } from "../../../lib/ProductsByCategoryFetcher";
import { Product } from "@/lib/types";
import ProductCard from "@/components/ProductCard";

type CategoryPageProps = {
  params: {
    category: string;
  };
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = params;

  const products = await ProductsByCategoryFetcher(category);

  return (
    <div className="container mx-auto">
      <div className=" w-full shadow-lg h-16 items-center flex bg-white flex-row my-8 text-center ">
        <div className="bg-primary w-2 h-full "> </div>
        <h1 className="md:text-2xl  text-md capitalize text-gray-400 font-bold px-10 ">
          Products in {category}
        </h1>
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6
       gap-4 my-4"
      >
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
