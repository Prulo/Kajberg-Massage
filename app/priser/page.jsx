import Header from "../../app/components/Header";

export default function PriserPage() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <Header />
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-6">Massage Prices</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          Explore our massage offerings. Choose the perfect option to unwind and
          relax.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Massage 1 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Swedish Massage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A soothing, full-body massage that promotes relaxation and reduces
            stress.
          </p>
          <div className="text-xl font-bold text-pink-600 mb-4">
            1 hour - 600 SEK
          </div>
          <p className="text-gray-500">
            Relax your body and mind with gentle strokes and rhythmic
            techniques.
          </p>
        </div>

        {/* Massage 2 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Deep Tissue Massage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Targets deeper layers of muscle and connective tissue for pain
            relief.
          </p>
          <div className="text-xl font-bold text-pink-600 mb-4">
            1 hour - 750 SEK
          </div>
          <p className="text-gray-500">
            Perfect for chronic muscle tension or stiffness.
          </p>
        </div>

        {/* Massage 3 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Hot Stone Massage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A relaxing massage with warm stones to ease muscle tension and
            stress.
          </p>
          <div className="text-xl font-bold text-pink-600 mb-4">
            1 hour - 800 SEK
          </div>
          <p className="text-gray-500">
            Heated stones promote deep relaxation and improve circulation.
          </p>
        </div>

        {/* Massage 4 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Sports Massage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Focuses on muscle groups used in exercise to improve flexibility and
            reduce soreness.
          </p>
          <div className="text-xl font-bold text-pink-600 mb-4">
            1 hour - 700 SEK
          </div>
          <p className="text-gray-500">
            Ideal for athletes or anyone who experiences muscle stiffness after
            physical activity.
          </p>
        </div>

        {/* Massage 5 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Aromatherapy Massage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            A relaxing massage with essential oils to balance your mind and
            body.
          </p>
          <div className="text-xl font-bold text-pink-600 mb-4">
            1 hour - 700 SEK
          </div>
          <p className="text-gray-500">
            Enhances emotional and physical well-being through the use of
            therapeutic oils.
          </p>
        </div>

        {/* Massage 6 */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Couples Massage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Enjoy a relaxing massage with your partner in a shared room.
          </p>
          <div className="text-xl font-bold text-pink-600 mb-4">
            1 hour - 1,200 SEK
          </div>
          <p className="text-gray-500">
            Perfect for relaxation and bonding with your loved one.
          </p>
        </div>
      </section>
    </main>
  );
}
