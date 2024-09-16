"use client";

import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

export default function ProductCard({ product }: any) {
  const { addToBasket } = useContext(BasketContext);

  return (
    <div
      className="
     rounded-lg p-4 flex flex-col shadow-lg bg-white"
    >
      <Image
        height={100}
        width={100}
        src={product.thumbnail}
        alt={product.title}
        className="h-full object-contain w-full  mb-4"
      />
      <h2 className="text-lg font-semibold  h-20 truncate">{product.title}</h2>
      <p className="text-gray-500">{product.price} $</p>
      <div className="flex justify-between items-center">
        <Link
          href={`/product/${product.id}`}
          className=" bg-primary text-white px-4 py-2  hover:bg-orange-600"
        >
          Detaylar
        </Link>
        <button
          onClick={() => addToBasket(product)}
          className="bg-orange-800 hover:bg-orange-700 w-8 h-8 text-white "
        >
          +
        </button>
      </div>
    </div>
  );
}
