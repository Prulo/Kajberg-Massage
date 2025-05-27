import Header from "../../app/components/Header";

export default function PriserPage() {
  return (
    <main className="min-h-screen p-6 bg-gray-50 bg-gradient-to-b from-teal-50 to-white text-gray-800">
      <Header />
      <section className="text-center py-14 pt-20">
        <h1 className="text-4xl font-bold mb-6">Massagepriser</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Utforska vårt utbud av massagebehandlingar. Välj det perfekta
          alternativet för att slappna av och återhämta dig.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">
            Klassisk massage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            En lugnande helkroppsmassage som främjar avslappning och minskar
            stress.
          </p>
          <div className="text-xl font-bold text-teal-500 mb-4">
            1 timme – 600 kr
          </div>
          <p className="text-gray-500">
            Slappna av i kropp och sinne med mjuka rörelser och rytmiska
            tekniker.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">
            Djupvävnadsmassage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Riktar in sig på djupare muskel- och bindvävslager för
            smärtlindring.
          </p>
          <div className="text-xl font-bold text-teal-500 mb-4">
            1 timme – 750 kr
          </div>
          <p className="text-gray-500">
            Perfekt för kronisk muskelspänning eller stelhet.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">
            Hot stone-massage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            En avslappnande massage med varma stenar som lindrar
            muskelspänningar och stress.
          </p>
          <div className="text-xl font-bold text-teal-500 mb-4">
            1 timme – 800 kr
          </div>
          <p className="text-gray-500">
            Värmda stenar ger djup avslappning och förbättrad cirkulation.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">
            Idrottsmassage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Fokuserar på muskelgrupper som används vid träning för ökad
            rörlighet och minskad ömhet.
          </p>
          <div className="text-xl font-bold text-teal-500 mb-4">
            1 timme – 700 kr
          </div>
          <p className="text-gray-500">
            Perfekt för idrottare eller dig som upplever muskelstelhet efter
            fysisk aktivitet.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">
            Aromaterapimassage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            En avslappnande massage med eteriska oljor som balanserar kropp och
            sinne.
          </p>
          <div className="text-xl font-bold text-teal-500 mb-4">
            1 timme – 700 kr
          </div>
          <p className="text-gray-500">
            Främjar emotionellt och fysiskt välbefinnande med hjälp av
            terapeutiska oljor.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-teal-500 mb-4">
            Par-massage
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Njut av en avslappnande massage tillsammans med din partner i samma
            rum.
          </p>
          <div className="text-xl font-bold text-teal-500 mb-4">
            1 timme – 1 200 kr
          </div>
          <p className="text-gray-500">
            Perfekt för avslappning och gemenskap med din älskade.
          </p>
        </div>
      </section>
    </main>
  );
}
