"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import Menu from "./MobileMenu";

export default function Header() {
  const [query, setQuery] = useState<string>("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${query}`);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="bg-primary w-full items-center px-4 flex-col pt-10 pb-4">
      <div className="w-full grid grid-cols-8 container m-auto rows-span-2">
        <button onClick={toggleMenu} className="text-white w-min">
          <FontAwesomeIcon icon={faBars} className="h-6" />
        </button>
        <div className="flex">
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
              className="cursor-pointer w-12"
            />
            <h1 className="justify-center">E-Shop</h1>
          </Link>
        </div>

        <div className="w-full flex col-span-5 flex-col">
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
      </div>
      <Menu isOpen={isMenuOpen} closeMenu={closeMenu} />
    </div>
  );
}
