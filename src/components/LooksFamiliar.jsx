import React, { useState } from "react";

const tabs = [
  "Log Analysis",
  "Metrics & Dashboards",
  "APM / Traces",
  "Events & Deployments",
  "Code Analysis",
  "Internal APIs / MCP Tools",
];

const logSteps = [
  "check document service logs. look for upload failures",
  "check cleanup job logs for the last 3 days (service: cleanup-job) - were there any failures for this client?",
  "check auth failure count in logs (search for 'auth failed') - plot over 2 days to see if there's a spike",
  "Are errors specific to a host? (search for status_code: 500 and check log counts faceted by hostname)",
];

export default function LooksFamiliar() {
  const [activeTab, setActiveTab] = useState("Log Analysis");

  return (
    <section className="bg-white pt-20 pb-28">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Looks familiar?
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          These are real steps from production runbooks. Incidentry can execute
          all of them.
        </p>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-lg border font-medium text-sm transition
                ${
                  activeTab === tab
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white text-gray-700 border-gray-200 hover:border-gray-300"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl border border-gray-200 shadow-lg overflow-hidden text-left">
          {/* Dark Header */}
          <div className="bg-slate-900 text-white px-6 py-4 font-semibold">
            {activeTab}
          </div>

          {/* Content */}
          <div className="bg-white divide-y divide-gray-200">
            {logSteps.map((step, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition cursor-pointer"
              >
                <div className="flex items-start gap-3">
                  <span className="text-gray-400 mt-0.5">›</span>
                  <p className="font-mono text-sm text-gray-800">{step}</p>
                </div>

                <span className="text-gray-400">⌄</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Link */}
        <div className="mt-12">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:underline"
          >
            See sample runbooks
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
