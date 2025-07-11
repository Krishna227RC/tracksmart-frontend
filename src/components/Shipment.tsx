// src/components/Shipments.tsx

import { useEffect, useState } from 'react';
import axios from '../api/axios';

interface Shipment {
  id: string;
  status: string;
  origin: string;
  destination: string;
  expectedDelivery: string;
}

const Shipments = () => {
  const [shipments, setShipments] = useState<Shipment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await axios.get('/shipments'); // change this path if needed
        setShipments(response.data);
      } catch (err) {
        setError('Failed to fetch shipments');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchShipments();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Shipments</h2>
      <div className="grid gap-4">
        {shipments.map((shipment) => (
          <div
            key={shipment.id}
            className="border border-gray-200 rounded-md p-4 shadow-md"
          >
            <p><strong>Status:</strong> {shipment.status}</p>
            <p><strong>Origin:</strong> {shipment.origin}</p>
            <p><strong>Destination:</strong> {shipment.destination}</p>
            <p><strong>Expected Delivery:</strong> {shipment.expectedDelivery}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shipments;
