"use client";
import { useEffect, useState } from "react";
import { contactContent } from "../../data/contactContent";
import AdminHeader from "@/app/components/AdminHeader";

export default function AdminContactPage() {
  const [content, setContent] = useState(contactContent);

  useEffect(() => {
    const saved = localStorage.getItem("contactContent");
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  const update = (section, key, value) => {
    setContent((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const updateField = (key, value) => {
    setContent((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const saveChanges = () => {
    localStorage.setItem("contactContent", JSON.stringify(content));
    alert("Kontaktinformation uppdaterad!");
  };

  const resetContent = () => {
    if (confirm("Återställ kontaktinformation till standard?")) {
      setContent(contactContent);
      localStorage.setItem("contactContent", JSON.stringify(contactContent));
    }
  };

  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <AdminHeader />
      <h1 className="text-3xl font-bold mb-6">Admin – Redigera Kontakt</h1>

      <div className="grid gap-6">
        <div className="border p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Intro</h2>
          <label className="block mb-2">
            Rubrik:
            <input
              className="w-full p-2 border rounded"
              value={content.intro.heading}
              onChange={(e) => update("intro", "heading", e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Text:
            <textarea
              className="w-full p-2 border rounded"
              value={content.intro.text}
              onChange={(e) => update("intro", "text", e.target.value)}
            />
          </label>
        </div>

        <div className="border p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Kontaktsektion</h2>
          <label className="block mb-2">
            Rubrik:
            <input
              className="w-full p-2 border rounded"
              value={content.contactSection.heading}
              onChange={(e) =>
                update("contactSection", "heading", e.target.value)
              }
            />
          </label>
          <label className="block mb-2">
            Text:
            <textarea
              className="w-full p-2 border rounded"
              value={content.contactSection.text}
              onChange={(e) => update("contactSection", "text", e.target.value)}
            />
          </label>
        </div>

        <div className="border p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Kontaktinformation</h2>
          <label className="block mb-2">
            E-post:
            <input
              className="w-full p-2 border rounded"
              value={content.email}
              onChange={(e) => updateField("email", e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Telefon:
            <input
              className="w-full p-2 border rounded"
              value={content.phone}
              onChange={(e) => updateField("phone", e.target.value)}
            />
          </label>
          <label className="block mb-2">
            Adress:
            <input
              className="w-full p-2 border rounded"
              value={content.address}
              onChange={(e) => updateField("address", e.target.value)}
            />
          </label>
        </div>

        <div className="border p-4 rounded shadow-sm">
          <h2 className="text-xl font-semibold mb-2">Formulärrubrik</h2>
          <input
            className="w-full p-2 border rounded"
            value={content.formSection.heading}
            onChange={(e) => update("formSection", "heading", e.target.value)}
          />
        </div>
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
          Återställ innehåll
        </button>
      </div>
    </main>
  );
}
