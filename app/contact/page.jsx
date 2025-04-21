import Header from "../../app/components/header";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-6">
      <Header />
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p className="text-lg">
        You can reach me at: <strong>kajberg@massage.com</strong>
      </p>
      <p className="mt-2">
        Or call: <strong>+46 70 123 45 67</strong>
      </p>
    </main>
  );
}
