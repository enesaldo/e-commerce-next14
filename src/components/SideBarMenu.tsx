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
      className="fixed top-0 left-0 h-full w-64 bg-orange-800 shadow-lg z-50"
    >
      <h2 className="text-white text-xl font-bold p-4">Categories</h2>
      <div className="overflow-y-auto h-full">
        <div className="flex flex-col gap-2 p-4">
          {categories.map((category: any) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              onClick={closeMenu}
              className="p-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg text-sm"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
