import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
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
                        Aynzenix Global Security
                    </p>
                    <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                        Data Protection & Privacy Commitment
                    </h1>
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
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Our Commitment to Privacy</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-4">
                                At Aynzenix Technology Limited, we know that data is the basis of any successful Forex brokerage. A good relationship is based on trust, and trust is security, and security is first of all correct data handling.
                            </p>
                            <p>
                                This Privacy Policy is designed to disclose to our clients and their end users the ways in which their data is collected, processed, stored, and protected. Our operations are in conformity with globally accepted data protection standards such as GDPR principles, so your business and your clients data will be safe.
                            </p>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 2 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">02</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Information We Collect</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                In order to provide safe and efficient services, we gather and handle the following types of data:
                            </p>
                            <ul className="list-none pl-0 space-y-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Corporate Information</strong>
                                    Business registration documents, company contact details, and billing information necessary for contractual and regulatory requirements.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Technical Logs & System Data</strong>
                                    IP addresses, login timestamps, device identifiers, and server logs are some of the data we use to check the security of our system and to keep out unwanted accesses.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Client Management</strong>
                                    Data Being a CRM and trading technology provider, we keep the data that brokers enter into our systems, such as trader names, email addresses, account details, and transaction history.
                                </li>
                            </ul>
                            <p className="mt-4">
                                This data is treated with utmost confidentiality and security.
                            </p>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 3 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">03</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Data Usage & Processing</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                We employ the collected data solely for operational and security reasons, including:
                            </p>
                            <ul className="list-none pl-0 space-y-4 mb-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Facilitating the functionality of trading platforms and CRM software.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Offering technical support and system analysis 24/7.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Improving the security of trading platforms through various means, such as multi-factor authentication (MFA).
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Sending crucial system updates and security patches.
                                </li>
                            </ul>
                            <p>
                                We do not employ client data for marketing, resale, or other commercial purposes.
                            </p>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 4 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">04</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Security Architecture</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-4">
                                Security is built in at every level of our infrastructure.
                            </p>
                            <p className="mb-6">
                                Our systems use:
                            </p>
                            <ul className="list-none pl-0 space-y-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">End, to, End Encryption</strong>
                                    All data, whether being transferred or stored, is secured using AES, 256 encryption standards.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Redundant Server Infrastructure</strong>
                                    Data is securely copied across several highly secured data centers in the UK and other worldwide locations to ensure service continuity and avoid data loss.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Continuous Monitoring & Vulnerability</strong>
                                    ScanningPeriodic security inspections, penetration testing, and vulnerability reviews are performed to detect and eliminate potential risks before they can be exploited.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 5 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">05</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Third-Party Disclosure</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                Aynzenix does not sell, rent, or commercially distribute client information.
                            </p>
                            <p className="mb-6">
                                Information can only be shared under limited conditions:
                            </p>
                            <ul className="list-none pl-0 space-y-6">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Liquidity Providers and Payment Gateways</strong>
                                    – only as necessary to complete trades or financial transactions.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    <strong className="block text-slate-900 mb-1">Legal Authorities</strong>
                                    – only as required by legal court orders or legal regulatory procedures.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                    <hr className="border-slate-100" />

                    {/* Section 6 */}
                    <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-8">
                        <div className="md:text-right">
                            <span className="text-sm font-mono text-slate-400">06</span>
                            <h2 className="text-xl font-bold text-slate-900 mt-1">Your Rights</h2>
                        </div>
                        <div className="prose prose-slate max-w-none text-slate-600">
                            <p className="mb-6">
                                Clients retain full control of their data.
                            </p>
                            <p className="mb-6">
                                You have the right to:
                            </p>
                            <ul className="list-none pl-0 space-y-4">
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Request a full audit of the data we store on your behalf.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Request data portability in a structured format.
                                </li>
                                <li className="pl-4 border-l-2 border-slate-200">
                                    Request deletion of stored data upon contract termination, subject to any legal retention requirements.
                                </li>
                            </ul>
                        </div>
                    </motion.section>

                </motion.div>

            </div>
        </main>
    );
}