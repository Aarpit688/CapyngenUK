import React from "react";
import { assets } from "../assets/assets";

const stepsData = [
  {
    number: "1",
    title: "Choose a Regulated MT5 Forex Broker",
    description: (
      <>
        It is highly recommended that customers open accounts with brokers that
        are not only regulated but also trustworthy. A UK-based company, for
        instance, generally operates under a strict framework that enhances
        trust and transparency.
      </>
    ),
    imageUrl: assets.mt9,
    imageAlt: "Broker selection illustration",
    layout: "image-left",
  },
  {
    number: "2",
    title: "Complete Global KYC Verification",
    description:
      "Clients from different parts of the world submit their identity documents according to the requirements of regulators. KYC ensures smooth and secure onboarding for traders from all regions.",
    imageUrl: assets.mt10,
    imageAlt: "KYC verification process illustration",
    layout: "image-right",
  },
  {
    number: "3",
    title: "Select an Account Type",
    description: (
      <>
        Possible account types may include:
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400">
          <li>Standard</li>
          <li>ECN / Raw Spread</li>
          <li>Swap-free accounts</li>
          <li>Professional accounts</li>
        </ul>
        Such choices ensure that every trader is catered for, regardless of
        their level of expertise.
      </>
    ),
    imageUrl: assets.mt11,
    imageAlt: "Different account types illustration",
    layout: "image-left",
  },
  {
    number: "4",
    title: "Download MetaTrader 5",
    description: (
      <>
        MT5 can be downloaded and accessed globally from:
        <ul className="list-disc ml-5 mt-2 space-y-1 text-gray-400">
          <li>Windows</li>
          <li>macOS</li>
          <li>iOS</li>
          <li>Android</li>
          <li>WebTrader (browser version)</li>
        </ul>
        These options ensure that traders from anywhere can access the platform
        seamlessly.
      </>
    ),
    imageUrl: assets.mt12,
    imageAlt: "MT5 download and devices illustration",
    layout: "image-right",
  },
  {
    number: "5",
    title: "Log In and Configure Settings",
    description:
      "Login credentials issued by the broker are used to connect with live or demo servers. Once logged in, traders can configure preferences and chart settings according to their needs.",
    imageUrl: assets.mt13,
    imageAlt: "Login and configuration process illustration",
    layout: "image-left",
  },
  {
    number: "6",
    title: "Begin Trading",
    description:
      "After completing the setup, traders can start trading on global exchanges, perform technical analysis, and personalize charts for their strategies.",
    imageUrl: assets.mt14,
    imageAlt: "Trading in action illustration",
    layout: "image-right",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#0a0e0c] via-[#0d1715] to-[#0b211d] text-white py-24 px-6 overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
              MT5 Trading Account Setup
            </span>{" "}
            (For Global Users)
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Creating an MT5 account via a UK company is seamless and aligned
            with international compliance standards.
          </p>
        </div>

        {/* Steps */}
        <div className="flex flex-col gap-24">
          {stepsData.map((step) => {
            const imageOrderClass =
              step.layout === "image-right" ? "md:order-2" : "md:order-1";
            const textOrderClass =
              step.layout === "image-right" ? "md:order-1" : "md:order-2";

            return (
              <div
                key={step.number}
                className="flex flex-col md:flex-row items-center gap-10 md:gap-20"
              >
                {/* Image Section */}
                <div
                  className={`md:w-1/2 max-h-100 ${imageOrderClass} bg-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-md overflow-hidden shadow-lg hover:shadow-emerald-500/20 transition duration-500`}
                >
                  <img
                    src={step.imageUrl}
                    alt={step.imageAlt}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Text Section */}
                <div className={`md:w-1/2 ${textOrderClass}`}>
                  <div className="flex items-center justify-start mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 border-2 border-emerald-400 text-emerald-300 text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-green-400">
                    {step.title}
                  </h3>
                  <div className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
