import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Shipments() {
  const [shipments, setShipments] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://tracksmart-backend.onrender.com/api/shipments")
      .then((res) => setShipments(res.data))
      .catch((err) => console.error("Failed to fetch shipments:", err));
  }, []);

  const filteredShipments = shipments.filter((shipment) => {
    const matchesId = shipment.id
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus
      ? shipment.status === filterStatus
      : true;
    return matchesId && matchesStatus;
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-indigo-800 mb-8 text-center">
        🚚 All Shipments
      </h1>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <input
          type="text"
          placeholder="Search by Shipment ID"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">All Statuses</option>
          <option value="Delivered">Delivered</option>
          <option value="In Transit">In Transit</option>
          <option value="Delayed">Delayed</option>
        </select>
      </div>

      {filteredShipments.length === 0 ? (
        <p className="text-center text-gray-500">No matching shipments found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredShipments.map((shipment) => (
            <div
              key={shipment._id}
              className="bg-white shadow-lg rounded-xl p-6 cursor-pointer hover:shadow-xl transition duration-300"
              onClick={() => navigate(`/shipments/${shipment.id}`)}
            >
              <h2 className="text-xl font-semibold text-indigo-700 mb-2">
                📦 {shipment.id}
              </h2>
              <p className="text-gray-600">
                <span className="font-medium">From:</span> {shipment.origin}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">To:</span> {shipment.destination}
              </p>
              <p className="mt-2">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold text-white ${
                    shipment.status === "Delivered"
                      ? "bg-green-500"
                      : shipment.status === "In Transit"
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  }`}
                >
                  {shipment.status}
                </span>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
