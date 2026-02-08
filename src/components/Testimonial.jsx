import React from "react";

export default function Testimonial() {
  return (
    <section className="bg-white pt-16 pb-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-2xl border border-gray-200 bg-white p-10 md:p-14 shadow-sm">
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">“</span>
          </div>

          {/* Quote Text */}
          <p className="text-xl md:text-2xl leading-relaxed text-gray-900">
            "What excited me about Incidentry was the potential to reduce our
            on-call burden. It's been great to see Incidentry in action
            executing our runbooks across our entire observability stack — less
            context switching and more operational standardization as we expand
            our team."
          </p>

          {/* Author */}
          <div className="mt-8 flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/80?img=12"
              alt="Aniket Dash"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-gray-900">Sumeet</p>
              <p className="text-sm text-gray-600">
                Platform Infrastructure Lead, Blend
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
