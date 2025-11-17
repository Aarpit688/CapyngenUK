import React from "react";

// StarIcon SVG component
export const StarIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const solutions = [
  "Trading platforms",
  "CRM software solutions",
  "Website & mobile app development",
  "Back-office tools",
  "Digital marketing support",
];

const ConclusionSection = () => {
  return (
    <section className="w-full bg-gray-900">
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center p-8 md:p-12">
          {/* IMAGE ON LEFT NOW */}
          <div className="lg:col-span-2 max-h-100 h-64 lg:h-full rounded-xl overflow-hidden shadow-lg shadow-black/70">
            <img
              src="https://picsum.photos/seed/conclusion/800/1200"
              alt="Crypto brokerage success"
              className="w-full h-full object-cover"
            />
          </div>

          {/* TEXT ON RIGHT */}
          <div className="lg:col-span-3">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Start Your Crypto Brokerage the Smart Way
            </h2>

            <p className="text-gray-300 mb-6">
              It is not necessary for a crypto brokerage to be complicated when
              you are launching it. Capyngen Technologies UK Limited offers
              user-friendly, safe, and fully-featured IT solutions such as:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-8">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-center gap-3">
                  <StarIcon className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-100 text-sm">{solution}</span>
                </li>
              ))}
            </ul>

            <p className="text-gray-300 mb-6">
              Build a crypto brokerage with us that is professional, scalable,
              globally competitive, and provides exceptional experience to your
              clients.
            </p>

            <div className="bg-gray-700/70 border border-gray-700 rounded-lg p-6">
              <p className="text-lg font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Build a Complete Crypto Broker Setup Solution – Start your
                brokerage with Capyngen’s full support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConclusionSection;
