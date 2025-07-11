import React from "react";
import { motion } from "framer-motion";
import { Truck, MapPin, PackageSearch, Activity } from "lucide-react";

const stats = [
  { icon: <Truck size={28} />, title: "Live Shipments", value: 42 },
  { icon: <PackageSearch size={28} />, title: "Delivered Today", value: 18 },
  { icon: <MapPin size={28} />, title: "Cities Covered", value: 14 },
  { icon: <Activity size={28} />, title: "Active Routes", value: 27 },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-100 p-10">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-5xl font-extrabold text-indigo-700 mb-4 animate-pulse">
          🚚 Welcome to TrackSmart
        </h1>
        <p className="text-lg text-gray-700">
          Your all-in-one logistics tracking and analytics platform.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center hover:shadow-2xl transition-all"
          >
            <div className="text-indigo-600 mb-4">{stat.icon}</div>
            <p className="text-xl font-semibold text-gray-700">{stat.title}</p>
            <p className="text-3xl font-bold text-indigo-900 mt-2">{stat.value}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
