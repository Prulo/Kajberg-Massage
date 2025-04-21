import Header from "../app/components/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-8 text-gray-800 bg-gradient-to-b from-pink-50 to-white">
      <Header />
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kajberg Massage</h1>
        <p className="text-lg md:text-xl max-w-xl mb-8">
          Avkoppling & läkning genom beröring. Låt din stress smälta bort.
        </p>

        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Din Väg Till Välmående
          </h2>
          <p className="text-lg text-gray-600">
            På Kajberg Massage erbjuder vi en mängd olika massagetjänster
            anpassade efter dina behov. Oavsett om du vill lindra stress, mjuka
            upp ömma muskler eller bara ta en paus för dig själv, har vi den
            perfekta behandlingen för dig.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Svensk Massage
            </h3>
            <p className="text-gray-600 mb-4">
              En mild, helkroppsmassage som främjar avslappning och minskar
              stress.
            </p>
            <p className="text-lg font-bold text-pink-600">1 timme - 600 SEK</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Djupvävnadsmassage
            </h3>
            <p className="text-gray-600 mb-4">
              Fokuserar på att lindra muskelspänningar och ömhet, perfekt för de
              med kronisk smärta.
            </p>
            <p className="text-lg font-bold text-pink-600">1 timme - 750 SEK</p>
          </div>

          <div className="bg-white shadow-lg rounded-lg p-6 text-center max-w-xs">
            <h3 className="text-xl font-semibold text-pink-600 mb-4">
              Hot Stone Massage
            </h3>
            <p className="text-gray-600 mb-4">
              Värme från stenar hjälper till att slappna av stela muskler och
              förbättra cirkulationen, vilket ger djup avslappning.
            </p>
            <p className="text-lg font-bold text-pink-600">1 timme - 800 SEK</p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg text-gray-700 mb-6">
            Är du redo att uppleva den bästa avkopplingen i ditt liv? Boka din
            tid idag och ge dig själv en välförtjänt paus.
          </p>
          <a
            href="/contact"
            className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition duration-200"
          >
            Boka en Tid
          </a>
        </div>
      </section>
    </main>
  );
}
