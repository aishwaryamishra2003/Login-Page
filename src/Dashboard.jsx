import React from "react";

export default function Dashboard() {
  return (
    <div 
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: "url('/assets/pexels-sohi-807598.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-8 py-4 bg-white bg-opacity-70 backdrop-blur-md z-10">
        <h1 className="text-blue-600 font-bold text-xl cursor-pointer">My Dashboard</h1>
        <ul className="flex space-x-8 text-gray-700 font-semibold">
          <li className="hover:text-blue-600 cursor-pointer transition">Home</li>
          <li className="hover:text-blue-600 cursor-pointer transition">About</li>
          <li className="hover:text-blue-600 cursor-pointer transition">Contact</li>
        </ul>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto pt-24 px-6 text-white">
        <h2 className="text-4xl font-bold mb-4 drop-shadow-lg">Welcome to your dashboard!</h2>
        <p className="text-lg max-w-2xl drop-shadow-md">
          Here is some important content for you. You can customize this as per your needs.
        </p>
      </main>
    </div>
  );
}
