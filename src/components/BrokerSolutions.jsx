import React from "react";
import { Check } from "lucide-react";

export default function BrokerSolutions() {
  const features = [
    "Fast to Launch – trading can be started with the least time required for the new platform toa be operational",
    "Scalable – the platform should be able to handle more users and trades without any difficulty",
    "User-Friendly – simple and clear dashboards for brokers and clients",
    "Flexible – your business can be easily changed as it grows",
  ];

  const services = [
    "Crypto broker website & app development",
    "CRM systems",
    "Complete broker setup solutions",
  ];

  // Glow style for cards and icons in features only
  const glowStyle = {
    boxShadow: "0 0 10px 3px rgba(52, 211, 153, 0.6)", // green glow resembling Tailwind's green-400
  };

  return (
    <section className="w-full py-12 md:py-20 lg:py-24 bg-gray-900 text-gray-100">
      <div className="max-w-[90vw] mx-auto px-4 md:px-6">
        <div className="grid gap-8">
          {/* Header */}
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Advanced Solutions for Startups and Growing Brokers
            </h2>
            <p className="mx-auto max-w-4xl my-5 text-lg text-white">
              We understand that startups require different things than an
              already established broker. This is the reason why we offer custom
              crypto broker software solutions which are:
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-2 rounded-lg p-6 bg-gray-800 border-green-400 hover:shadow-lg transition-shadow"
                style={glowStyle}
              >
                <div className="flex gap-3">
                  <Check
                    className="h-6 w-6 text-green-400 flex-shrink-0 mt-1"
                    style={glowStyle}
                  />
                  <p className="text-sm font-medium leading-relaxed text-gray-200">
                    {feature}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 text-center max-w-5xl mx-auto">
        By hiring our team, you will have access to crypto broker website & app
        development, CRM systems, and complete broker setup solutions that will
        allow you to easily launch professional, secure brokerages as a
        ​‍​‌‍​‍‌​‍​‌‍​‍‌startup.
      </div>
    </section>
  );
}
