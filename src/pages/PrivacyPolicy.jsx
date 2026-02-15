import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
            {/* Background Ambient Glows (Security Theme: Emerald & Teal) */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="relative z-10 max-w-[90vw] mx-auto bg-gray-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-b border-white/10 pb-10"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 mb-4 tracking-tight">
                        Data Protection & Privacy Commitment
                    </h1>
                    <p className="text-xl sm:text-2xl font-medium text-gray-400">
                        Aynzenix Global Security
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
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 font-bold text-xl border border-teal-500/30">1</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Our Commitment to Privacy</h2>
                        </div>
                        <div className="space-y-4 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>
                                At Aynzenix Technology Limited, we know that data is the basis of any successful Forex brokerage. A good relationship is based on trust, and trust is security, and security is first of all correct data handling.
                            </p>
                            <p>
                                This Privacy Policy is designed to disclose to our clients and their end users the ways in which their data is collected, processed, stored, and protected. Our operations are in conformity with globally accepted data protection standards such as GDPR principles, so your business and your clients data will be safe.
                            </p>
                        </div>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 font-bold text-xl border border-teal-500/30">2</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Information We Collect</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>
                                In order to provide safe and efficient services, we gather and handle the following types of data:
                            </p>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Corporate Information</strong>
                                        Business registration documents, company contact details, and billing information necessary for contractual and regulatory requirements.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Technical Logs & System Data</strong>
                                        IP addresses, login timestamps, device identifiers, and server logs are some of the data we use to check the security of our system and to keep out unwanted accesses.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Client Management Data</strong>
                                        Being a CRM and trading technology provider, we keep the data that brokers enter into our systems, such as trader names, email addresses, account details, and transaction history.
                                        <p className="mt-2 text-gray-400">This data is treated with utmost confidentiality and security.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 font-bold text-xl border border-teal-500/30">3</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Data Usage & Processing</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>We employ the collected data solely for operational and security reasons, including:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-teal-400 shrink-0"></span>
                                    <span>Facilitating the functionality of trading platforms and CRM software.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-teal-400 shrink-0"></span>
                                    <span>Offering technical support and system analysis 24/7.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-teal-400 shrink-0"></span>
                                    <span>Improving the security of trading platforms through various means, such as multi-factor authentication (MFA).</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-teal-400 shrink-0"></span>
                                    <span>Sending crucial system updates and security patches.</span>
                                </li>
                            </ul>
                            <p>We do not employ client data for marketing, resale, or other commercial purposes.</p>
                        </div>
                    </motion.section>

                    {/* Section 4 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 font-bold text-xl border border-teal-500/30">4</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Security Architecture</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>Security is built in at every level of our infrastructure.</p>
                            <p className="text-gray-200 font-medium">Our systems use:</p>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">End, to, End Encryption</strong>
                                        All data, whether being transferred or stored, is secured using AES, 256 encryption standards.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Redundant Server Infrastructure</strong>
                                        Data is securely copied across several highly secured data centers in the UK and other worldwide locations to ensure service continuity and avoid data loss.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Continuous Monitoring & Vulnerability Scanning</strong>
                                        Periodic security inspections, penetration testing, and vulnerability reviews are performed to detect and eliminate potential risks before they can be exploited.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 5 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 font-bold text-xl border border-teal-500/30">5</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Third-Party Disclosure</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>
                                Aynzenix does not sell, rent, or commercially distribute client information.
                            </p>
                            <p className="text-gray-200 font-medium">Information can only be shared under limited conditions:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-gray-500 shrink-0"></span>
                                    <span>Liquidity Providers and Payment Gateways – only as necessary to complete trades or financial transactions.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-gray-500 shrink-0"></span>
                                    <span>Legal Authorities – only as required by legal court orders or legal regulatory procedures.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 6 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-teal-500/20 text-teal-400 font-bold text-xl border border-teal-500/30">6</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Your Rights</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>Clients retain full control of their data.</p>
                            <p className="text-gray-200 font-medium">You have the right to:</p>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                                    <span>Request a full audit of the data we store on your behalf.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                                    <span>Request data portability in a structured format.</span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="w-2 h-2 mt-2.5 rounded-full bg-emerald-400 shrink-0"></span>
                                    <span>Request deletion of stored data upon contract termination, subject to any legal retention requirements.</span>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                </motion.div>
            </div>
        </main>
    );
}