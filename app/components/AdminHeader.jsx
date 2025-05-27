"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminHeader() {
  const router = useRouter();

  const handleLogout = () => {
    // Remove cookie and redirect to login (simplified example)
    document.cookie = "isAdmin=; path=/; max-age=0;";
    router.push("admin/login");
  };

  return (
    <header className="bg-white-900  px-6 py-4 shadow-md text-gray-800">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <nav className="space-x-4">
          <Link href="/admin" className="hover:underline">
            Dashboard
          </Link>
          <Link href="/admin/prices" className="hover:underline">
            Priser
          </Link>
          <Link href="/admin/contacts" className="hover:underline">
            Bokningar
          </Link>
          <button
            onClick={handleLogout}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Logga ut
          </button>
        </nav>
      </div>
    </header>
  );
}
