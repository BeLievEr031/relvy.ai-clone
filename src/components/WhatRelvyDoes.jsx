import React from "react";

export default function WhatRelvyDoes() {
  return (
    <section className="bg-white pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          What Incidentry Does
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          Incidentry executes your natural language runbooks for on-call and
          incident response. It is equipped with foundational tools that can
          analyze telemetry data and code, and can be extended with custom
          connectors for your internal workflows.
        </p>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <span className="text-purple-600 font-bold">📄</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Runbooks</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Centralized, executable runbooks in Markdown. Import existing
              docs, AI helps maintain them.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <span className="text-purple-600 font-bold">🤖</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">AI On-call</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI that executes your runbooks reliably, analyzing telemetry data
              at scale.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <span className="text-purple-600 font-bold">🔌</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Integrations
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Works with your existing tools—telemetry, code, infra, and custom
              APIs.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <span className="text-purple-600 font-bold">📓</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Notebooks</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Collaborative debugging notebooks with rich visualizations for
              every execution.
            </p>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:underline"
          >
            Explore the platform
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
