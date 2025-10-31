"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronUp,
  CreditCard,
  Package,
  RefreshCw,
  Mail,
  Phone,
  ArrowRight,
  Search,
} from "lucide-react";

export default function Faqs() {
  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("orders");

  const faqTabs = [
    {
      id: "orders",
      title: "Orders & Payments",
      icon: CreditCard,
      questions: [
        {
          question: "What are my payment options?",
          answer:
            "We accept all the popular payment methods, such as PayPal, Visa, MasterCard, Discover, Amazon Pay, American Express, Google Pay, E-transfer and Cash paid in store.",
        },
        {
          question: "How to track my order?",
          answer:
            "You will receive an email from us after you have placed the order. You’ll get confirmation in your email when you purchase and we’ll let you know when your order is on the move. You will be able to track your order through your preferred shipping partner.",
        },
        {
          question: "How do I cancel or change my order?",
          answer:
            "Unfortunately, it’s not possible to make any changes to an order or cancel it once it has been placed. However, you could ask for a refund.",
        },
      ],
    },
    {
      id: "shipping",
      title: "Shipping & Delivery",
      icon: Package,
      questions: [
        {
          question: "How long does the delivery take?",
          answer:
            "Orders are typically shipped and delivered within 3–5 business days. Same-day delivery is available for local customers.",
        },
        {
          question: "Do you offer free shipping?",
          answer:
            "Shipping is not free; customers are responsible for paying all shipping fees",
        },
        {
          question: "Do you ship overseas?",
          answer:
            "Yes, we ship all over the world. Please note that additional shipping costs will be applied based on your delivery location.",
        },
      ],
    },
    {
      id: "refunds",
      title: "Refunds & Exchange",
      icon: RefreshCw,
      questions: [
        {
          question: "How long does it take to get the Refund?",
          answer:
            "Once we receive your return, please allow us 3-5 business days for your refund to process. Refund amount will be automatically debited to the same form of payment originally used for purchase.",
        },
        {
          question: "What is your refund and exchange policy?",
          answer:
            "We only offer refunds if the order is canceled. Once an order is processed or shipped, it is not eligible for a refund.",
        },
        {
          question: "How do I track my Refund?",
          answer:
            "To track the status of your refund, kindly refer to your confirmation email that you have received from us.",
        },
      ],
    },
  ];

  const allQuestions = faqTabs.flatMap((tab) =>
    tab.questions.map((q) => ({ ...q, category: tab.title }))
  );

  const filteredQuestions = allQuestions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const activeTabData = faqTabs.find((tab) => tab.id === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {searchTerm ? (
          // Search Results
          <div className="space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8">
              Search Results
            </h2>
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </h3>
                    </div>
                    {openQuestion === index ? (
                      <ChevronUp
                        className="text-amber-500 flex-shrink-0"
                        size={24}
                      />
                    ) : (
                      <ChevronDown
                        className="text-gray-400 flex-shrink-0"
                        size={24}
                      />
                    )}
                  </button>
                  {openQuestion === index && (
                    <div className="px-6 pb-6">
                      <div className="w-12 h-1 bg-amber-200 rounded-full mb-4"></div>
                      <p className="text-gray-600 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-gray-400" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600">
                  Try searching with different keywords or browse the categories
                  below.
                </p>
              </div>
            )}
          </div>
        ) : (
          // Tabbed FAQs
          <div className="space-y-8">
            {/* Tabs Navigation */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {faqTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-amber-500 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 shadow-md hover:shadow-lg hover:bg-amber-50"
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Active Tab Content */}
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                  {activeTabData.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  Common questions about {activeTabData.title.toLowerCase()}
                </p>
              </div>

              <div className="grid gap-6">
                {activeTabData.questions.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <button
                      onClick={() => toggleQuestion(index)}
                      className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none group"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors pr-4">
                        {item.question}
                      </h3>
                      {openQuestion === index ? (
                        <ChevronUp
                          className="text-amber-500 flex-shrink-0 transform group-hover:scale-110 transition-transform"
                          size={24}
                        />
                      ) : (
                        <ChevronDown
                          className="text-gray-400 flex-shrink-0 transform group-hover:scale-110 transition-transform"
                          size={24}
                        />
                      )}
                    </button>
                    {openQuestion === index && (
                      <div className="px-6 pb-6">
                        <div className="w-12 h-1 bg-amber-200 rounded-full mb-4"></div>
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Still Need Help Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Still Need Help?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Can&apos;t find the answer you&apos;re looking for? Our team is
              here to help you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-amber-50 rounded-2xl p-6">
                <Mail className="text-amber-500 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Send us an email and we&apos;ll respond within 24 hours
                </p>
                <Link
                  href="mailto:support@thatlocalgirl.com"
                  className="text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors"
                >
                  support@thatlocalgirl.com
                </Link>
              </div>

              <div className="bg-rose-50 rounded-2xl p-6">
                <Phone className="text-rose-500 mx-auto mb-4" size={32} />
                <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Speak directly with our customer care team
                </p>
                <Link
                  href="tel:+2348123456789"
                  className="text-rose-600 hover:text-rose-700 font-semibold text-sm transition-colors"
                >
                  +234 812 345 6789
                </Link>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-amber-400 to-amber-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:from-amber-500 hover:to-amber-600 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contact Support
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/shop"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-amber-400 hover:text-amber-600 transition-colors duration-300"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
