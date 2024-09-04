import Image from "next/image";
import { Product } from "../lib/types";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <Image
        height={500}
        width={500}
        src={product.image}
        alt={product.title}
        className="h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold">{product.title}</h2>
      <p className="text-gray-500">{product.price} $</p>
      <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Detaylar
      </button>
    </div>
  );
}
