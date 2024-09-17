"use client";

import { useContext, useEffect } from "react";
import { BasketContext } from "../context/BasketContext";
import Link from "next/link";
import Image from "next/image";

const BasketSummery = () => {
  const { basket } = useContext(BasketContext);

  let totalPrice: number = 0;

  for (let i = 0; i < basket.length; i++) {
    totalPrice += basket[i].price * basket[i].quantity;
  }

  if (basket.length === 0) {
    return "";
  }

  return (
    <div className="py-6 max-h-80 shadow-lg w-80 bg-white text-slate-500 container mx-auto top-20 right-20 overflow-y-auto z-50 absolute ">
      <h1 className="text-lg font-bold mb-6 justify-center flex">
        Recently Added Products
      </h1>

      <div className="mt-4 ">
        {basket.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-3 border-b text-xs gap-4 justify-center items-center"
          >
            <div>
              <Image
                height={100}
                width={100}
                src={item.thumbnail}
                alt={item.title}
                className="h-max w-20 object-contain "
              />
            </div>
            <div>{item.title}</div>
            <div className="text-primary">{item.price} $</div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8  ">
        <Link
          className=" bg-primary p-2 rounded hover:bg-orange-700 duration-100 text-white w-max"
          href={"/basket"}
        >
          {" "}
          View My Shopping Cart
        </Link>
      </div>
    </div>
  );
};

export default BasketSummery;
