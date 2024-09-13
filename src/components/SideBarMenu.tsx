"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { fetchCategories } from "../lib/CategoriesFetcher";
import { Category } from "../lib/types";

interface MenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function Menu({ isOpen, closeMenu }: MenuProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const allCategories = await fetchCategories();
        setCategories(allCategories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeMenu]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="fixed top-0 left-0 h-full overflow-y-auto w-64 bg-white shadow-lg z-50"
    >
      <h2 className=" text-xl font-bold p-4">Categories</h2>
      <div className=" h-full">
        <div className="flex flex-col gap-2 p-4 ">
          {categories.map((category: any) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              onClick={closeMenu}
            >
              <div className="  hover:text-orange-700 hover:translate-x-6 text-slate-500 transition delay-75 duration-300 ease-in-out rounded-lg text-sm">
                {category.name}
              </div>
              <div className="h-px my-2 bg-slate-500  border-0 dark:bg-gray-700"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
