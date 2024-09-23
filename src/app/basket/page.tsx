"use client";

import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { currencyFormatter } from "../../utils";

import Link from "next/link";

const CartPage = () => {
  const { basket, removeFromBasket, clearBasket, updateQuantity } =
    useContext(BasketContext);

  let totalPrice: number = 0;

  for (const product of basket) {
    totalPrice += product.price * product.quantity;
  }

  if (basket.length === 0) {
    return (
      <div className="h-dvh text-center mx-auto container text-xl font-semibold mt-10">
        <div className="flex lg:flex-row flex-col justify-between border p-6 rounded-lg">
          <div className="flex text-center items-center gap-6">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="rounded-full p-6 text-orange-600 bg-orange-200"
            />
            <p>Your Basket Is Empty</p>
          </div>
          <div className="text-center justify-center items-center flex text-white">
            <Link
              href={"/"}
              className="bg-orange-600 hover:bg-orange-400 duration-100 lg:w-96 w-full rounded-lg h-max p-4"
            >
              Go Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="lg:py-6 p-6 text-slate-500 container mx-auto">
      <div>
        <div className="text-2xl lg:text-3xl font-bold mb-6">Your Basket</div>
      </div>

      <div className="hidden lg:grid grid-cols-7 gap-4 font-bold">
        <div>Seria Number</div>
        <div className="col-span-2">Product Name</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Total Price</div>
        <div>Actions</div>
      </div>

      <div className="mt-4">
        {basket.map((item, index) => (
          <div
            key={item.id}
            className="lg:grid grid-cols-7 gap-4 py-4 border-b flex flex-col lg:flex-row"
          >
            <div className="flex justify-between lg:block">
              <span className="font-bold lg:hidden">No:</span>
              <div>{index + 1}</div>
            </div>
            <div className="flex justify-between lg:block col-span-2 truncate">
              <span className="font-bold lg:hidden">Product Name:</span>
              <div>{item.title}</div>
            </div>

            <div className="flex justify-between lg:block">
              <span className="font-bold lg:hidden">Unit Price:</span>
              <div className="text-primary">
                {currencyFormatter(item.price)}
              </div>
            </div>
            <div className="flex justify-between lg:items-center text-center ">
              <span className="font-bold lg:hidden">Quantity:</span>
              <div className="flex">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="text-white bg-orange-500 px-2 rounded transition-transform duration-150 transform hover:scale-110"
                >
                  -
                </button>
                <span className="w-10 flex justify-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="text-white bg-orange-500 px-2 rounded transition-transform duration-150 transform hover:scale-110"
                >
                  +
                </button>
              </div>
            </div>
            <div className="flex justify-between lg:block">
              <span className="font-bold lg:hidden">Total Price:</span>
              <div className="text-primary">
                {currencyFormatter(item.price * item.quantity)}
              </div>
            </div>

            <div className="flex justify-between lg:block">
              <span className="font-bold lg:hidden">Actions:</span>
              <button
                onClick={() => removeFromBasket(item.id)}
                className="bg-red-500 text-white px-4 py-1 rounded mt-2 lg:mt-0"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-8">
        <button
          onClick={clearBasket}
          className="bg-red-600 text-white px-4 py-2 rounded mb-4 lg:mb-0"
        >
          Clear Cart
        </button>

        <div className="text-lg lg:text-xl text-primary font-bold">
          Total Price: {currencyFormatter(totalPrice)}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
