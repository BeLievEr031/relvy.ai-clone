import React from "react";

export default function FinalCTAAndFooter() {
  return (
    <>
      {/* Final CTA Section */}
      <section className="bg-purple-600 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Start automating your incident response
          </h2>

          <div className="mt-8">
            <button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition">
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 font-bold text-gray-900">
                {/* <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-md"></div> */}
                <span>Incidentry</span>
              </div>

              {/* Placeholder Badge */}
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-xs font-semibold text-blue-600">
                <img src="https://relvy.ai/soc2-logo.png" alt="" />
              </div>
            </div>

            {/* Right Links */}
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-900">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-6 text-center text-sm text-gray-500">
            © 2026 Incidentry. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
