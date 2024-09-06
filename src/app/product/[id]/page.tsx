import Image from "next/image";
import { Product, ProductPageProps } from "../../../lib/types";

import { fetchProducts } from "../../../lib/ProductFetcher";

export default async function ProductPage({ params }: ProductPageProps) {
  const products = await fetchProducts();
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) return <div>Ürün bulunamadı</div>;

  return (
    <div className="p-6">
      <Image
        width={100}
        height={100}
        src={product.thumbnail}
        alt={product.title}
        className="max-w-80  object-cover"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-xl text-primary font-semibold mt-2">
        {product.price} $
      </p>
      <p className="mt-4">{product.description}</p>
      <button className="bg-primary hover:bg-orange-500 text-white mt-4 px-6 py-2 rounded">
        Sepete Ekle
      </button>
    </div>
  );
}
