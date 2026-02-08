import React from "react";

export default function Hero() {
  return (
    <div className=" bg-white">
      {/* Navbar */}
      <header className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-md"></div> */}
          <span className="text-xl font-bold text-gray-900">Incidentry</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-gray-900">
            Why Incidentry
          </a>
          <a href="#" className="hover:text-gray-900">
            Platform
          </a>
          <a href="#" className="hover:text-gray-900">
            Resources
          </a>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">
            Log in
          </a>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-semibold transition">
            Book A Demo
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-8">
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
          Your runbooks, <span className="text-purple-600">automated</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Reduce MTTR with AI powered on-call runbook execution.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-7 py-3 rounded-xl font-semibold transition">
            Book a Demo
          </button>

          <button className="border border-gray-300 hover:border-gray-400 px-7 py-3 rounded-xl font-semibold text-gray-700 flex items-center gap-2 transition">
            See it in action
            <span className="text-lg">↓</span>
          </button>
        </div>

        {/* YC Badge */}
        <div className="mt-10 flex items-center gap-2 text-gray-500 text-sm">
          <span>Backed by</span>
          <div className="bg-orange-500 text-white font-bold px-2 py-0.5 rounded">
            Y
          </div>
          <span>Combinator</span>
        </div>
      </main>
    </div>
  );
}
