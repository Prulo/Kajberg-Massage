"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const router = useRouter();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    router.push("/");
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Kajberg Massage Logo"
            className="h-10 w-auto"
          />
          <h2 className="text-2xl font-semibold text-gray-800">
            Bergs Massage
          </h2>
        </div>

        <nav className="space-x-6 text-gray-600 text-sm font-medium hidden md:flex items-center">
          <Link href="/" className="hover:text-teal-500 transition">
            Hem
          </Link>
          <Link href="/priser" className="hover:text-teal-500 transition">
            Priser
          </Link>
          <Link href="/contact" className="hover:text-teal-500 transition">
            Kontakt
          </Link>

          {user ? (
            <>
              <span className="text-gray-800">{user.name}</span>
              <button
                onClick={handleLogout}
                className="text-red-500 hover:text-red-700 transition"
              >
                Logga ut
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:text-teal-500 transition">
              Logga in
            </Link>
          )}
        </nav>

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

      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-white shadow-md p-4`}
      >
        <nav className="space-y-4 text-center">
          <Link
            href="/"
            className="block text-gray-600 text-lg hover:text-teal-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Hem
          </Link>
          <Link
            href="/priser"
            className="block text-gray-600 text-lg hover:text-teal-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Priser
          </Link>
          <Link
            href="/contact"
            className="block text-gray-600 text-lg hover:text-teal-500 transition"
            onClick={() => setIsMenuOpen(false)}
          >
            Kontakt
          </Link>

          {user ? (
            <>
              <span className="block text-gray-800">{user.name}</span>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="block text-red-500 hover:text-red-700 transition mx-auto"
              >
                Logga ut
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="block text-gray-600 text-lg hover:text-teal-500 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Logga in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
