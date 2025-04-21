"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-gradient-to-b from-pink-50 to-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">
          Kajberg Massage
        </h2>

        {/* Desktop Navigation */}
        <nav className="space-x-6 text-gray-600 text-sm font-medium hidden md:flex">
          <Link href="/" className="hover:text-pink-500 transition">
            Hem
          </Link>
          <Link href="/priser" className="hover:text-pink-500 transition">
            Priser
          </Link>
          <Link href="/contact" className="hover:text-pink-500 transition">
            Kontakt
          </Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button className="md:hidden text-gray-600" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-md p-4`}
      >
        <nav className="space-y-4 text-center">
          <Link
            href="/"
            className="block text-gray-600 text-lg hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)} // Close menu after clicking
          >
            Hem
          </Link>
          <Link
            href="/priser"
            className="block text-gray-600 text-lg hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)} // Close menu after clicking
          >
            Priser
          </Link>
          <Link
            href="/contact"
            className="block text-gray-600 text-lg hover:text-pink-500 transition"
            onClick={() => setIsMenuOpen(false)} // Close menu after clicking
          >
            Kontakt
          </Link>
        </nav>
      </div>
    </header>
  );
}
