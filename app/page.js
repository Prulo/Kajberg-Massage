"use client";
import { useEffect, useState } from "react";
import Header from "../app/components/Header";
import { defaultContent } from "../app/data/defaultContent"; // adjust path if needed

export default function Home() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("siteContent");

    if (saved) {
      try {
        setContent(JSON.parse(saved));
      } catch (err) {
        console.error("Invalid JSON in localStorage. Resetting to default.");
        setContent(defaultContent);
      }
    } else {
      setContent(defaultContent);
    }
  }, []);

  if (!content) return <p className="text-center mt-10">Laddar innehåll...</p>;

  return (
    <main className="min-h-screen bg-white pt-8 text-gray-800 bg-gradient-to-b from-teal-50 to-white">
      <Header />
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-teal-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          {content.description}
        </p>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">
            {content.sectionTitle}
          </h2>
          <p className="text-lg text-gray-600">{content.sectionText}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {content.services.map((s, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs"
            >
              <h3 className="text-xl font-semibold text-teal-500 mb-4">
                {s.title}
              </h3>
              <p className="text-gray-600 mb-4">{s.description}</p>
              <p className="text-lg font-bold text-teal-500">{s.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-700 mb-6">{content.ctaText}</p>
          <a
            href="/contact"
            className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition duration-200"
          >
            Boka en Tid
          </a>
        </div>
      </section>
    </main>
  );
}
