import React from "react";
import { motion } from "framer-motion";

export default function TermsOfService() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <main className="min-h-screen bg-white text-slate-800 py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans antialiased">
            <div className="max-w-4xl mx-auto">

                {/* Document Header */}
                <motion.header
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-b border-slate-200 pb-8"
                >
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
                        Aynzenix IT Solutions
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        Terms of Service & Business Operations Agreement
                    </h1>
                    <div className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                        <p>
                            Welcome to Aynzenix Technology Limited. This Terms of Service ("Terms") sets out the main features of our Forex Broker IT Solutions, trading platforms, and consulting services, and how we interact with you.
                        </p>
                    </div>

                </motion.header>

                {/* Document Body */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="space-y-16"
                >

                    {/* Section 1 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">01</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Introduction</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-4">
                                If you transact with us or utilize our technology, you ("Client" or "Broker") hereby agree to these Terms.
                            </p>
                            <p className="p-4 bg-slate-50 rounded-md border border-slate-100 text-sm">
                                In case you represent a company, you warrant that you have the necessary authority to sign this agreement on behalf of your company.
                            </p>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 2 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">02</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Scope of Services</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                Aynzenix delivers advanced technology infrastructure designed specifically for the financial services industry. Our services include:
                            </p>
                            <ul className="list-none pl-0 space-y-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Custom Trading Platforms</strong>
                                    Market, execution trading software of proprietary nature created for brokers.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Forex CRM Systems</strong>
                                    All-inclusive management systems for clients to help facilitate the onboarding, tracking, and managing of traders.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Web & Mobile App Development</strong>
                                    SEO-friendly, modern websites and applications to strengthen your online presence.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">API & Payment Integrations</strong>
                                    Secure integrations with third party services, liquidity providers and payment gateways.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 3 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">03</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">License and Intellectual Property</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-4">
                                The entire software, source code, system architecture, designs, and technical documentation provided by Aynzenix shall remain the sole intellectual property of Aynzenix Technology Limited and shall be protected under the respective copyright and intellectual property laws.
                            </p>
                            <p className="mb-6">
                                We hereby grant a limited, non-exclusive and non-transferable license to you for the use of our platforms strictly for the purpose of your brokerage operations.
                            </p>
                            <p className="mb-4 font-semibold text-slate-900">You may not:</p>
                            <ul className="list-none pl-0 space-y-4">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Reverse engineer, decompile, or attempt to extract source code from our software.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Sell, sublicense, or distribute our proprietary technology to third parties without written permission.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Use our name, logo, or branding in any way that suggests Aynzenix operates as a financial broker.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 4 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">04</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Client Responsibilities</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                As our technical partner, you undertake to:
                            </p>
                            <ul className="list-none pl-0 space-y-4">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Provide precise and thorough documentation that is necessary for KYC, compliance, and system setup.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Run your brokerage business strictly in accordance with the laws and regulations of your local area.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Keep the confidentiality and security of the administrative credentials, server access, and API keys.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 5 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">05</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Payment Terms & Suspension</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                Service charges are regulated by the Service Level Agreement (SLA) signed. Payments must be made on time as agreed.
                            </p>
                            <div className="p-4 bg-orange-50 border border-orange-100 rounded-md text-orange-800 text-sm">
                                <strong>Notice of Suspension:</strong> In case of outstanding payments beyond a reasonable period, Aynzenix reserves the right to temporarily suspend access to the CRM servers, trading bridges, or any such infrastructure until the outstanding payments are cleared. This is done only for the purpose of protecting the integrity of the system.
                            </div>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 6 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">06</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Limitation of Liability</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                Aynzenix is a technology company, not a financial regulator, broker, or liquidity provider.
                            </p>
                            <p className="mb-4 font-semibold text-slate-900">We are not liable for:</p>
                            <ul className="list-none pl-0 space-y-4">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Losses incurred due to fluctuations in financial markets or trading activities.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Disruptions in our services due to third-party data centers, hosting companies, or internet service providers.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Fines or legal repercussions imposed by financial regulators due to the broker’s illegal business practices.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                </motion.div>

                {/* Footer / End of Doc */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="mt-24 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm"
                >
                    <p>&copy; {new Date().getFullYear()} Aynzenix Technology Limited. All rights reserved.</p>
                </motion.div>

            </div>
        </main>
    );
}