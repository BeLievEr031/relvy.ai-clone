import React from "react";

export default function RunbookPreview() {
  return (
    <div className="w-full flex justify-center px-6 mt-32 pb-16 bg-white">
      <div className="w-full max-w-5xl rounded-2xl border border-gray-200 shadow-xl overflow-hidden bg-white">
        {/* Window Header */}
        <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 border-b border-gray-200">
          {/* Mac Buttons */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>

          <p className="ml-4 text-sm font-mono text-gray-600">
            checkout-service-runbook.md
          </p>
        </div>

        {/* Content */}
        <div className="p-8 font-mono text-sm leading-relaxed text-gray-800 bg-white">
          <h1 className="text-purple-600 font-bold text-lg mb-4">
            # Checkout service runbook
          </h1>

          <h2 className="text-indigo-600 font-semibold mb-4">
            ## High Response Time Alerts
          </h2>

          <ul className="space-y-3">
            <li>
              - Identify endpoints with highest latency correlated with alert.
            </li>
            <li>
              - On the APM page, check if there's also a throughput increase.
            </li>
            <li>- If there's a throughput surge:</li>

            <li className="ml-6">
              - check if any marketing promos went live{" "}
              <span className="text-green-600">
                (event_type = 'PROMO_LAUNCH')
              </span>
              . These can sometimes cause traffic spikes.
            </li>

            <li className="ml-6">
              - If the traffic surge is expected, then consider scaling up the
              workers.
            </li>
          </ul>
        </div>

        {/* Footer CTA */}
        <div className="flex justify-end px-6 py-5 bg-gray-50 border-t border-gray-200">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center gap-2 transition">
            See Incidentry execute this runbook
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
