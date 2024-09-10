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
    <div className="bg-primary w-full   items-center  px-4 flex-col pt-10 pb-4">
      <div className="w-full grid grid-cols-8 container m-auto rows-span-2 ">
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
            <h1 className=" justify-center">E-Shop</h1>
          </Link>
        </div>
        <div className="w-full flex col-span-6 flex-col ">
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
              className="sm:m-0 m-2 sm:p-2  sm:w-max w-full bg-orange-800 sm:text-base text-xs shadow-lg text-white rounded"
            >
              Search
            </button>
          </form>
        </div>
        <Link className="justify-end flex " href="/ ">
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="text-white h-8 ml-10"
          />
        </Link>
        <div className=" grid-rows-subgrid col-start-2 col-span-6 w-full">
          <div className="flex flex-wrap gap-2 text-white mx-auto container ">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="p-1  hover:bg-orange-800 rounded-lg text-xs"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
