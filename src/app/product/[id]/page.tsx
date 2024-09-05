import Image from "next/image";
import { fetchProducts } from "../../../lib/ProductFetcher";

type ProductPageProps = {
  params: {
    id: string;
  };
};

export default async function ProductPage({ params }: ProductPageProps) {
  const products = await fetchProducts();
  const product = products.find((p) => p.id === parseInt(params.id));

  if (!product) return <div>Ürün bulunamadı</div>;

  return (
    <div className="p-6">
      <Image
        width={500}
        height={500}
        src={product.image}
        alt={product.title}
        className="w-full h-64 object-cover"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-xl text-primary font-semibold mt-2">
        {product.price} ₺
      </p>
      <p className="mt-4">{product.description}</p>
      <button className="bg-primary text-white mt-4 px-6 py-2 rounded">
        Sepete Ekle
      </button>
    </div>
  );
}
