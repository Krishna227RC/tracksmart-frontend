import { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fixing default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Dummy shipment with animation simulation
const shipment = {
  id: "SHP001",
  origin: { lat: 19.076, lng: 72.8777 }, // Mumbai
  destination: { lat: 28.6139, lng: 77.209 }, // Delhi
};

function AnimateMarker({ from, to }) {
  const [position, setPosition] = useState(from);
  const step = useRef(0);
  const totalSteps = 200;

  useEffect(() => {
    const interval = setInterval(() => {
      if (step.current >= totalSteps) {
        clearInterval(interval);
        return;
      }

      const lat =
        from.lat + ((to.lat - from.lat) * step.current) / totalSteps;
      const lng =
        from.lng + ((to.lng - from.lng) * step.current) / totalSteps;

      setPosition({ lat, lng });
      step.current += 1;
    }, 100);

    return () => clearInterval(interval);
  }, [from, to]);

  return (
    <Marker position={position}>
      <Popup>
        <p className="text-sm">
          📦 Shipment <strong>{shipment.id}</strong> <br />
          🚚 In Transit from <strong>Mumbai</strong> to <strong>Delhi</strong>
        </p>
      </Popup>
    </Marker>
  );
}

export default function LiveTracking() {
  return (
    <div className="h-[85vh] w-full rounded-lg shadow-xl overflow-hidden">
      <h1 className="text-3xl font-bold text-indigo-800 text-center mb-4">
        🌐 Live Shipment Tracking
      </h1>

      <MapContainer
        center={[23.2599, 77.4126]} // Centered roughly in India
        zoom={5.5}
        scrollWheelZoom={true}
        className="h-full w-full rounded-lg"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />
        <AnimateMarker from={shipment.origin} to={shipment.destination} />
      </MapContainer>
    </div>
  );
}
