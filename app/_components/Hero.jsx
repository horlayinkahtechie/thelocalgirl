"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center text-center h-[90vh] bg-gradient-to-br from-amber-700 via-amber-800 to-yellow-900 text-white"
      // Replace the above gradient with your image later:
      // style={{ backgroundImage: "url('/images/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <p className="uppercase tracking-wide text-amber-300 font-medium mb-3">
          Authentic African Market
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight">
          Bringing Africa to Your Doorstep
        </h1>

        <p className="text-base sm:text-lg text-amber-100 mb-8">
          Explore a world of African groceries, spices, and fashion. All sourced
          from trusted local farmers and artisans.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/collections/featured"
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-medium px-6 py-3 rounded-md shadow-md transition-all"
          >
            Shop Now
          </Link>
          <Link
            href="/aboutus"
            className="border border-amber-300 text-amber-300 hover:bg-amber-300 hover:text-gray-900 font-medium px-6 py-3 rounded-md transition-all"
          >
            Our story
          </Link>
        </div>
      </div>

      {/* Subtle decorative pattern (African-inspired) */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
    </section>
  );
}
