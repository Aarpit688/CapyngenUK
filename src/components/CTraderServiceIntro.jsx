import React from "react";

const CTraderServiceIntro = () => {
  const headline = "Elevate Your Brokerage with cTrader Technology";
  const bodyContent =
    "Capyngen​‍​‌‍​‍‌​‍​‌‍​‍‌ Technologies UK Limited is the source of cTrader services with which forex and multi-asset brokers worldwide enhance their trading propositions. We accompany brokers with cTrader technology solutions from the initial steps of marketing their brand through white-label solutions and platform integration to liquidity bridge setup and hosting, thus enabling them to scale fast and still deliver great trading experiences.";
  const ctaText =
    "Launch Your cTrader White-Label Platform Today – Talk to our experts for a consultation.";

  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        {/* Left Content Side */}
        <div className="lg:w-1/2 p-10 md:p-14 lg:p-20 flex flex-col justify-center relative z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h1>

          <p className="text-lg text-white leading-relaxed mb-10">
            {bodyContent}
          </p>

          {/* Clean Feature List */}
          <div className="space-y-4 mb-10">
            {[
              "Serving brokers worldwide",
              "Seamless platform setup & integration",
              "Liquidity bridge & connectivity solutions",
              "High-performance, scalable hosting",
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white">
                <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
                <p className="text-base font-medium">{item}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-gray-400 border-l-4 border-blue-600 p-6 rounded-r-xl shadow-sm">
            <p className="text-lg font-semibold text-black mb-4">{ctaText}</p>
            <button className="group inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-blue-600/30">
              Consult an Expert
              <svg
                className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Image Side - Full Visual */}
        <div className="lg:w-1/2 relative min-h-[350px] lg:min-h-full">
          <img
            src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=2000&auto=format&fit=crop"
            alt="cTrader Technology"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default CTraderServiceIntro;
