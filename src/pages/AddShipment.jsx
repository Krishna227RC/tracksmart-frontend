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

  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    setMessage("");
    try {
      const res = await axios.post("/api/shipments", formData);
      setMessage("✅ Shipment added successfully!");
      setTimeout(() => navigate("/shipments"), 1500);
    } catch (err) {
      setMessage("❌ " + (err.response?.data?.error || "Failed to add shipment."));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-white to-blue-50 animate-fade-in-up">
      <h1 className="text-3xl font-extrabold text-indigo-800 mb-8 text-center">
        📦 Add New Shipment
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-white p-8 shadow-2xl rounded-xl space-y-6 transition-all duration-300"
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
          disabled={loading}
          className={`w-full font-semibold py-3 rounded-lg transition text-white ${
            loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Adding..." : "Add Shipment"}
        </button>

        {message && (
          <div
            className={`text-center mt-4 font-medium ${
              message.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
