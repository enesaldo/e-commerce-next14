"use client";

import Link from "next/link";
import { BasketContext } from "../../../context/BasketContext";
import { Product } from "../../../lib/types";
import Image from "next/image";
import { useContext } from "react";
import { currencyFormatter } from "../../../utils";
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
          {currencyFormatter(product.price)}
        </p>
        <div className="flex gap-6">
          <button
            onClick={() => addToBasket(product)}
            className="text-orange-800 border hover:border-white border-orange-800 duration-100 hover:bg-orange-500 bg-orange-200  hover:text-white mt-4 px-6 py-2 rounded"
          >
            Add to Basket
          </button>
          <Link
            href={"/basket"}
            onClick={() => addToBasket(product)}
            className="bg-primary hover:bg-orange-600 duration-100  text-white mt-4 px-6 py-2 rounded"
          >
            Purchase Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
