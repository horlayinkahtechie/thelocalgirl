"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import thatlocalgirlIcon from "@/public/images/thatlocalgirl-logo.avif";
import { User, LogOut } from "lucide-react";
import { supabase } from "../lib/supabaseClient";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get current session on load
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
    };
    getSession();

    // Listen for login/logout
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setSession(null);
  };

  return (
    <header className="w-full bg-[#fafaa5] backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={thatlocalgirlIcon}
                width={70}
                height={70}
                alt="That local girl"
              />
            </Link>
          </div>

          {/* Desktop nav links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-gray-800 font-[500] hover:text-gray-900 text-sm"
            >
              Home
            </Link>
            <Link
              href="/aboutus"
              className="text-gray-800 font-[500] hover:text-gray-900 text-sm"
            >
              About us
            </Link>
            <Link
              href="/aboutus"
              className="text-gray-800 font-[500] hover:text-gray-900 text-sm"
            >
              Our team
            </Link>
            <Link
              href="/Shop"
              className="text-gray-800 font-[500] hover:text-gray-900 text-sm"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              className="text-gray-800 font-[500] hover:text-gray-900 text-sm"
            >
              Contact us
            </Link>
            <Link
              href="/FAQs"
              className="text-gray-800 font-[500] hover:text-gray-900 text-sm"
            >
              FAQs
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden sm:flex items-center bg-white border border-gray-200 rounded-full px-3 py-1 text-sm shadow-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 mr-2"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-4.35-4.35"
                />
                <circle
                  cx="11"
                  cy="11"
                  r="6"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <input
                type="search"
                placeholder="Search products, e.g. 'Rice'"
                className="outline-none text-sm w-48 bg-transparent"
              />
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="hidden sm:inline-flex items-center gap-2 px-3 py-2 border border-transparent rounded-md hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4"
                />
                <circle cx="9" cy="20" r="1" />
                <circle cx="20" cy="20" r="1" />
              </svg>
              <span className="text-sm">Cart</span>
            </Link>

            {/* Auth Buttons */}
            {session ? (
              <div className="flex items-center gap-3">
                <Link
                  href="/profile"
                  className="inline-flex items-center text-gray-800 hover:text-amber-600 transition"
                  title="Profile"
                >
                  <User size={22} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-rose-500 transition"
                  title="Logout"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <Link
                href="/signin"
                className="hidden md:inline-flex items-center text-sm text-gray-800"
              >
                Sign in
              </Link>
            )}

            {/* Mobile menu button */}
            <button
              aria-label="Toggle menu"
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-3">
            <Link href="/products" className="block text-gray-700">
              Products
            </Link>
            <Link href="/collections" className="block text-gray-700">
              Collections
            </Link>
            <Link href="/about" className="block text-gray-700">
              About
            </Link>
            <Link href="/stories" className="block text-gray-700">
              Stories
            </Link>
            <Link href="/cart" className="block text-gray-700">
              Cart
            </Link>

            {session ? (
              <>
                <Link href="/profile" className="block text-gray-700">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left text-gray-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link href="/signin" className="block text-gray-700">
                Sign in
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
