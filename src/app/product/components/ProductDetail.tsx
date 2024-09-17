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
    <div className="p-6 flex">
      <Image
        width={100}
        height={100}
        src={product.thumbnail}
        alt={product.title}
        className="object-cover w-1/2"
      />
      <div className="space-y-6 mt-10">
        <h1 className="text-3xl font-bold mt-4">{product.title}</h1>

        <p className="mt-4">{product.description}</p>
        <p className="text-xl text-primary font-semibold mt-2">
          {product.price} $
        </p>
        <button
          onClick={() => addToBasket(product)}
          className="bg-primary hover:bg-orange-500  text-white mt-4 px-6 py-2 rounded"
        >
          Add to Basket
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
