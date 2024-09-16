"use client";

import { BasketContext } from "../../../context/BasketContext";
import { Product } from "../../../lib/types";
import Image from "next/image";
import { useContext } from "react";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="p-6">
      <Image
        width={100}
        height={100}
        src={product.thumbnail}
        alt={product.title}
        className="max-w-80 object-cover"
      />
      <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-xl text-primary font-semibold mt-2">
        {product.price} $
      </p>
      <p className="mt-4">{product.description}</p>
      <button
        onClick={() => addToBasket(product)}
        className="bg-primary hover:bg-orange-500 text-white mt-4 px-6 py-2 rounded"
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductDetail;
