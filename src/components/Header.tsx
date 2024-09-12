"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./SideBarMenu";
import { fetchCategories } from "@/lib/CategoriesFetcher";
import { Category } from "../lib/types";

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };
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

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-primary w-full items-center px-4 flex-col pt-10 pb-4">
      <div className="w-full grid grid-cols-10 container m-auto  ">
        <div className="flex gap-4 w-full col-span-2 ">
          <button onClick={toggleMenu} className="text-white ">
            <FontAwesomeIcon icon={faBars} className="h-6" />
          </button>
          <Link
            className="text-white font-bold text-2xl col-span-2 w-max flex justify-center text-end items-center"
            href="/"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              priority={true}
              className="cursor-pointer w-12"
            />
            <h1 className="justify-center ">E-Shop</h1>
          </Link>
        </div>

        <div className="w-full flex col-span-7 flex-col">
          <form
            onSubmit={handleSearch}
            className="flex gap-2 justify-center md:m-0 ml-10 w-full items-center"
          >
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="p-2 rounded w-full shadow-lg"
            />
            <button
              type="submit"
              className="sm:m-0 m-2 sm:p-2 sm:w-max w-full bg-orange-800 sm:text-base text-xs shadow-lg text-white rounded"
            >
              Search
            </button>
          </form>
        </div>

        <Link className="justify-end flex" href="/ ">
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="text-white h-8 ml-10"
          />
        </Link>
        <div className=" grid col-span-6 col-start-3 w-full">
          <div className="flex flex-wrap gap-2 col-span-6  text-white mx-auto container ">
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

      <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
}
