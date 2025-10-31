"use client";
import Link from "next/link";
import {
  ArrowRight,
  Leaf,
  Sparkles,
  BookOpen,
  Coffee,
  Utensils,
  Wine,
  Snowflake,
  Apple,
  Wheat,
  Heart,
  Sprout,
  Shirt,
  UtensilsCrossed,
  Gem,
} from "lucide-react";

export default function Collections() {
  const collections = [
    {
      name: "Bitter/Herbal drinks",
      slug: "bitter-herbal-drinks",
      description: "Traditional herbal remedies and bitter tonics for wellness",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-700",
      itemCount: "23 items",
    },
    {
      name: "Body care",
      slug: "body-care",
      description:
        "Natural skincare and body products from African ingredients",
      icon: Sparkles,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-700",
      itemCount: "18 items",
    },
    {
      name: "Books",
      slug: "books",
      description: "Literature by African and Black authors across genres",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-700",
      itemCount: "45 items",
    },
    {
      name: "Breakfast/Beverages",
      slug: "breakfast-beverages",
      description: "Morning delights and refreshing traditional drinks",
      icon: Coffee,
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      itemCount: "32 items",
    },
    {
      name: "Cooking condiment",
      slug: "cooking-condiments",
      description: "Essential flavor enhancers for authentic African cooking",
      icon: Utensils,
      color: "from-red-500 to-rose-600",
      bgColor: "bg-red-50",
      textColor: "text-red-700",
      itemCount: "28 items",
    },
    {
      name: "Drinks",
      slug: "drinks",
      description: "Refreshing beverages and traditional African drinks",
      icon: Wine,
      color: "from-purple-500 to-violet-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-700",
      itemCount: "15 items",
    },
    {
      name: "Frozen",
      slug: "frozen",
      description: "Fresh frozen foods preserved at their peak flavor",
      icon: Snowflake,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-700",
      itemCount: "12 items",
    },
    {
      name: "Fruits/Vegetables",
      slug: "fruits-vegetables",
      description: "Fresh and preserved produce from African farms",
      icon: Apple,
      color: "from-lime-500 to-green-600",
      bgColor: "bg-lime-50",
      textColor: "text-lime-700",
      itemCount: "36 items",
    },
    {
      name: "Grains/Flours",
      slug: "grains-flours",
      description:
        "Traditional grains and specialty flours for authentic cooking",
      icon: Wheat,
      color: "from-yellow-500 to-amber-600",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-700",
      itemCount: "25 items",
    },
    {
      name: "Hair/Beauty",
      slug: "hair-beauty",
      description: "Natural hair care and beauty products with African roots",
      icon: Heart,
      color: "from-fuchsia-500 to-purple-600",
      bgColor: "bg-fuchsia-50",
      textColor: "text-fuchsia-700",
      itemCount: "22 items",
    },
    {
      name: "Herbs/Spices",
      slug: "herbs-spices",
      description: "Aromatic herbs and spices for authentic flavor profiles",
      icon: Sprout,
      color: "from-emerald-500 to-teal-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-700",
      itemCount: "41 items",
    },
    {
      name: "Laundry/Cleaning",
      slug: "laundry-cleaning",
      description:
        "Natural cleaning products with traditional African formulas",
      icon: Shirt,
      color: "from-sky-500 to-blue-600",
      bgColor: "bg-sky-50",
      textColor: "text-sky-700",
      itemCount: "14 items",
    },
    {
      name: "Noodles/Pasta",
      slug: "noodles-pasta",
      description: "African-inspired pasta varieties and traditional noodles",
      icon: UtensilsCrossed,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-700",
      itemCount: "19 items",
    },
    {
      name: "Spreads/Sweeteners",
      slug: "spreads-sweeteners",
      description:
        "Natural sweeteners and delicious spreads from local ingredients",
      icon: Gem,
      color: "from-amber-400 to-yellow-500",
      bgColor: "bg-amber-50",
      textColor: "text-amber-700",
      itemCount: "27 items",
    },
  ];

  return (
    <div className="w-full py-16 bg-gradient-to-b from-white to-amber-50">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Collections
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover authentic African products across different categories,
            each telling a unique story of tradition and flavor.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 p-25 lg:pt-15 pt-10 grid-cols-1 overflow-x-auto pb-8">
        {collections.map((collection, index) => (
          <div
            key={collection.slug}
            className="flex-shrink-0 w-80 snap-start group p-2"
          >
            <Link href={`/collections/${collection.slug}`}>
              <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-100 overflow-hidden h-full">
                {/* Icon Header */}
                <div
                  className={`relative h-32 bg-gradient-to-r ${collection.color} p-6`}
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm`}
                    >
                      <collection.icon className="text-white" size={32} />
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium`}
                    >
                      {collection.itemCount}
                    </span>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-white/10 rounded-full"></div>
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/10 rounded-full"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-amber-600 transition-colors">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                    {collection.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${collection.bgColor} ${collection.textColor}`}
                    >
                      Shop Collection
                    </span>
                    <div className="w-8 h-8 bg-gray-100 group-hover:bg-amber-100 rounded-full flex items-center justify-center transition-colors duration-300">
                      <ArrowRight
                        className="text-gray-400 group-hover:text-amber-500 transition-colors duration-300"
                        size={16}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
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
