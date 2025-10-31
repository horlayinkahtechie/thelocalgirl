"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ProductImage1 from "@/public/images/product1.jpg";
import ProductImage2 from "@/public/images/product2.avif";
import ProductImage3 from "@/public/images/products3.webp";
import ProductImage4 from "@/public/images/product4.avif";
import ProductImage5 from "@/public/images/Product5.jpg";

// Mock product data - replace with your actual data
const products = [
  {
    id: 1,
    title: "Organic Palm Oil",
    description:
      "Pure, natural palm oil sourced directly from sustainable African farms",
    price: "$24.99",
    originalPrice: "$29.99",
    image: ProductImage1,
    category: "Cooking Oils",
    rating: 4.8,
    reviewCount: 127,
    badge: "BESTSELLER",
    isNew: true,
  },
  {
    id: 2,
    title: "African Spice Collection",
    description: "Authentic spice blend with traditional flavors and aromas",
    price: "$18.99",
    originalPrice: "$22.99",
    image: ProductImage2,
    category: "Spices",
    rating: 4.6,
    reviewCount: 89,
    badge: "POPULAR",
    isNew: false,
  },
  {
    id: 3,
    title: "Shea Butter Cream",
    description: "100% natural shea butter for skin and hair care",
    price: "$14.99",
    image: ProductImage3,
    category: "Skincare",
    rating: 4.9,
    reviewCount: 203,
    badge: "NEW",
    isNew: true,
  },
  {
    id: 4,
    title: "Traditional Attire",
    description: "Elegant African print clothing for special occasions",
    price: "$49.99",
    originalPrice: "$59.99",
    image: ProductImage4,
    category: "Fashion",
    rating: 4.7,
    reviewCount: 64,
    badge: "TRENDING",
    isNew: false,
  },
  {
    id: 5,
    title: "Coffee Beans",
    description: "Premium African coffee beans with rich flavor profile",
    price: "$19.99",
    image: ProductImage5,
    category: "Beverages",
    rating: 4.5,
    reviewCount: 156,
    badge: "LIMITED",
    isNew: true,
  },
  {
    id: 6,
    title: "Artisan Basket",
    description: "Handwoven traditional basket for home decor",
    price: "$34.99",
    originalPrice: "$39.99",
    image: "/images/basket.jpg",
    category: "Home Decor",
    rating: 4.8,
    reviewCount: 42,
    badge: "HANDMADE",
    isNew: false,
  },
  {
    id: 7,
    title: "Natural Honey",
    description: "Pure, raw honey from African wildflowers",
    price: "$16.99",
    image: "/images/honey.jpg",
    category: "Food",
    rating: 4.9,
    reviewCount: 98,
    badge: "ORGANIC",
    isNew: false,
  },
  {
    id: 8,
    title: "Wooden Carving",
    description: "Traditional hand-carved wooden sculpture",
    price: "$89.99",
    image: "/images/carving.jpg",
    category: "Art",
    rating: 4.7,
    reviewCount: 31,
    badge: "ARTISAN",
    isNew: true,
  },
];

export default function ProductCards() {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 300;
    const newScrollLeft =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const StarRating = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${
              star <= Math.floor(rating)
                ? "text-amber-400 fill-current"
                : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">{rating}</span>
      </div>
    );
  };

  const getBadgeColor = (badge) => {
    const colors = {
      BESTSELLER: "bg-rose-500 text-white",
      POPULAR: "bg-blue-500 text-white",
      NEW: "bg-emerald-500 text-white",
      TRENDING: "bg-purple-500 text-white",
      LIMITED: "bg-amber-500 text-gray-900",
      HANDMADE: "bg-orange-500 text-white",
      ORGANIC: "bg-green-500 text-white",
      ARTISAN: "bg-indigo-500 text-white",
    };
    return colors[badge] || "bg-gray-500 text-white";
  };

  return (
    <div className="w-full lg:pl-30 lg:pr-30 pl-10 pr-10 pt-20 pb-20 mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Featured Products
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover authentic African products crafted with tradition and quality
        </p>
      </div>

      {/* Scroll Container */}
      <div className="relative">
        {/* Navigation Arrows - Desktop */}
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className="hidden lg:flex absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-rose-500 w-12 h-12 rounded-full shadow-lg border border-gray-200 items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
            aria-label="Scroll left"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className="hidden lg:flex absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-rose-500 w-12 h-12 rounded-full shadow-lg border border-gray-200 items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl"
            aria-label="Scroll right"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Products Grid */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex-shrink-0 w-80 snap-start group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${getBadgeColor(
                        product.badge
                      )}`}
                    >
                      {product.badge}
                    </span>
                    {product.isNew && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-rose-500 text-white">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white/90 hover:bg-white text-gray-700 hover:text-rose-500 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Category */}
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-black/70 text-white text-xs font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add to Cart
                    </button>
                    <button className="w-12 h-12 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicators - Mobile */}
        <div className="lg:hidden flex justify-center gap-2 mt-6">
          <button
            onClick={() => scroll("left")}
            className="bg-gray-800 hover:bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Scroll left"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="bg-gray-800 hover:bg-gray-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label="Scroll right"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <button className="bg-gradient-to-br from-amber-700 via-amber-800 to-yellow-900 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
          View All Products
        </button>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
