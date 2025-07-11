import { NavLink, Outlet } from "react-router-dom";
import {
  HomeIcon,
  PackageSearch,
  BarChart3,
  HelpCircle,
  LocateFixed,
} from "lucide-react";

export default function Layout() {
  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-indigo-800 to-indigo-600 text-white shadow-lg p-6">
        <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
          <span className="text-3xl">🚚</span> TrackSmart
        </h1>
        <nav className="flex flex-col gap-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-indigo-700 transition ${
                isActive ? "bg-indigo-700" : ""
              }`
            }
          >
            <HomeIcon size={18} /> Dashboard
          </NavLink>

          <NavLink
            to="/shipments"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-indigo-700 transition ${
                isActive ? "bg-indigo-700" : ""
              }`
            }
          >
            <PackageSearch size={18} /> Shipments
          </NavLink>

          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-indigo-700 transition ${
                isActive ? "bg-indigo-700" : ""
              }`
            }
          >
            <BarChart3 size={18} /> Analytics
          </NavLink>

          <NavLink
            to="/tracking"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-indigo-700 transition ${
                isActive ? "bg-indigo-700" : ""
              }`
            }
          >
            <LocateFixed size={18} /> Live Tracking
          </NavLink>

          <NavLink
            to="/help"
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded hover:bg-indigo-700 transition ${
                isActive ? "bg-indigo-700" : ""
              }`
            }
          >
            <HelpCircle size={18} /> Help
          </NavLink>
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-gray-100 overflow-y-auto p-8">
        <Outlet />
      </main>
    </div>
  );
}
