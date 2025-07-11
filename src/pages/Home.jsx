import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    fetch("https://tracksmart-backend.onrender.com/api/shipments")
      .then((res) => res.json())
      .then((data) => setShipments(data))
      .catch((err) => console.error("Error fetching shipments", err));
  }, []);

  const total = shipments.length;
  const delivered = shipments.filter(s => s.status === "Delivered").length;
  const inTransit = shipments.filter(s => s.status === "In Transit").length;

  return (
    <div className="p-8 bg-gradient-to-br from-indigo-50 to-white min-h-screen font-sans">
      {/* Welcome Section */}
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="text-5xl font-extrabold text-indigo-800 mb-4 drop-shadow">
          🚚 Welcome to <span className="text-indigo-600">TrackSmart</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Track, analyze, and optimize your logistics with real-time dashboards and insights.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
        {[ 
          { label: "📦 Total Shipments", count: total, color: "text-indigo-600" },
          { label: "✅ Delivered", count: delivered, color: "text-green-600" },
          { label: "🚚 In Transit", count: inTransit, color: "text-yellow-500" },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="bg-white shadow-xl-glow rounded-2xl p-6 text-center hover:scale-105 transform transition duration-300"
          >
            <h2 className={`text-xl font-semibold ${stat.color} mb-2`}>{stat.label}</h2>
            <p className="text-4xl font-bold text-gray-800">{stat.count}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 bg-indigo-100 rounded-2xl p-10 text-center shadow-inner animate-fade-in-up">
        <h3 className="text-2xl font-bold text-indigo-800 mb-4">
          Ready to dive into real-time shipment insights?
        </h3>
        <p className="text-gray-600 mb-6">
          Go to the Shipments tab to view all active and historical logistics data.
        </p>
        <a
          href="/shipments"
          className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition"
        >
          View Shipments <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
