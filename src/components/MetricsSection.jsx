import React from "react";

export default function MetricsSection() {
  return (
    <section className="bg-white pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
          70% of alerts resolved in under 5 minutes
        </h2>

        {/* Subheading */}
        <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
          With Incidentry, you get your most tenured engineer on-call all the
          time—giving your teams more time to build.
        </p>

        {/* Cards */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <span className="text-purple-600 text-xl">⚡</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Fast & Reliable
            </h3>
            <p className="text-gray-600 text-sm">
              Standardized incident response at scale
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <span className="text-purple-600 text-xl">👥</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Outcomes, Not Just AI
            </h3>
            <p className="text-gray-600 text-sm">
              Forward Deployed Engineers tune your runbooks
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <span className="text-purple-600 text-xl">🧠</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Built for Scale
            </h3>
            <p className="text-gray-600 text-sm">
              Knowledge graph + optimized AI tools
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 mx-auto rounded-xl bg-purple-100 flex items-center justify-center mb-6">
              <span className="text-purple-600 text-xl">🛡️</span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Enterprise Ready
            </h3>
            <p className="text-gray-600 text-sm">
              SOC 2 Type II, self-host options
            </p>
          </div>
        </div>

        {/* Bottom Link */}
        <div className="mt-14">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:underline"
          >
            Why engineering leaders choose Incidentry
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
