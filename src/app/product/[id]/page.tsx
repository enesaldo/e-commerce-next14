import { ProductPageProps } from "../../../lib/types";
import { fetchProduct } from "../../../lib/ProductFetcher";
import ProductDetail from "../components/ProductDetail";

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const productId = id;

  try {
    const product = await fetchProduct(productId);
    return (
      <div>
        <ProductDetail product={product} />
      </div>
    );
  } catch (error) {
    return (
      <div className="flex justify-center mt-10  ">
        <div className="bg-red-100 border  border-red-400 text-red-700 px-4 py-3 items-center rounded relative max-w-xl text-center shadow-lg">
          <strong className="font-bold">Oops! </strong>
          <span className="block sm:inline">Product Not Found</span>
        </div>
      </div>
    );
  }
}
