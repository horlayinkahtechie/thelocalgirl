import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";
import Image from "next/image";
import thatLocalGirl from "@/public/images/thatlocalgirl-logo.avif";

export default function Footer() {
  return (
    <footer className="bg-[#060625] text-white relative overflow-hidden">
      {/* Background Pattern */}

      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-amber-400 to-rose-500"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src={thatLocalGirl}
                width={70}
                height={70}
                alt="Thatlocalgirl"
              />
            </div>

            <p className="text-gray-300 leading-relaxed mb-6 text-sm">
              Bringing the authentic taste of Africa to your doorstep.
              Experience traditional flavors, handcrafted goods, and cultural
              treasures in every purchase.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                {
                  icon: Facebook,
                  href: "https://facebook.com",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: Instagram,
                  href: "https://instagram.com",
                  color: "hover:bg-pink-600",
                },
                {
                  icon: Twitter,
                  href: "https://twitter.com",
                  color: "hover:bg-sky-500",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className={`p-3 bg-gray-800 rounded-xl text-gray-300 transition-all duration-300 transform hover:scale-110 hover:text-white ${social.color}`}
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Shop All", href: "/shop" },
                { name: "New Arrivals", href: "/new" },
                { name: "Best Sellers", href: "/bestsellers" },
                { name: "Special Offers", href: "/offers" },
                { name: "Gift Cards", href: "/gift-cards" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-all duration-200 group text-sm"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Contact Us", href: "/contact" },
                { name: "Shipping Info", href: "/FAQs" },
                { name: "Returns & Exchanges", href: "/FAQs" },
                { name: "FAQs", href: "/FAQs" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-all duration-200 group text-sm"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Stay Updated
            </h4>

            <p className="text-gray-300 text-sm mb-4">
              Get exclusive deals and African cultural insights delivered to
              your inbox.
            </p>

            {/* Newsletter Form */}
            <form className="space-y-3 mb-6">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-xl transform hover:scale-105 transition-all duration-300 text-sm whitespace-nowrap"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-gray-300 hover:text-amber-400 transition-colors group">
                <Mail size={16} className="text-amber-400" />
                <span className="text-sm">support@thatlocalgirl.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors group">
                <Phone size={16} className="text-blue-400" />
                <span className="text-sm">+234 812 345 6789</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 hover:text-rose-400 transition-colors group">
                <MapPin size={16} className="text-rose-400" />
                <span className="text-sm">Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>
                © {new Date().getFullYear()} Africashop. All rights reserved.
              </span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {[
                { name: "Privacy Policy", href: "/privacy-policy" },
                { name: "Terms of Service", href: "/terms" },
                { name: "Cookie Policy", href: "/cookies" },
                { name: "Accessibility", href: "/accessibility" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-amber-400 transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Payment Methods */}
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {["💳", "📱", "🏦", "🔒"].map((icon, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center text-xs"
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-8 pt-6 border-t border-gray-800">
          {[
            { text: "Secure Payment", icon: "." },
            { text: "Fast Shipping", icon: "." },
            { text: "24/7 Support", icon: "." },
            { text: "Quality Guarantee", icon: "." },
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>{badge.icon}</span>
              <span>{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
