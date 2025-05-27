"use client";
import { useEffect, useState } from "react";
import Header from "../../app/components/Header";
import { priceContent } from "../data/priceContent";

export default function PriserPage() {
  const [content, setContent] = useState(priceContent);

  useEffect(() => {
    const saved = localStorage.getItem("priceContent");
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-50 bg-gradient-to-b from-teal-50 to-white text-gray-800">
      <Header />
      <section className="text-center py-14 pt-20">
        <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {content.description}
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.services.map((service, i) => (
          <div
            key={i}
            className="bg-white shadow-md rounded-lg p-6 text-center"
          >
            <h2 className="text-2xl font-semibold text-teal-500 mb-4">
              {service.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">{service.description}</p>
            <div className="text-xl font-bold text-teal-500 mb-4">
              {service.price}
            </div>
            <p className="text-gray-500">{service.extra}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
