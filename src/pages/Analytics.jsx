import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const dummyData = [
  { city: "Mumbai", shipments: 24 },
  { city: "Delhi", shipments: 18 },
  { city: "Bangalore", shipments: 12 },
  { city: "Hyderabad", shipments: 9 },
];

const pieData = [
  { name: "Delivered", value: 30 },
  { name: "In Transit", value: 24 },
  { name: "Delayed", value: 9 },
];

const COLORS = ["#22c55e", "#3b82f6", "#ef4444"]; // green, blue, red

const summaryStats = [
  { title: "Total Shipments", value: 63, color: "bg-indigo-500" },
  { title: "In Transit", value: 24, color: "bg-blue-500" },
  { title: "Delivered", value: 30, color: "bg-green-500" },
  { title: "Delayed", value: 9, color: "bg-red-500" },
];

export default function Analytics() {
  return (
    <div className="p-8 bg-gradient-to-br from-indigo-50 to-white min-h-screen">
      <h1 className="text-4xl font-bold text-indigo-700 mb-10 text-center drop-shadow-sm">
        📊 Shipment Analytics
      </h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {summaryStats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-xl shadow-md text-white p-6 flex flex-col items-center justify-center ${stat.color}`}
          >
            <p className="text-lg font-semibold">{stat.title}</p>
            <p className="text-3xl font-bold mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
        <h2 className="text-xl font-bold mb-4 text-gray-700 text-center">
          🚛 Shipments by City
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dummyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="shipments" fill="#6366f1" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-gray-700 mb-4 text-center">
          📦 Shipment Status Breakdown
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
