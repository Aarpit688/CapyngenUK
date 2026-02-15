import React from "react";
import { motion } from "framer-motion";

export default function ProductsDocumentation() {
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
            {/* Background Ambient Glows (Technology Theme: Blue & Violet) */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="relative z-10 max-w-[90vw] mx-auto bg-gray-900/50 backdrop-blur-xl border border-white/5 rounded-3xl p-8 sm:p-12 md:p-16 lg:p-20 shadow-2xl">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-b border-white/10 pb-10"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400 mb-6 tracking-tight">
                        The Aynzenix Ecosystem: Next-Gen Forex Technology Suite
                    </h1>
                    <div className="space-y-2 text-xl sm:text-2xl font-medium text-gray-400 max-w-5xl">
                        <p>At Aynzenix Technology Limited, we don’t just build tools — we build complete brokerage infrastructure.</p>
                        <p>Our ecosystem is engineered for performance, scalability, and long-term growth.</p>
                    </div>
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
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xl border border-blue-500/30">1</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Custom Forex Trading Platforms</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>
                                Our main trading solution is developed with speed, stability, and professional, grade usability in mind.
                            </p>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Ultra, Fast Execution</strong>
                                        By means of a low, latency bridge architecture, the system can rapidly execute orders; thus, slippage is kept at the minimum, and traders' confidence is maximized.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Multi, Terminal Access</strong>
                                        Traders are allowed to effortlessly change over between Desktop, Web, and Mobile interfaces, thus ensuring the same experience on all devices.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Advanced Charting & Analytics</strong>
                                        Built in technical indicators, multiple timeframes, drawing tools, and analysis features that are suitable for both retail and professional traders.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">White, Label Customization</strong>
                                        You have complete control over your brokerage identity through total branding flexibility logos, themes, domains, and custom UI elements.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 2 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xl border border-blue-500/30">2</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Intelligent Forex CRM Software</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>
                                The Aynzenix CRM is designed specifically for high-volume Forex trading.
                            </p>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Automated Onboarding & eKYC</strong>
                                        Streamline account verification using structured digital KYC processes and document management.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Multi-Tier IB & Affiliate Module</strong>
                                        Organize Introducing Brokers and affiliate programs using automated commission schemes, tracking, and performance analysis.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Client Retention Engine</strong>
                                        Analyze inactive accounts, segment client activity, and launch automated email or SMS campaigns to boost engagement and trading activity.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Real-Time Financial Dashboard</strong>
                                        Track Total Deposits, Withdrawals, Trading Volume, and Net Equity using a centralized performance dashboard.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 3 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xl border border-blue-500/30">3</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Payment Gateway & Crypto Integration</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>Funding infrastructure is often the biggest barrier for new brokers — we solve that.</p>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Global Payment Coverage</strong>
                                        Support for major credit cards, bank wire transfers, and local e-wallets to cater to global clients.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Crypto-First Infrastructure</strong>
                                        Customized modules for Bitcoin, USDT (ERC20/TRC20), and Ethereum with optimized processing and instant conversion features.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Advanced Transaction Security</strong>
                                        Integrated fraud protection tools, 3D Secure support, and transaction monitoring to minimize financial risks.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 4 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xl border border-blue-500/30">4</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Web & App Development for Brokers</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>Your brokerage’s success starts with first impressions.</p>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Conversion, Optimized Landing Pages</strong>
                                        Strategically Designed Funnels to Convert Random Visitors Into Verified Traders.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Secure Client Portal</strong>
                                        An Entirely Integrated "My Account" Panel in Which Traders Can Manage Wallets, Download Platforms, Submit Documents and Check Activity.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">SEO & PERFORMANCE OPTIMIZATION</strong>
                                        Created for fast loading speeds, excellent mobile responsiveness, and search engine visibility to support the organic growth.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    {/* Section 5 */}
                    <motion.section variants={itemVariants}>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 font-bold text-xl border border-blue-500/30">5</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-white">Back-Office & Risk Management Tools</h2>
                        </div>
                        <div className="space-y-6 text-base sm:text-lg lg:text-xl leading-relaxed text-gray-400 pl-0 sm:pl-14">
                            <p>Complete operational control — without complexity.</p>
                            <ul className="space-y-5">
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Risk Configuration & Routing</strong>
                                        Specify leverage levels, margin call thresholds, stop, out rules and set up A, Book / B, Book execution models.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Advanced Reporting Suite</strong>
                                        Produce in- depth P&L statements, trade histories, exposure reports, and regulatory, compliant documentation within seconds.
                                    </div>
                                </li>
                                <li className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                                    <span className="w-2.5 h-2.5 mt-2.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.6)] shrink-0"></span>
                                    <div>
                                        <strong className="text-gray-200 block mb-1">Role, Based Staff Permissions</strong>
                                        Granular access control restricts the teams of sales, support, finance, and risk to only the necessary departments thus maintaining operational security and accountability.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                </motion.div>
            </div>
        </main>
    );
}