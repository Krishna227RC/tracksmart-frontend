import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">TrackSmart</div>
      <ul className="flex gap-6 text-sm font-medium">
        <li className="hover:text-gray-200 cursor-pointer">Dashboard</li>
        <li className="hover:text-gray-200 cursor-pointer">Shipments</li>
        <li className="hover:text-gray-200 cursor-pointer">Analytics</li>
        <li className="hover:text-gray-200 cursor-pointer">Help</li>
      </ul>
    </nav>
  );
};

export default Navbar;
