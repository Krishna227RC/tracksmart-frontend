import { useState } from "react";
import axios from "../axios";
import { useNavigate } from "react-router-dom";

export default function AddShipment() {
  const [formData, setFormData] = useState({
    id: "",
    origin: "",
    destination: "",
    status: "In Transit",
    eta: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/shipments", formData);
      setMessage("✅ Shipment added successfully!");
      setTimeout(() => navigate("/shipments"), 1000);
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.error || "Failed to add shipment."));
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-white to-blue-50">
      <h1 className="text-3xl font-bold text-indigo-800 mb-8 text-center">📦 Add New Shipment</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 shadow-xl rounded-xl space-y-6"
      >
        {["id", "origin", "destination", "eta"].map((field) => (
          <div key={field}>
            <label className="block text-gray-700 mb-1 capitalize">{field}</label>
            <input
              type={field === "eta" ? "datetime-local" : "text"}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>
        ))}

        <div>
          <label className="block text-gray-700 mb-1">Status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-400"
          >
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
            <option value="Delayed">Delayed</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Add Shipment
        </button>

        {message && (
          <div className="text-center mt-4 font-medium text-indigo-700">{message}</div>
        )}
      </form>
    </div>
  );
}
