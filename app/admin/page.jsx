"use client";
import { useEffect, useState } from "react";
import { defaultContent } from "../data/defaultContent";
import { useRouter } from "next/navigation";
import AdminHeader from "@/app/components/AdminHeader";

export default function AdminPage() {
  const router = useRouter();
  const [content, setContent] = useState(defaultContent);

  useEffect(() => {
    const saved = localStorage.getItem("siteContent");
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const updateField = (field, value) => {
    setContent((prev) => ({ ...prev, [field]: value }));
  };

  const updateService = (index, key, value) => {
    const updatedServices = [...content.services];
    updatedServices[index][key] = value;
    setContent((prev) => ({ ...prev, services: updatedServices }));
  };

  const saveChanges = () => {
    localStorage.setItem("siteContent", JSON.stringify(content));
    alert("Innehåll uppdaterat!");
  };

  const resetContent = () => {
    if (confirm("Återställ till standardinnehåll?")) {
      localStorage.setItem("siteContent", JSON.stringify(defaultContent));
      setContent(defaultContent);
    }
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <AdminHeader />
      <h1 className="text-3xl font-bold mb-6">Admin – Redigera hemsida</h1>

      <div className="grid gap-4">
        <label>
          <span className="font-medium">Titel:</span>
          <input
            className="w-full p-2 border rounded"
            value={content.title}
            onChange={(e) => updateField("title", e.target.value)}
          />
        </label>

        <label>
          <span className="font-medium">Beskrivning:</span>
          <textarea
            className="w-full p-2 border rounded"
            value={content.description}
            onChange={(e) => updateField("description", e.target.value)}
          />
        </label>

        <label>
          <span className="font-medium">Sektionstitel:</span>
          <input
            className="w-full p-2 border rounded"
            value={content.sectionTitle}
            onChange={(e) => updateField("sectionTitle", e.target.value)}
          />
        </label>

        <label>
          <span className="font-medium">Sektionstext:</span>
          <textarea
            className="w-full p-2 border rounded"
            value={content.sectionText}
            onChange={(e) => updateField("sectionText", e.target.value)}
          />
        </label>

        <h2 className="text-2xl font-semibold mt-8 mb-2">Tjänster</h2>
        {content.services.map((service, i) => (
          <div key={i} className="border p-4 rounded mb-4">
            <label>
              <span className="font-medium">Titel:</span>
              <input
                className="w-full p-2 border rounded mb-2"
                value={service.title}
                onChange={(e) => updateService(i, "title", e.target.value)}
              />
            </label>
            <label>
              <span className="font-medium">Beskrivning:</span>
              <textarea
                className="w-full p-2 border rounded mb-2"
                value={service.description}
                onChange={(e) =>
                  updateService(i, "description", e.target.value)
                }
              />
            </label>
            <label>
              <span className="font-medium">Pris:</span>
              <input
                className="w-full p-2 border rounded"
                value={service.price}
                onChange={(e) => updateService(i, "price", e.target.value)}
              />
            </label>
          </div>
        ))}

        <label>
          <span className="font-medium">Call-to-action text:</span>
          <textarea
            className="w-full p-2 border rounded"
            value={content.ctaText}
            onChange={(e) => updateField("ctaText", e.target.value)}
          />
        </label>
      </div>

      <div className="flex gap-4 mt-8">
        <button
          onClick={saveChanges}
          className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700"
        >
          Spara ändringar
        </button>
        <button
          onClick={resetContent}
          className="bg-gray-300 text-black px-6 py-2 rounded hover:bg-gray-400"
        >
          Återställ till standard
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
