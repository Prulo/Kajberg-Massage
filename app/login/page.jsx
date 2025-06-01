"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/app/actions/auth";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const result = await loginUser(formData);

    if (result.success) {
      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(result.user));

      // Redirect to dashboard
      router.push("/");
    } else {
      setError(result.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Logga In
        </h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Lösenord"
          className="w-full p-3 mb-6 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
        >
          Logga in
        </button>
      </form>
    </div>
  );
}
