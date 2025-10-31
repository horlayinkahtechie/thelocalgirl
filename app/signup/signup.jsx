"use client";
import React, { useState } from "react";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";
import {
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  ArrowRight,
  LogIn,
  Heart,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    newsletter: true,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      const { error: insertError } = await supabase.from("users").insert([
        {
          user_id: data.user.id,
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          newsletter: formData.newsletter,
          created_at: new Date(),
        },
      ]);

      if (insertError) throw insertError;

      alert("Account created successfully! Please check your email to verify.");
      router.push("/signin");
    } catch (err) {
      console.error("Signup error:", err.message);
      alert(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const passwordRequirements = [
    { text: "At least 8 characters", met: formData.password.length >= 8 },
    { text: "One uppercase letter", met: /[A-Z]/.test(formData.password) },
    { text: "One lowercase letter", met: /[a-z]/.test(formData.password) },
    { text: "One number", met: /[0-9]/.test(formData.password) },
  ];

  const allRequirementsMet = passwordRequirements.every((req) => req.met);
  const passwordsMatch = formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-rose-50">
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Side - Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-12 lg:px-12">
          <div className="w-full max-w-md">
            {/* Header */}
            <div className="text-center mb-8">
              <Link href="/" className="inline-flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-rose-500 rounded-2xl flex items-center justify-center">
                  <Heart className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent">
                  That Local Girl
                </span>
              </Link>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                Join Our Community
              </h1>
              <p className="text-gray-600">
                Create your account and start your journey with authentic
                African flavors
              </p>
            </div>

            {/* Sign Up Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                      placeholder="First"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="block w-full px-3 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Last"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={formData.password}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-12 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </div>

                {/* Password Requirements */}
                {formData.password && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-xl">
                    <p className="text-sm font-medium text-gray-700 mb-2">
                      Password must contain:
                    </p>
                    <div className="space-y-1">
                      {passwordRequirements.map((req, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle
                            size={16}
                            className={
                              req.met ? "text-green-500" : "text-gray-300"
                            }
                          />
                          <span
                            className={`text-sm ${
                              req.met ? "text-green-600" : "text-gray-500"
                            }`}
                          >
                            {req.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className={`block w-full pl-10 pr-12 py-4 border rounded-2xl focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm ${
                      formData.confirmPassword
                        ? passwordsMatch
                          ? "border-green-300"
                          : "border-red-300"
                        : "border-gray-300"
                    }`}
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 transition-colors" />
                    )}
                  </button>
                </div>
                {formData.confirmPassword && !passwordsMatch && (
                  <p className="mt-1 text-sm text-red-600">
                    Passwords do not match
                  </p>
                )}
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <input
                    id="agreeToTerms"
                    name="agreeToTerms"
                    type="checkbox"
                    required
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-400 mt-1"
                  />
                  <label
                    htmlFor="agreeToTerms"
                    className="text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <Link
                      href="/terms"
                      className="text-amber-600 hover:text-amber-500 font-medium"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-amber-600 hover:text-amber-500 font-medium"
                    >
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="newsletter"
                    name="newsletter"
                    type="checkbox"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="w-4 h-4 text-amber-500 border-gray-300 rounded focus:ring-amber-400 mt-1"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Send me updates about new products, recipes, and special
                    offers
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={
                  isLoading ||
                  !allRequirementsMet ||
                  !passwordsMatch ||
                  !formData.agreeToTerms
                }
                className="w-full bg-gradient-to-r from-amber-400 to-amber-500 text-white py-4 px-6 rounded-2xl font-semibold hover:from-amber-500 hover:to-amber-600 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:transform-none disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-amber-600 hover:text-amber-500 transition-colors inline-flex items-center gap-1"
                >
                  Sign in
                  <LogIn size={16} />
                </Link>
              </p>
            </div>

            {/* Security Notice */}
            <div className="mt-8 p-4 bg-blue-50 rounded-2xl border border-blue-200">
              <div className="flex items-start gap-3">
                <Sparkles
                  className="text-blue-500 mt-0.5 flex-shrink-0"
                  size={16}
                />
                <p className="text-blue-800 text-sm">
                  We protect your personal information with industry-standard
                  security measures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Decorative */}
        <div className="hidden lg:flex flex-1 relative bg-gradient-to-br from-amber-400 to-rose-500">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.3) 2%, transparent 40%)`,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-white px-12">
            <div className="max-w-md text-center">
              {/* Decorative Elements */}
              <div className="w-32 h-32 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm">
                <Heart className="text-white" size={48} />
              </div>

              <h2 className="text-4xl font-bold mb-6">Welcome to the Family</h2>

              <p className="text-amber-100 text-lg leading-relaxed mb-8">
                Join thousands of culture lovers who discover authentic African
                flavors, share stories, and build community with every purchase.
              </p>

              {/* Benefits List */}
              <div className="space-y-4 text-left">
                {[
                  "Exclusive access to new product launches",
                  "Personalized recipe recommendations",
                  "Early access to sales and promotions",
                  "Join our cooking classes and events",
                  "Earn rewards with every purchase",
                  "Connect with our community forum",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <CheckCircle className="text-white" size={14} />
                    </div>
                    <span className="text-amber-100">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-8 p-6 bg-white/10 rounded-2xl backdrop-blur-sm">
                <p className="text-amber-100 italic mb-3">
                  &quot;That Local Girl brought the taste of home right to my
                  doorstep. The community and products are simply amazing&quot;
                </p>
                <p className="text-amber-200 text-sm">- Amina, Toronto</p>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm animate-float"></div>
          <div
            className="absolute top-1/3 right-1/4 w-12 h-12 bg-white/15 rounded-full backdrop-blur-sm animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white/25 rounded-full backdrop-blur-sm animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
