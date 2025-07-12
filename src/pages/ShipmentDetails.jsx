import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";

export default function ShipmentDetails() {
  const { id } = useParams();
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShipment = async () => {
      try {
        const res = await axios.get(`/api/shipments/${id}`);
        setShipment(res.data);
      } catch (err) {
        setError("❌ Failed to fetch shipment details.");
      }
    };
    fetchShipment();
  }, [id]);

  if (error) {
    return (
      <div className="p-10 text-center text-red-500 text-lg font-semibold">
        {error}
      </div>
    );
  }

  if (!shipment) {
    return (
      <div className="p-10 text-center text-gray-500 text-lg font-medium">
        ⏳ Loading shipment...
      </div>
    );
  }

  return (
    <div className="p-8 bg-gradient-to-br from-white to-blue-50 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-800 text-center mb-8">
        📦 Shipment Details - {shipment.id}
      </h1>

      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg space-y-6">
        <div className="flex justify-between">
          <p className="font-semibold text-gray-700">Origin:</p>
          <p className="text-gray-900">{shipment.origin}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold text-gray-700">Destination:</p>
          <p className="text-gray-900">{shipment.destination}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold text-gray-700">Status:</p>
          <p className="text-blue-600 font-medium">{shipment.status}</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold text-gray-700">ETA:</p>
          <p className="text-gray-900">
            {new Date(shipment.eta).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
