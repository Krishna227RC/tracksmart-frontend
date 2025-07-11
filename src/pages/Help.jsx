export default function Help() {
  return (
    <div className="p-10 min-h-screen bg-gradient-to-br from-indigo-50 to-white text-gray-800">
      <h1 className="text-4xl font-extrabold text-center bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent mb-10">
        🛟 Need Help? We’ve Got You!
      </h1>

      {/* Support Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {/* FAQ Card */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">📚 Frequently Asked</h2>
          <ul className="text-sm space-y-3">
            <li>
              <strong>🚚 How do I track a shipment?</strong>
              <p>Visit the Shipments tab and search by ID.</p>
            </li>
            <li>
              <strong>📦 What does "In Transit" mean?</strong>
              <p>Your shipment is currently moving to the destination.</p>
            </li>
            <li>
              <strong>🧭 Still confused?</strong>
              <p>Scroll below to contact us directly.</p>
            </li>
          </ul>
        </div>

        {/* Contact Info Card */}
        <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-xl font-semibold text-indigo-700 mb-4">📞 Contact Information</h2>
          <p className="text-sm mb-3">
            Reach out to our friendly support team:
          </p>
          <ul className="text-sm space-y-2">
            <li>📧 <strong>Email:</strong> support@tracksmart.com</li>
            <li>📱 <strong>Phone:</strong> +91 98765 43210</li>
            <li>🕐 <strong>Hours:</strong> Mon–Fri, 9 AM – 6 PM IST</li>
          </ul>
        </div>

        {/* Action CTA */}
        <div className="bg-gradient-to-br from-pink-400 to-indigo-600 text-white rounded-2xl shadow-xl p-6 flex flex-col items-center justify-center transition hover:-translate-y-1 hover:shadow-2xl">
          <h2 className="text-xl font-semibold mb-4">⚡ Still stuck?</h2>
          <p className="text-center mb-4">
            Open a support ticket and we’ll respond within 24 hours.
          </p>
          <button className="px-4 py-2 bg-white text-indigo-700 font-bold rounded-full shadow hover:bg-gray-100 transition">
            Submit Ticket
          </button>
        </div>
      </div>

      {/* Optional Contact Form */}
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">📬 Contact Us Directly</h2>
        <form className="grid grid-cols-1 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 rounded-md font-semibold hover:bg-indigo-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
