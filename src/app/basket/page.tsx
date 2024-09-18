"use client";

import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const CartPage = () => {
  const { basket, removeFromBasket, clearBasket, updateQuantity } =
    useContext(BasketContext);

  let totalPrice: number = 0;

  for (let i = 0; i < basket.length; i++) {
    totalPrice += basket[i].price * basket[i].quantity;
  }

  const totalPriceFormat: string = totalPrice.toFixed(2);

  if (basket.length === 0) {
    return (
      <div className="min-h-screen   text-center mx-auto container text-xl font-semibold mt-10">
        <div className="flex lg:flex-row flex-col justify-between border p-6 rounded-lg">
          <div className="flex text-center items-center gap-6">
            <FontAwesomeIcon
              icon={faCartShopping}
              className="  rounded-full p-6 text-orange-600 bg-orange-200 "
            />
            <p>Your Basket Is Empty</p>
          </div>
          <div className="text-center justify-center items-center flex  text-white">
            <Link
              href={"/"}
              className="bg-orange-600 hover:bg-orange-400 duration-100 lg:w-96 w-max rounded-lg h-max p-4"
            >
              Go Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-6 min-h-screen text-slate-500 container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Basket</h1>

      <div className="grid  grid-cols-6 gap-4 font-bold">
        <div>Seria Number</div>
        <div>Product Name</div>
        <div>Unit Price</div>
        <div>Quantity</div>
        <div>Total Price</div>
        <div>Actions</div>
      </div>

      <div className="mt-4">
        {basket.map((item, index) => (
          <div key={item.id} className="grid grid-cols-6 gap-4 py-2 border-b">
            <div>{index + 1}</div>
            <div>{item.title}</div>
            <div className="text-primary">{item.price} $</div>
            <div className="flex items-center text-center space-x-2">
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                className=" text-white bg-orange-500 px-2 rounded"
              >
                -
              </button>
              <span className="w-10 flex justify-center">{item.quantity}</span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className=" text-white bg-orange-500 px-2 rounded"
              >
                +
              </button>
            </div>
            <div className="text-primary">
              {(item.price * item.quantity).toFixed(2)} $
            </div>
            <button
              onClick={() => removeFromBasket(item.id)}
              className="bg-red-500 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={clearBasket}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Clear Cart
        </button>

        <div className="text-xl text-primary font-bold">
          Total Price: {totalPriceFormat} $
        </div>
      </div>
    </div>
  );
};

export default CartPage;
