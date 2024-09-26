"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import Menu from "./SideBarMenu";
import { fetchCategories } from "@/lib/CategoriesFetcher";
import { Category } from "../lib/types";
import BasketSummary from "@/components/BasketSummary";
import { BasketContext } from "@/context/BasketContext";

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);
  const [isHovering, setIsHovered] = useState(false);

  const { basket } = useContext(BasketContext);
  const itemCount = basket.length;

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

  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <div className="bg-primary w-full items-center px-4 flex-col lg:pt-10 pt-2 pb-4">
      <div className="w-full grid lg:grid-cols-10 grid-cols-2 row-span-2 container m-auto  ">
        <div className="flex  w-full lg:col-span-2 col-span-1 row-start-1">
          <button
            onClick={toggleMenu}
            className="text-white items-center flex  "
          >
            <FontAwesomeIcon icon={faBars} className="md:h-6 h-4" />
          </button>
          <Link
            className="text-white font-bold text-2xl  w-max flex justify-center text-end items-center"
            href="/"
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={40}
              height={40}
              priority={true}
              className="cursor-pointer md:w-8 w-6 m-2"
            />
            <h1 className="justify-center text-xl md:text-2xl">BuyerFe</h1>
          </Link>
        </div>

        <div className="w-full  lg:col-span-7 col-span-2 ">
          <form
            onSubmit={handleSearch}
            className="flex lg:flex-row gap-2 justify-center md:ml-0  w-full"
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
              className=" flex items-center p-2 w-max bg-orange-800 sm:text-base text-xs shadow-lg text-white rounded"
            >
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="h-4 w-4 mr-2"
              />
              <span className=" hidden lg:block">Search </span>
            </button>
          </form>
        </div>

        <Link
          className="  row-start-1  lg:row-auto flex w-fit ml-auto relative"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          href="/basket"
        >
          <FontAwesomeIcon
            icon={faBasketShopping}
            className="text-white h-8 lg:w-12 w-full"
          />
          {itemCount > 0 && (
            <span className="absolute lg:-top-1 top-0 -right-1 rounded-full text-sm bg-orange-700 text-white w-6 h-6 items-center justify-center flex">
              {itemCount}
            </span>
          )}
          {isHovering ? <BasketSummary /> : ""}
        </Link>

        <div className="hidden lg:block col-span-6 col-start-3 w-full">
          <div className="flex flex-wrap gap-2 col-span-6 text-white mx-auto container ">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/category/${category.slug}`}
                className="p-1 hover:bg-orange-800 rounded-lg text-xs"
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
