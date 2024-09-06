"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="text-white">
        {isOpen ? "Kapat" : "Menu"}
      </button>
      {isOpen && (
        <nav className="absolute top-full right-0 bg-primary text-white w-48 p-4 rounded-lg">
          <ul>
            <li>
              <a href="/">Ana Sayfa</a>
            </li>
            <li>
              <a href="/cart">Sepet</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}
