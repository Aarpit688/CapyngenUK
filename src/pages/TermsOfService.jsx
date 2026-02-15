import React from "react";

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-black text-gray-300 py-20 px-4 sm:px-6 lg:px-8 antialiased">
            <div className="max-w-4xl mx-auto bg-gray-900/40 border border-gray-800 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-sm">

                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center sm:text-left leading-tight">
                    Terms of Service & Business Operations Agreement | Aynzenix IT Solutions
                </h1>

                <div className="space-y-10">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            1. Introduction
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Welcome to Aynzenix Technology Limited.
                        </p>
                        <p className="leading-relaxed">
                            These Terms of Service ("Terms") cover the fulfillment of your needs through our Forex Broker IT Solutions, software platforms, and consulting services. You (the "Client" or "Broker"), by cooperating with us or using our technology, are agreeing to these Terms. If you represent a company, you acknowledge that you have the authority to legally bind the company to this agreement.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            2. Scope of Services
                        </h2>
                        <p className="leading-relaxed mb-6">
                            Aynzenix provides high-end infrastructure for the financial sector, including:
                        </p>
                        <div className="space-y-4 ml-2">
                            <div>
                                <span className="font-semibold text-gray-100 block">Custom Trading Platforms:</span>
                                <span className="text-gray-400">Market execution specific Proprietary software.</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-100 block">Forex CRM Systems:</span>
                                <span className="text-gray-400">Managing client relationships and following up on potential clients.</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-100 block">Web & App Development:</span>
                                <span className="text-gray-400">SEO, friendly online presence.</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-100 block">API & Payment Integrations:</span>
                                <span className="text-gray-400">Secure link for liquidity and capital.</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            3. License and Intellectual Property
                        </h2>
                        <p className="leading-relaxed mb-4">
                            All software, source code, designs, and technical documentation provided by Aynzenix are the exclusive intellectual property of Aynzenix Technology Limited. We grant you a limited, non-exclusive, and non-transferable license to use our platforms. You are strictly prohibited from the following:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400 marker:text-indigo-500">
                            <li>Reverse-engineering or decompiling our software.</li>
                            <li>Selling our proprietary technology to third parties without our written consent.</li>
                            <li>Using our branding in a manner that suggests Aynzenix is the financial broker.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            4. Client Responsibilities
                        </h2>
                        <p className="leading-relaxed mb-4">
                            As a technology partner, you agree to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400 marker:text-indigo-500">
                            <li>Deliver correct documentation for KYC and system implementation.</li>
                            <li>Comply with the legal framework of your jurisdiction for your brokerage business.</li>
                            <li>Protect the security of administrative passwords and API keys.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            5. Payment Terms & Service Suspension
                        </h2>
                        <p className="leading-relaxed">
                            Service charges are charged according to the Service Level Agreement (SLA) that has been signed. Payments are to be made within the stipulated time frame. Aynzenix reserves the right to suspend access to CRM servers or trading bridges in case of non-payment for an extended period for the protection of our infrastructure.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            6. Limitation of Liability
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Aynzenix is a technology company, not a financial regulator or a liquidity provider. We are not liable for:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400 marker:text-indigo-500">
                            <li>Losses incurred due to financial market volatility or trading.</li>
                            <li>Disruptions in network connectivity due to third-party data centers or internet service providers.</li>
                            <li>Fines imposed by financial regulators on the broker for non-compliant business practices.</li>
                        </ul>
                    </section>
                </div>

            </div>
        </main>
    );
}