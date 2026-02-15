import React from "react";
import { motion } from "framer-motion";

export default function TermsOfService() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <main className="relative min-h-screen bg-[#050505] text-gray-300 py-16 md:py-24 px-4 sm:px-6 overflow-hidden antialiased">
            {/* Background Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="relative z-10 max-w-[90vw] mx-auto bg-gray-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-b border-white/10 pb-10"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 mb-4 tracking-tight">
                        Terms of Service & Business Operations Agreement
                    </h1>
                    <p className="text-xl sm:text-2xl font-medium text-gray-400">
                        Aynzenix IT Solutions
                    </p>
                </motion.div>

                {/* Content Sections */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-16"
                >
                    {/* Section 1 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-xl border border-indigo-500/30">1</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Introduction</h2>
                        </div>
                        <div className="space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>Welcome to Aynzenix Technology Limited.</p>
                            <p>
                                This Terms of Service ("Terms") sets out the main features of our Forex Broker IT Solutions, trading platforms, and consulting services, and how we interact with you. If you transact with us or utilize our technology, you ("Client" or "Broker") hereby agree to these Terms.
                            </p>
                            <p>
                                In case you represent a company, you warrant that you have the necessary authority to sign this agreement on behalf of your company.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-xl border border-indigo-500/30">2</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Scope of Services</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>
                                Aynzenix delivers advanced technology infrastructure designed specifically for the financial services industry. Our services include:
                            </p>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Custom trading platforms</strong>
                                        Market, execution trading software of proprietary nature created for brokers.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Forex CRM Systems</strong>
                                        All, inclusive management systems for clients to help facilitate the onboarding, tracking, and managing of traders.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Web & Mobile App Development</strong>
                                        SEO, friendly, modern websites and applications to strengthen your online presence.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">API & Payment Integrations</strong>
                                        Secure integrations with third party services, liquidity providers and payment gateways.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-xl border border-indigo-500/30">3</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">License and Intellectual Property</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>
                                The entire software, source code, system architecture, designs, and technical documentation provided by Aynzenix shall remain the sole intellectual property of Aynzenix Technology Limited and shall be protected under the respective copyright and intellectual property laws.
                            </p>
                            <p>
                                We hereby grant a limited, non, exclusive and non, transferable license to you for the use of our platforms strictly for the purpose of your brokerage operations.
                            </p>
                            <p className="text-gray-200 font-medium pt-2">You may not:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-fuchsia-400 shrink-0"></span>
                                    <span>Reverse engineer, decompile, or attempt to extract source code from our software.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-fuchsia-400 shrink-0"></span>
                                    <span>Sell, sublicense, or distribute our proprietary technology to third parties without written permission.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-fuchsia-400 shrink-0"></span>
                                    <span>Use our name, logo, or branding in any way that suggests Aynzenix operates as a financial broker.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 4 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-xl border border-indigo-500/30">4</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Client Responsibilities</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>As our technical partner, you undertake to:, </p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-cyan-400 shrink-0"></span>
                                    <span>Provide precise and thorough documentation that is necessary for KYC, compliance, and system setup.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-cyan-400 shrink-0"></span>
                                    <span>Run your brokerage business strictly in accordance with the laws and regulations of your local area.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-cyan-400 shrink-0"></span>
                                    <span>Keep the confidentiality and security of the administrative credentials, server access, and API keys.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 5 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-xl border border-indigo-500/30">5</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Payment Terms & Service Suspension</h2>
                        </div>
                        <div className="space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>
                                Service charges are regulated by the Service Level Agreement (SLA) signed. Payments must be made on time as agreed.
                            </p>
                            <p>
                                In case of outstanding payments beyond a reasonable period, Aynzenix reserves the right to temporarily suspend access to the CRM servers, trading bridges, or any such infrastructure until the outstanding payments are cleared. This is done only for the purpose of protecting the integrity of the system.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 6 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 font-bold text-xl border border-indigo-500/30">6</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Limitation of Liability</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>
                                Aynzenix is a technology company, not a financial regulator, broker, or liquidity provider.
                            </p>
                            <p className="text-gray-200 font-medium">We are not liable for:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-gray-500 shrink-0"></span>
                                    <span>Losses incurred due to fluctuations in financial markets or trading activities.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-gray-500 shrink-0"></span>
                                    <span>Disruptions in our services due to third-party data centers, hosting companies, or internet service providers.</span>
                                </li>
                            </ul>
                            <p>
                                Fines or legal repercussions imposed by financial regulators due to the broker’s illegal business practices.
                            </p>
                        </div>
                    </motion.section>

                </motion.div>
            </div>
        </main>
    );
}