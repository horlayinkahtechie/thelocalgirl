"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Shield,
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  FileText,
  UserCheck,
  Cookie,
  Globe,
  Eye,
  Trash2,
  Download,
} from "lucide-react";

export default function PrivacyPolicy() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const privacySections = [
    {
      id: "changes",
      title: "Changes to This Privacy Policy",
      content: `We may update this Privacy Policy from time to time, including to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will post the revised Privacy Policy on the Site, update the "Last updated" date and take any other steps required by applicable law.`,
    },
    {
      id: "collection",
      title: "How We Collect and Use Your Personal Information",
      content: `To provide the Services, we collect and have collected over the past 12 months personal information about you from a variety of sources. The information that we collect and use varies depending on how you interact with us.

In addition to the specific uses set out below, we may use information we collect about you to communicate with you, provide or improve the Services, comply with any applicable legal obligations, enforce any applicable terms of service, and to protect or defend the Services, our rights, and the rights of our users or others.`,
    },
    {
      id: "information",
      title: "What Personal Information We Collect",
      content: `The types of personal information we obtain about you depends on how you interact with our Site and use our Services. When we use the term "personal information", we are referring to information that identifies, relates to, describes or can be associated with you.`,
      subsections: [
        {
          title: "Information We Collect Directly from You",
          content: `Information that you directly submit to us through our Services may include:
• Contact details including your name, address, phone number, and email
• Order information including billing/shipping addresses, payment confirmation
• Account information including username, password, and security questions
• Customer support information you choose to include in communications

Some features may require you to provide certain information. You may elect not to provide this information, but doing so may prevent you from using or accessing these features.`,
        },
        {
          title: "Information We Collect about Your Usage",
          content: `We may automatically collect certain information about your interaction with the Services ("Usage Data") using cookies, pixels and similar technologies. Usage Data may include device information, browser information, network connection, IP address and other interaction data.`,
        },
        {
          title: "Information We Obtain from Third Parties",
          content: `We may obtain information about you from third parties, including:
• Companies who support our Site and Services, such as Shopify
• Our payment processors who collect payment information
• Online tracking technologies when you interact with our Services or advertisements`,
        },
      ],
    },
    {
      id: "usage",
      title: "How We Use Your Personal Information",
      content: ``,
      subsections: [
        {
          title: "Providing Products and Services",
          content: `We use your personal information to provide you with the Services, including processing payments, fulfilling orders, sending notifications, managing your account, arranging shipping, and facilitating returns.`,
        },
        {
          title: "Marketing and Advertising",
          content: `We may use your personal information for marketing and promotional purposes, such as sending communications and showing you advertisements. This includes tailoring Services and advertising to better suit your interests.`,
        },
        {
          title: "Security and Fraud Prevention",
          content: `We use your personal information to detect, investigate or take action regarding possible fraudulent, illegal or malicious activity. Keep your account credentials safe and contact us immediately if you believe your account has been compromised.`,
        },
        {
          title: "Communicating with You and Service Improvement",
          content: `We use your personal information to provide customer support and improve our Services to maintain our business relationship with you.`,
        },
      ],
    },
    {
      id: "cookies",
      title: "Cookies",
      content: `Like many websites, we use Cookies on our Site. We use Cookies to power and improve our Site and Services, remember your actions and preferences, and run analytics to better understand user interaction.

Most browsers accept Cookies by default, but you can set your browser to remove or reject them. Please note this may impact your user experience and cause some features to work incorrectly.

Our website recognizes the Global Privacy Control (GPC) signal. To learn more, visit https://globalprivacycontrol.org/.`,
    },
    {
      id: "disclosure",
      title: "How We Disclose Personal Information",
      content: `We may disclose your personal information to third parties in these circumstances:
• With vendors or third parties who perform services on our behalf
• With business and marketing partners to provide services and advertise
• When you direct or consent to our disclosure
• With our affiliates within our corporate group
• In connection with business transactions or legal obligations`,
    },
    {
      id: "rights",
      title: "Your Rights",
      content: `Depending on where you live, you may have some or all of these rights:
• Right to Access / Know
• Right to Delete
• Right to Correct
• Right of Portability
• Right to Opt out of Sale or Sharing
• Restriction of Processing
• Withdrawal of Consent
• Appeal rights

We will not discriminate against you for exercising any of these rights. Contact us using the details below to exercise your rights.`,
    },
    {
      id: "security",
      title: "Security and Retention",
      content: `Please be aware that no security measures are perfect or impenetrable. We recommend that you do not use insecure channels to communicate sensitive information.

How long we retain your personal information depends on different factors, such as whether we need the information to maintain your account, provide Services, comply with legal obligations, resolve disputes or enforce contracts.`,
    },
    {
      id: "international",
      title: "International Users",
      content: `We may transfer, store and process your personal information outside the country you live in. Your personal information is also processed by staff and third party service providers in these countries.

If we transfer your personal information out of Europe, we will rely on recognized transfer mechanisms like the European Commission's Standard Contractual Clauses.`,
    },
  ];

  const rights = [
    {
      icon: Eye,
      title: "Right to Access",
      description: "View the personal information we hold about you",
    },
    {
      icon: Trash2,
      title: "Right to Delete",
      description: "Request deletion of your personal information",
    },
    {
      icon: UserCheck,
      title: "Right to Correct",
      description: "Update inaccurate personal information",
    },
    {
      icon: Download,
      title: "Right to Portability",
      description: "Receive a copy of your data in a usable format",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6">
            <Shield size={40} />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 mb-4">
            Your privacy is important to us
          </p>
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm">
            <FileText size={16} />
            Last updated: October 31, 2025
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        {/* Introduction */}
        <div className="bg-white rounded-3xl shadow-lg p-8 lg:p-12 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            This Privacy Policy describes how <strong>ThatLocalGirl</strong>{" "}
            (the "Site", "we", "us", or "our") collects, uses, and discloses
            your personal information when you visit, use our services, or make
            a purchase from <strong>thatlocalgirl.com</strong> or otherwise
            communicate with us regarding the Site (collectively, the
            "Services").
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            For purposes of this Privacy Policy, "you" and "your" means you as
            the user of the Services, whether you are a customer, website
            visitor, or another individual whose information we have collected
            pursuant to this Privacy Policy.
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-2xl border border-blue-200">
            <p className="text-blue-800 text-sm font-medium">
              💡 Please read this Privacy Policy carefully. By using our
              Services, you agree to the collection and use of information in
              accordance with this policy.
            </p>
          </div>
        </div>

        {/* Your Rights Overview */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Your Privacy Rights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rights.map((right, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <right.icon className="text-blue-500" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {right.title}
                </h3>
                <p className="text-gray-600 text-sm">{right.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy Policy Sections */}
        <div className="space-y-6">
          {privacySections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {section.title}
                  </h2>
                </div>
                {openSections[section.id] ? (
                  <ChevronUp
                    className="text-blue-500 flex-shrink-0"
                    size={24}
                  />
                ) : (
                  <ChevronDown
                    className="text-gray-400 flex-shrink-0"
                    size={24}
                  />
                )}
              </button>

              {openSections[section.id] && (
                <div className="px-6 pb-6">
                  <div className="w-12 h-1 bg-blue-200 rounded-full mb-6"></div>

                  {section.content && (
                    <p className="text-gray-600 leading-relaxed mb-6 whitespace-pre-line">
                      {section.content}
                    </p>
                  )}

                  {section.subsections && (
                    <div className="space-y-6">
                      {section.subsections.map((subsection, subIndex) => (
                        <div
                          key={subIndex}
                          className="bg-gray-50 rounded-2xl p-6"
                        >
                          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            {subsection.title}
                          </h3>
                          <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                            {subsection.content}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Quick Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Cookie className="text-amber-500 mx-auto mb-4" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">
              Cookie Preferences
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Manage your cookie settings and preferences
            </p>
            <button className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors">
              Manage Cookies
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Globe className="text-green-500 mx-auto mb-4" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">
              Global Privacy Control
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We honor the GPC signal for privacy preferences
            </p>
            <Link
              href="https://globalprivacycontrol.org"
              className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Shield className="text-purple-500 mx-auto mb-4" size={32} />
            <h3 className="font-semibold text-gray-900 mb-2">
              Data Protection
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We implement security measures to protect your data
            </p>
            <button className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors">
              Security Info
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Contact Us
            </h2>
            <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
              Have questions about our Privacy Policy or want to exercise your
              rights? We're here to help you.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-blue-50 rounded-2xl p-6">
                <Mail className="text-blue-500 mb-4" size={24} />
                <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                <Link
                  href="mailto:thatlocalgirlincanada@gmail.com"
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors block"
                >
                  thatlocalgirlincanada@gmail.com
                </Link>
              </div>

              <div className="bg-green-50 rounded-2xl p-6">
                <MapPin className="text-green-500 mb-4" size={24} />
                <h3 className="font-semibold text-gray-900 mb-2">Visit Us</h3>
                <p className="text-gray-600">
                  2030 Weston Road
                  <br />
                  Toronto, ON, M9N 1X4
                  <br />
                  Canada
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm">
                For the purpose of applicable data protection laws, we are the
                data controller of your personal information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-6">
            Need Immediate Assistance?
          </h2>
          <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
            Our team is ready to help you with any privacy-related questions or
            concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:thatlocalgirlincanada@gmail.com"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Email Support
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
            >
              Contact Form
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
