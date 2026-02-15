import React from "react";

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-black text-gray-300 py-20 px-4 sm:px-6 lg:px-8 antialiased">
            <div className="max-w-4xl mx-auto bg-gray-900/40 border border-gray-800 rounded-2xl p-8 sm:p-12 shadow-2xl backdrop-blur-sm">

                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center sm:text-left leading-tight">
                    Data Protection & Privacy Commitment | Aynzenix Global Security
                </h1>

                <div className="space-y-10">
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            1. Commitment to Privacy
                        </h2>
                        <p className="leading-relaxed">
                            At Aynzenix Technology Limited, we recognize that data is the backbone of any Forex business. This Privacy Policy document explains how we collect, process, and protect data for our clients and their end-users. We operate under international data protection guidelines (GDPR) to guarantee the safety of your business.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            2. Information We Collect
                        </h2>
                        <div className="space-y-4 ml-2">
                            <div>
                                <span className="font-semibold text-gray-100 block">Corporate Data:</span>
                                <span className="text-gray-400">This includes business registration, contact details, and billing information.</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-100 block">Technical Logs:</span>
                                <span className="text-gray-400">This refers to IP addresses, login timestamps, and device identifiers that are used to prevent unauthorized access.</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-100 block">Client Management Data:</span>
                                <span className="text-gray-400">As a CRM provider, we store on our servers data brokers input about their traders (e.g. names, emails, transaction history). We keep this data at the highest level of confidentiality.</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            3. Data Usage & Processing
                        </h2>
                        <p className="leading-relaxed mb-4">
                            We use collected data solely to:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-400 marker:text-indigo-500">
                            <li>Enable the functionality of the trading platforms and CRMs.</li>
                            <li>Provide 24/7 technical support and system troubleshooting.</li>
                            <li>Improve the security of the platforms using multi-factor authentication (MFA).</li>
                            <li>Communicate important updates or security patches for the system. okay bye</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            4. Security Architecture
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Security is in our DNA. Our IT solutions incorporate:
                        </p>
                        <div className="space-y-4 ml-2">
                            <div>
                                <span className="font-semibold text-gray-100 block">End-to-End Encryption:</span>
                                <span className="text-gray-400">All data in transit and at rest is encrypted with AES-256 encryption.</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-100 block">Redundant Servers:</span>
                                <span className="text-gray-400">Data is replicated across multiple secure UK and worldwide sites to ensure data is not lost.</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-100 block">Vulnerability Scanning:</span>
                                <span className="text-gray-400">Regular security audits are conducted to neutralize any potential threats.</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            5. Third-Party Disclosure
                        </h2>
                        <p className="leading-relaxed mb-4">
                            We never sell or rent our clients’ information. Information is shared with:
                        </p>
                        <div className="space-y-4 ml-2">
                            <div>
                                <span className="font-semibold text-gray-100 block">Liquidity Providers/Payment Gateways:</span>
                                <span className="text-gray-400">Only as required to complete trades or process deposits.</span>
                            </div>
                            <div>
                                <span className="font-semibold text-gray-100 block">Legal Authorities:</span>
                                <span className="text-gray-400">Only as required by a court order or legal process.</span>
                            </div>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                            6. Your Rights
                        </h2>
                        <p className="leading-relaxed">
                            Clients have the right to request a full audit of the data we store on their behalf, as well as the right to data portability and deletion upon contract termination.
                        </p>
                    </section>
                </div>

            </div>
        </main>
    );
}