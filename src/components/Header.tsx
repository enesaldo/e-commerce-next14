"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchCategories } from "../lib/CategoriesFetcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Category } from "../lib/types";

import {
  faBasketShopping,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const router = useRouter();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const allCategories = await fetchCategories();
        setCategories(allCategories.slice(0, 8));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };
  return (
    <div className="bg-primary w-full flex justify-between items-center h-32">
      <header className=" p-4 flex mx-20 justify-between w-full items-center">
        <div className="">
          <Link
            className="text-white font-bold text-2xl w-max flex justify-center text-end items-center"
            href="/"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              priority={true}
              className="cursor-pointer w-12  "
            />
            <h1 className="mr-20 justify-center">E-Shop</h1>
          </Link>
        </div>
        <div className="w-full flex flex-col px-4">
          <form
            onSubmit={handleSearch}
            className="flex gap-2 justify-center  md:m-0 ml-10  w-full items-center"
          >
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-2 rounded  w-full shadow-lg "
            />
            <button
              type="submit"
              className="sm:m-0 m-2 sm:p-2 p-0.5 sm:w-max w-full bg-orange-800 sm:text-base text-xs shadow-lg text-white rounded"
            >
              Search
            </button>
          </form>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2 mt-2">
              {categories.map((category) => (
                <span
                  key={category.slug}
                  className="px-3 py-1 bg-orange-200 rounded-lg text-sm"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Link href="/ ">
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="text-white h-8 ml-10"
          />
        </Link>
      </header>
    </div>
  );
}
