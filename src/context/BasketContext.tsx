"use client";

import { createContext, useState, useEffect, ReactNode } from "react";
import { Product } from "../lib/types";

interface BasketItem extends Product {
  quantity: number;
}

interface BasketContextType {
  basket: BasketItem[];
  addToBasket: (product: Product) => void;
  removeFromBasket: (id: number) => void;
  clearBasket: () => void;
  updateQuantity: (id: number, quantity: number) => void;
}

export const BasketContext = createContext<BasketContextType>({
  basket: [],
  addToBasket: (product: Product) => {},
  removeFromBasket: (id: number) => {},
  clearBasket: () => {},
  updateQuantity: (id: number, quantity: number) => {},
});

export const BasketProvider = ({ children }: { children: ReactNode }) => {
  const [basket, setBasket] = useState<BasketItem[]>([]);

  useEffect(() => {
    const savedBasket = localStorage.getItem("basket");
    if (savedBasket) {
      try {
        setBasket(JSON.parse(savedBasket));
      } catch (error) {
        console.error("Sepet verisi çözülürken hata oluştu:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (basket.length > 0) {
      localStorage.setItem("basket", JSON.stringify(basket));
    }
  }, [basket]);

  const addToBasket = (product: Product) => {
    setBasket((prevBasket) => {
      const itemIndex = prevBasket.findIndex((item) => item.id === product.id);
      if (itemIndex !== -1) {
        const updatedBasket = [...prevBasket];
        updatedBasket[itemIndex].quantity += 1;
        return updatedBasket;
      } else {
        return [...prevBasket, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setBasket((prevBasket) =>
      prevBasket.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };
  const removeFromBasket = (id: number) => {
    setBasket((prevBasket) => prevBasket.filter((item) => item.id !== id));
  };

  const clearBasket = () => {
    setBasket([]);
  };

  return (
    <BasketContext.Provider
      value={{
        basket,
        addToBasket,
        removeFromBasket,
        clearBasket,
        updateQuantity,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
