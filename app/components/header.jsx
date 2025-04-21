import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Kajberg Massage</h2>
        <nav className="space-x-6 text-gray-600 text-sm font-medium hidden md:flex">
          <Link href="/" className="hover:text-pink-500 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-pink-500 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-pink-500 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-pink-500 transition">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
