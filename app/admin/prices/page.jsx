"use client";
import { useEffect, useState } from "react";
import { priceContent } from "../../data/priceContent";
import { useRouter } from "next/navigation";
import AdminHeader from "@/app/components/AdminHeader";

const LOCAL_STORAGE_KEY = "priceContent";

export default function AdminServicesPage() {
  const router = useRouter();
  const [content, setContent] = useState(priceContent);

  useEffect(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const updateService = (index, key, value) => {
    const updated = [...content.services];
    updated[index][key] = value;
    setContent((prev) => ({ ...prev, services: updated }));
  };

  const saveChanges = () => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(content));
    alert("Tjänster uppdaterade!");
  };

  const resetServices = () => {
    if (confirm("Återställ tjänster till standard?")) {
      setContent((prev) => ({
        ...prev,
        services: priceContent.services,
      }));
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify({ ...priceContent })
      );
    }
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <AdminHeader />
      <h1 className="text-3xl font-bold mb-6">Admin – Redigera Tjänster</h1>

      <div className="grid gap-6">
        {content.services.map((service, i) => (
          <div key={i} className="border p-4 rounded shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Tjänst {i + 1}</h2>

            <label className="block mb-2">
              <span className="font-medium">Titel:</span>
              <input
                className="w-full p-2 border rounded"
                value={service.title}
                onChange={(e) => updateService(i, "title", e.target.value)}
              />
            </label>

            <label className="block mb-2">
              <span className="font-medium">Beskrivning:</span>
              <textarea
                className="w-full p-2 border rounded"
                value={service.description}
                onChange={(e) =>
                  updateService(i, "description", e.target.value)
                }
              />
            </label>

            <label className="block mb-2">
              <span className="font-medium">Pris:</span>
              <input
                className="w-full p-2 border rounded"
                value={service.price}
                onChange={(e) => updateService(i, "price", e.target.value)}
              />
            </label>

            <label className="block mb-2">
              <span className="font-medium">Extra info:</span>
              <textarea
                className="w-full p-2 border rounded"
                value={service.extra}
                onChange={(e) => updateService(i, "extra", e.target.value)}
              />
            </label>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={saveChanges}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
        >
          Spara ändringar
        </button>

        <button
          onClick={resetServices}
          className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400"
        >
          Återställ tjänster
        </button>

        <button
          onClick={() => router.push("/")}
          className="ml-auto text-teal-700 underline"
        >
          Tillbaka till hemsidan
        </button>
      </div>
    </main>
  );
}
