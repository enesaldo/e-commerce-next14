"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../lib/types";
import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";
import { currencyFormatter } from "../utils";
import ReactStars from "react-stars";

export default function ProductCard({ product }: { product: Product }) {
  const { addToBasket } = useContext(BasketContext);

  return (
    <div className="hover:shadow-xl  rounded-lg">
      <div
        className="
  rounded-t-lg p-4 flex flex-col  bg-slate-100"
      >
        <Link href={`/product/${product.id}`}>
          <div>
            <Image
              height={50}
              width={450}
              src={product.thumbnail}
              alt={product.title}
              className=" object-contain w-full  mb-4"
            />
          </div>
        </Link>
      </div>
      <div className="flex py-4 mx-2 justify-between space-y-2 flex-col">
        <div className="flex flex-row justify-between items-center  w-full">
          <span className="text-sm font-semibold  truncate">
            {product.title}
          </span>
          <p className="text-gray-500">{currencyFormatter(product.price)}</p>
        </div>
        <div>
          <ReactStars
            count={5}
            value={product.rating}
            size={12}
            color2={"#ffd700"}
            edit={false}
          />
        </div>
        <button
          onClick={() => addToBasket(product)}
          className="text-primary text-sm hover:bg-primary duration-100 border-primary border w-max p-2 rounded-full hover:text-white "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
