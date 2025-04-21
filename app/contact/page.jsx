import Header from "../../app/components/Header";

export default function ContactPage() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <Header />
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
          We would love to hear from you! Reach out to us for any inquiries or
          appointment bookings.
        </p>
      </section>

      <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            You can reach us by phone, email, or by filling out the contact form
            below.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
            <p className="text-lg text-gray-500">kajberg@massage.com</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Phone</h3>
            <p className="text-lg text-gray-500">+46 70 123 45 67</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Address</h3>
            <p className="text-lg text-gray-500">
              123 Massage St, Stockholm, Sweden
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">
            Send Us a Message
          </h2>
          <form action="#" method="POST" className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-lg text-gray-700 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Full Name"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-lg text-gray-700 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Your Email Address"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-lg text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                placeholder="Write your message here"
                rows="6"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-pink-600 text-white px-8 py-3 rounded-lg hover:bg-pink-700 transition duration-200"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
