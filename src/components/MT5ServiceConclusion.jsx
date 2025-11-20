import React from "react";
import { CheckCircle2, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function MT5ServiceConclusion({
  imageUrl = assets.mtService14,
  onStart = () => {},
}) {
  const title = "Achieve Reliable Multi-Asset Trading with MT5";
  const intro =
    "Capyngen Technologies equips brokers with end-to-end MT5 services — from platform integration to global rollout.";

  const services = [
    "Platform integration & server setup",
    "Liquidity bridge & API connectivity",
    "Plugin & backend development",
    "White-label setup for FX, CFDs & multi-asset",
    "Hosting, support & ongoing maintenance",
  ];

  return (
    <section className="bg-black py-20 overflow-hidden">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT — TEXT SECTION */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
              {title}
            </h3>

            <p className="text-slate-300 mb-8 max-w-xl">{intro}</p>

            {/* SERVICE GRID */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-900 border border-slate-800 rounded-xl p-4 flex items-start gap-3 hover:border-emerald-500/30 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-1" />
                  <p className="text-slate-200 text-sm font-medium">
                    {service}
                  </p>
                </div>
              ))}
            </div>

            {/* QUOTE */}
            <blockquote className="border-l-4 border-emerald-500 pl-4 text-slate-300 italic mb-10">
              Working with Capyngen gives brokers the connectivity, performance
              and governance needed to scale globally.
            </blockquote>

            {/* CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={onStart}
                className="bg-emerald-400 hover:bg-emerald-300 text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2 transition"
              >
                <ArrowRight className="w-4 h-4" />
                Launch MT5 Broker Setup
              </button>

              <a
                href="#contact"
                className="flex items-center gap-2 text-slate-300 hover:text-white text-sm transition"
              >
                <Globe className="w-4 h-4" />
                Explore Global Solutions
              </a>
            </div>
          </motion.div>

          {/* RIGHT — IMAGE PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="rounded-md ">
              <img
                src={imageUrl}
                alt="MT5 Global Trading Visualization"
                className="w-full h-72 sm:h-80 lg:h-100 object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
