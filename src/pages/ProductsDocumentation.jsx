import React from "react";
import { motion } from "framer-motion";

export default function ProductsDocumentation() {
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
                        Technical Documentation
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        The Aynzenix Ecosystem: Next-Gen Forex Technology Suite
                    </h1>
                    <div className="text-lg text-slate-600 max-w-3xl leading-relaxed">
                        <p className="mb-4">
                            At Aynzenix Technology Limited, we don’t just build tools — we build complete brokerage infrastructure. Our ecosystem is engineered for performance, scalability, and long-term growth.
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
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Custom Forex Trading Platforms</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                Our main trading solution is developed with speed, stability, and professional-grade usability in mind.
                            </p>
                            <ul className="list-none pl-0 space-y-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Ultra-Fast Execution</strong>
                                    By means of a low-latency bridge architecture, the system can rapidly execute orders; thus, slippage is kept at the minimum, and traders' confidence is maximized.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Multi-Terminal Access</strong>
                                    Traders are allowed to effortlessly change over between Desktop, Web, and Mobile interfaces, thus ensuring the same experience on all devices.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Advanced Charting & Analytics</strong>
                                    Built in technical indicators, multiple timeframes, drawing tools, and analysis features that are suitable for both retail and professional traders.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">White-Label Customization</strong>
                                    You have complete control over your brokerage identity through total branding flexibility logos, themes, domains, and custom UI elements.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 2 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">02</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Intelligent Forex CRM Software</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                The Aynzenix CRM is designed specifically for high-volume Forex trading.
                            </p>
                            <ul className="list-none pl-0 space-y-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Automated Onboarding & eKYC</strong>
                                    Streamline account verification using structured digital KYC processes and document management.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Multi-Tier IB & Affiliate Module</strong>
                                    Organize Introducing Brokers and affiliate programs using automated commission schemes, tracking, and performance analysis.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Client Retention Engine</strong>
                                    Analyze inactive accounts, segment client activity, and launch automated email or SMS campaigns to boost engagement and trading activity.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Real-Time Financial Dashboard</strong>
                                    Track Total Deposits, Withdrawals, Trading Volume, and Net Equity using a centralized performance dashboard.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 3 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">03</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Payment Gateway & Crypto Integration</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                Funding infrastructure is often the biggest barrier for new brokers — we solve that.
                            </p>
                            <ul className="list-none pl-0 space-y-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Global Payment Coverage</strong>
                                    Support for major credit cards, bank wire transfers, and local e-wallets to cater to global clients.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Crypto-First Infrastructure</strong>
                                    Customized modules for Bitcoin, USDT (ERC20/TRC20), and Ethereum with optimized processing and instant conversion features.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Advanced Transaction Security</strong>
                                    Integrated fraud protection tools, 3D Secure support, and transaction monitoring to minimize financial risks.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 4 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">04</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Web & App Development for Brokers</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                Your brokerage’s success starts with first impressions.
                            </p>
                            <ul className="list-none pl-0 space-y-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Conversion-Optimized Landing Pages</strong>
                                    Strategically Designed Funnels to Convert Random Visitors Into Verified Traders.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Secure Client Portal</strong>
                                    An Entirely Integrated "My Account" Panel in Which Traders Can Manage Wallets, Download Platforms, Submit Documents and Check Activity.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">SEO & Performance Optimization</strong>
                                    Created for fast loading speeds, excellent mobile responsiveness, and search engine visibility to support the organic growth.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 5 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">05</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Back-Office & Risk Management Tools</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                Complete operational control — without complexity.
                            </p>
                            <ul className="list-none pl-0 space-y-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Risk Configuration & Routing</strong>
                                    Specify leverage levels, margin call thresholds, stop-out rules and set up A-Book / B-Book execution models.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Advanced Reporting Suite</strong>
                                    Produce in-depth P&L statements, trade histories, exposure reports, and regulatory-compliant documentation within seconds.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Role-Based Staff Permissions</strong>
                                    Granular access control restricts the teams of sales, support, finance, and risk to only the necessary departments thus maintaining operational security and accountability.
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
                    <p>&copy; {new Date().getFullYear()} Aynzenix Technology Limited. Confidential & Proprietary.</p>
                </motion.div>

            </div>
        </main>
    );
}