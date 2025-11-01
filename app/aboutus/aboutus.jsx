import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  BookOpen,
  Utensils,
  Users,
  ArrowRight,
  Mail,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart size={16} className="fill-amber-400" />
                Welcome to Our Story
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I&apos;m <span className="text-amber-500">Rofiat</span>, but
                around here, you can call me{" "}
                <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  That Local Girl
                </span>
                .
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                This shop started with a craving. Not just for food but for
                home. After moving away from the familiar rhythms of Nigeria, I
                began to feel a gap that groceries alone couldn&apos;t fill. I
                missed the scent of suya spices filling the street, the
                comforting taste of egusi soup, and the conversations that
                sparked over peppery jollof rice.
              </p>
            </div>

            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-amber-200 to-rose-200 shadow-2xl flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-32 h-32 bg-amber-400 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg">
                    <span className="text-4xl font-bold text-white">RG</span>
                  </div>
                  <p className="text-gray-600 italic">
                    Rofiat - That Local Girl
                  </p>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-rose-200 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>

      {/* My Why Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My <span className="text-amber-500">Why</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-rose-400 mx-auto rounded-full"></div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 lg:p-12 shadow-lg">
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed text-center italic">
              &qout;This is more than a shop. It&apos;s a love letter to
              home.&quot;
            </p>

            <div className="mt-8 space-y-4 text-gray-600 leading-relaxed">
              <p>
                When I was growing up, food was never just food. It was
                medicine. It was memory. It was a connection to something
                deeper. A simple bowl of stew could remind you of a
                grandmother&apos;s hands. A spice blend could transport you back
                to your father&apos;s roadside grill. And a book? A book could
                show you that your story mattered. That your voice mattered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Find Here Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What You&apos;ll Find Here
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every item in this store has been chosen with intention. I
              don&apos;t stock things just to fill a shelf. I stock what makes
              me feel something and I hope it&apos;ll do the same for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Groceries Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-rose-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-rose-200 transition-colors">
                <Utensils size={32} className="text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🌶️ Authentic African Groceries & Spices
              </h3>
              <p className="text-gray-600 leading-relaxed">
                From crayfish to Cameroon pepper, from bouillon cubes to
                plantain chips you&apos;ll find ingredients that remind you of
                home, help you cook with confidence, or discover something new
                with excitement.
              </p>
            </div>

            {/* Books Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                <BookOpen size={32} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                📚 Books by African and Black Authors
              </h3>
              <p className="text-gray-600 leading-relaxed">
                You&apos;ll find novels, cookbooks, memoir and children&apos;s
                books that reflect our voices, our rhythms, and our realities.
              </p>
            </div>

            {/* Community Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-200 transition-colors">
                <Users size={32} className="text-amber-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                A Welcoming Space
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re African, Caribbean, Black Canadian, or
                simply someone curious about our culture, this space is for you.
                I want you to feel seen, supported, and celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-rose-500">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              The Journey Continues...
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond the store, I also write about the behind-the-scenes of
              running this small business, my personal reflections on identity
              and culture, and the beauty of African living on my newsletter. I
              share recipes from my kitchen, stories from my life, and tips for
              living joyfully in-between worlds.
            </p>

            <div className="bg-amber-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Mail className="text-amber-500" size={24} />
                <span className="text-lg font-semibold text-gray-900">
                  Follow on Substack
                </span>
              </div>
              <Link
                href="https://thatlocalgirl.substack.com"
                className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors duration-300"
              >
                thatlocalgirl.substack.com
                <ArrowRight size={16} />
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              It&apos;s a deeper way to connect with me and be part of this
              growing community that values tradition, storytelling, and flavor.
            </p>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
              Thank You for Being Here
            </h2>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Starting That Local Girl has been one of the most vulnerable,
                exciting, and fulfilling journeys of my life. Every time someone
                walks into the shop or places an order online, I feel a little
                less far from home. And I hope you feel that too.
              </p>

              <p>
                Your support means more than you know. It keeps our culture
                alive, our stories told, and our kitchens full of love.
              </p>

              <div className="bg-gradient-to-r from-amber-100 to-rose-100 rounded-2xl p-8 mt-8">
                <p className="text-xl font-semibold text-gray-800 mb-4">
                  From my heart to your home,
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl font-bold text-amber-600">
                    Rofiat
                  </span>
                  <span className="text-amber-400 text-2xl">💛</span>
                  <span className="text-2xl font-bold text-rose-500">
                    That Local Girl
                  </span>
                  <span className="text-amber-400 text-2xl">💛</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Ready to Explore?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover authentic African flavors, inspiring books, and join our
            community of culture lovers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="bg-amber-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-amber-400 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Shop Our Products
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
