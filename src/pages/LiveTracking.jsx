import { useEffect, useState, Fragment } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import axios from "../axios";

// ✅ Fix leaflet marker icon path
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function LiveTracking() {
  const [shipments, setShipments] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const res = await axios.get("/api/shipments");
        setShipments(res.data);
      } catch (err) {
        setError("❌ Failed to load shipments.");
      }
    };

    fetchShipments();
  }, []);

  return (
    <div className="h-[85vh] w-full rounded-lg shadow-xl overflow-hidden">
      <h1 className="text-3xl font-bold text-indigo-800 text-center mb-4">
        🌐 Live Shipment Tracking
      </h1>

      {error && (
        <p className="text-center text-red-500 font-medium mb-2">{error}</p>
      )}

      <MapContainer
        center={[23.2599, 77.4126]} // Central India
        zoom={5.3}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {shipments.map((shipment, i) => {
          const {
            id,
            origin,
            destination,
            status,
            originCoords,
            destinationCoords,
          } = shipment;

          if (!originCoords || !destinationCoords) return null;

          return (
            <Fragment key={id}>
              {/* Marker at Origin */}
              <Marker position={originCoords}>
                <Popup>
                  📦 <strong>{id}</strong> <br />
                  From: {origin}
                </Popup>
              </Marker>

              {/* Marker at Destination */}
              <Marker position={destinationCoords}>
                <Popup>
                  📦 <strong>{id}</strong> <br />
                  To: {destination}
                </Popup>
              </Marker>

              {/* Route Line */}
              <Polyline
                positions={[originCoords, destinationCoords]}
                pathOptions={{ color: "blue", weight: 3 }}
              />
            </Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
}
