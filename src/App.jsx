import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Shipments from "./pages/Shipments";
import ShipmentDetails from "./pages/ShipmentDetails";
import Analytics from "./pages/Analytics";
import Help from "./pages/Help";
import LiveTracking from "./pages/LiveTracking";
import Dashboard from "./pages/Dashboard";
import AddShipment from "./pages/AddShipment"; // ✅ New import

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="shipments" element={<Shipments />} />
          <Route path="shipments/:id" element={<ShipmentDetails />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="help" element={<Help />} />
          <Route path="tracking" element={<LiveTracking />} />
          <Route path="add-shipment" element={<AddShipment />} /> {/* ✅ New Route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
