import { ProductPageProps } from "../../../lib/types";
import { fetchProducts } from "../../../lib/ProductFetcher";
import ProductDetail from "../components/ProductDetail";

export default async function ProductPage({ params }: ProductPageProps) {
  const products = await fetchProducts();
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product)
    return (
      <div className="flex justify-center items-center text-center h-dvh">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 items-center rounded relative max-w-xl text-center shadow-lg">
          <strong className="font-bold">Oops! </strong>
          <span className="block sm:inline">Product Not Found</span>
        </div>
      </div>
    );

  return (
    <div>
      <ProductDetail product={product} />
    </div>
  );
}
