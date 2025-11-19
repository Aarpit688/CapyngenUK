import React from "react";
import { Globe2, Zap, TrendingUp, HeartHandshake } from "lucide-react";

export default function Careers2() {
  const features = [
    {
      title: "A Global Fintech Powerhouse",
      description:
        "With such a global presence of Capyngen as the UK, USA, India, South Africa, Dubai, and Asia-Pacific and your teams settled in any of these regions, you are still able to work in a global ecosystem. Work with the best in the industry and learn from experienced developers, compliance specialists, and strategists, in the creation of next-gen trading technology.",
      icon: Globe2,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Innovation at the Core",
      description:
        "We are the source of leading-edge products such as CRM systems, trading platforms, PAMM/MAM tools, liquidity bridges, automation engines, and fintech SaaS systems. To us, every job is a chance to innovate.",
      icon: Zap,
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Career Growth & Skill Development",
      description:
        "We stand for perpetual education. Employees are invited to partake in training programs, certification, leadership journeys, workshops, and advanced technology tool usage.",
      icon: TrendingUp,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "A Culture That Empowers You",
      description:
        "Capyngen is about innovation, responsibility, honesty, and community. Our employees have the liberty to think beyond, bring up their ideas and rattle the cage by challenging the status quo.",
      icon: HeartHandshake,
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Glowing Aurora Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="aurora-bg"></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute -top-20 left-10 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Why Work With Us?
          </h2>
          <div className="mt-4 h-1.5 w-28 bg-blue-500 mx-auto rounded-full opacity-90 shadow-lg shadow-blue-500/40"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group relative p-6 rounded-md bg-white/5 backdrop-blur-2xl border border-white/10 hover:border-blue-500/40 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 overflow-hidden"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    backgroundImage: `url(${feature.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>

                <div className="relative z-10 flex items-start gap-6">
                  {/* Icon Container */}
                  <div className="p-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center shadow-xl group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <Icon className="w-7 h-7 text-blue-400 group-hover:text-white transition-all" />
                  </div>

                  {/* Text Block */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
