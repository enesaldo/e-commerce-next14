"use client";

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/navigation";
import { useState } from "react";

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
    <header className="bg-primary p-4 flex justify-between items-center">
      <Link className="text-white font-bold text-2xl" href="/">
        E-Ticaret
      </Link>
      <form
        onSubmit={handleSearch}
        className="flex sm:flex-row gap-2 flex-col md:m-0 ml-10 max-md:w-full items-center"
      >
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 rounded  md:w-96 w-full shadow-lg "
        />
        <button
          type="submit"
          className="sm:m-0 m-2 sm:p-2 p-0.5 sm:w-max w-full  sm:text-base text-xs shadow-lg text-white rounded"
        >
          Search
        </button>
      </form>
    </header>
  );
}
