"use client";
import { useEffect, useState } from "react";
import { contactContent } from "../data/contactContent";
import Header from "../../app/components/Header";

export default function ContactPage() {
  const [content, setContent] = useState(contactContent);

  useEffect(() => {
    const saved = localStorage.getItem("contactContent");
    if (saved) {
      setContent(JSON.parse(saved));
    }
  }, []);

  return (
    <main className="min-h-screen p-6 bg-gray-50 bg-gradient-to-b from-teal-50 to-white text-gray-800">
      <Header />
      <section className="text-center py-20 ">
        <h1 className="text-4xl font-bold mb-6">{content.intro.heading}</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          {content.intro.text}
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">
            {content.contactSection.heading}
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {content.contactSection.text}
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">E-post</h3>
            <p className="text-lg text-gray-500">{content.email}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Telefon</h3>
            <p className="text-lg text-gray-500">{content.phone}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Adress</h3>
            <p className="text-lg text-gray-500">{content.address}</p>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">
            {content.formSection.heading}
          </h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-gray-700 mb-2"
              >
                Ditt Namn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Ditt Fullständiga Namn"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg text-gray-700 mb-2"
              >
                Din E-post
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Din E-postadress"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg text-gray-700 mb-2"
              >
                Ditt Meddelande
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Skriv ditt meddelande här"
                rows="6"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-600 transition duration-200"
              >
                Skicka Meddelande
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
