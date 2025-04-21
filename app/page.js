import Header from "../app/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <Header />
      <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Kajberg Massage</h1>
        <p className="text-lg md:text-xl max-w-xl">
          Relaxation & healing through touch. Let your stress melt away.
        </p>
      </section>
    </main>
  );
}
