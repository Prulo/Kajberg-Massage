import Header from "../app/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kajberg Massage</h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          Relaxation & healing through touch. Let your stress melt away.
        </p>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Your Path to Wellness
          </h2>
          <p className="text-lg text-gray-600">
            At Kajberg Massage, we offer a variety of massage services tailored
            to your needs. Whether you're looking to relieve stress, soothe sore
            muscles, or simply take a moment for yourself, we have the perfect
            treatment for you.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Swedish Massage
            </h3>
            <p className="text-gray-600 mb-4">
              A gentle, full-body massage designed to promote relaxation and
              reduce stress.
            </p>
            <p className="text-lg font-bold text-pink-600">1 hour - 600 SEK</p>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Deep Tissue Massage
            </h3>
            <p className="text-gray-600 mb-4">
              Focuses on relieving muscle tension and soreness, perfect for
              those with chronic pain.
            </p>
            <p className="text-lg font-bold text-pink-600">1 hour - 750 SEK</p>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Hot Stone Massage
            </h3>
            <p className="text-gray-600 mb-4">
              Warm stones help relax tight muscles and improve circulation,
              offering deep relaxation.
            </p>
            <p className="text-lg font-bold text-pink-600">1 hour - 800 SEK</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Ready to experience the best relaxation of your life? Book your
            appointment today and treat yourself to a well-deserved break.
          </p>
          <a
            href="/contact"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition duration-200"
          >
            Book an Appointment
          </a>
        </div>
      </section>
    </main>
  );
}
