"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };
  return (
    <div className="bg-primary w-full flex justify-between items-center">
      <header className=" p-4 flex mx-20 justify-between w-full items-center">
        <div className="">
          <Link
            className="text-white font-bold text-2xl w-max flex justify-end text-end items-end"
            href="/"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              priority={true}
              className="cursor-pointer   "
            />
            <h1 className="mr-20 justify-end">E-Shop</h1>
          </Link>
        </div>
        <div className="w-full">
          <form
            onSubmit={handleSearch}
            className="flex sm:flex-row gap-2 justify-center flex-col md:m-0 ml-10  w-full items-center"
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
