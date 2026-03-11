import React from "react";
import { motion } from "framer-motion";

export default function TermsAndConditions() {
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
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 border-b border-slate-200 pb-8 text-center"
        >
          <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-3">
            Aynzenix Technology Limited
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight mb-6">
            Terms & Conditions
          </h1>

          <p className="text-lg text-slate-600 leading-relaxed">
            Aynzenix Technology Limited – Terms and Conditions of Use
          </p>
        </motion.header>

        {/* Body */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >

          {/* Section 1 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">01</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Introduction</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Aynzenix Technology Limited helps institutions and brokers and other companies like that with technology. We give them the technology they need to do their jobs. This includes platforms for trading ways to manage customers and ways to move money around.
              </p><br />

              <p>
                These Terms are like a contract between you, the client and Aynzenix Technology Limited. If you are using our services for a company you have to be allowed to make decisions for that company. You have to be able to bind the company to these Terms. I mean when I say you I mean the client. When I say our services I mean the services that Aynzenix Technology Limited provides.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 2 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">02</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Scope of Services</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Aynzenix offers a range of financial tech solutions to help with brokerage operations and trading systems. They provide:
              </p><br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">Custom trading platforms</li>
                <li className="pl-4 border-l-2 border-slate-200">Forex CRM software and client management tools</li>
                <li className="pl-4 border-l-2 border-slate-200">Back-office infrastructure, for brokerages</li>
                <li className="pl-4 border-l-2 border-slate-200">Technology to connect liquidity and API integrations</li>
                <li className="pl-4 border-l-2 border-slate-200">Payment gateways and cryptocurrency integrations</li>
                <li className="pl-4 border-l-2 border-slate-200">Development of websites and mobile apps</li>
                <li className="pl-4 border-l-2 border-slate-200">Security infrastructure and hosting services</li>
              </ul><br />

              <p>
                All of these services come with a Service Level Agreement or commercial agreement.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 3 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">03</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Client Eligibility</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Aynzenix services are for businesses that are run by professionals, like brokers, fintech firms, financial institutions and big companies. When people use these services they have to be at 18 years old and able to sign contracts that really count.
              </p><br />

              <p>
                Clients have to make sure that they are using Aynzenix technology in a way that follows the laws and rules of where they're. Aynzenix services and Aynzenix technology have to be used in a way that's okay, with the local government.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 4 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">04</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Intellectual Property</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Aynzenix owns everything they create including software, algorithms, designs, databases, code, platform architecture and documentation.
              </p><br />

              <p>
                This means that Aynzenix is the one who has complete control over these things.
              </p><br />

              <p>
                Aynzenix gives clients permission to use their systems. Only for internal brokerage operations and only in a limited way. Clients do not have the right to:
              </p><br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">Try to figure out how the software works by reversing it or taking it apart</li>
                <li className="pl-4 border-l-2 border-slate-200">Make copies of the platform architecture</li>
                <li className="pl-4 border-l-2 border-slate-200">Sell or give away the technology to someone without getting permission from Aynzenix first</li>
                <li className="pl-4 border-l-2 border-slate-200">Use the Aynzenix name or logo without getting written permission, from them</li>
              </ul><br />

              <p>
                If clients use Aynzenix property in a way that is not allowed Aynzenix may stop providing services to them and take legal action against them. Aynzenix takes the protection of their property very seriously and they will do what it takes to make sure it is not used improperly.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 5 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">05</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">System Availability</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Aynzenix aims to keep its systems running all the time. However they cannot promise that you will always be able to access their services. This is because sometimes:
              </p><br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">they have to do maintenance on their servers</li>
                <li className="pl-4 border-l-2 border-slate-200">their network can get disrupted</li>
                <li className="pl-4 border-l-2 border-slate-200">they can get cyber attacks</li>
                <li className="pl-4 border-l-2 border-slate-200">the infrastructure of third-party providers can go down</li>
              </ul>
              <br />

              <p>
                Aynzenix will do its best to make sure that service interruptions are as short as possible and get their systems back up quickly.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 6 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">06</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Payment Terms</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Fees for services are mentioned in the Clients Service Level Agreement or commercial proposal.
              </p>
              <br />

              <p>Clients agree to:</p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">pay all service fees on time</li>
                <li className="pl-4 border-l-2 border-slate-200">have a way to pay</li>
                <li className="pl-4 border-l-2 border-slate-200">clear any owed amounts quickly</li>
              </ul>
              <br />

              <p>
                If payments are not made on time the service might be stopped or ended.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 7 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">07</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Confidentiality</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                Both parties agree to keep information about the business like trade secrets, technical details, financial numbers and how the business runs that they share with each other during their work together.
              </p>
              <br />

              <p>
                This confidential information should not be shared with others unless the law says they have to or if they all agree in writing.
              </p>
            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 8 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">08</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Limitation of Liability</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                Aynzenix gives people technology solutions. Aynzenix does not work as a broker or a liquidity provider or an investment advisor.
              </p>
              <br />

              <p>The Aynzenix Company is not responsible for things like</p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">trading losses that people have</li>
                <li className="pl-4 border-l-2 border-slate-200">market volatility that happens</li>
                <li className="pl-4 border-l-2 border-slate-200">regulatory penalties that are imposed on brokers</li>
                <li className="pl-4 border-l-2 border-slate-200">when clients misuse the software that Aynzenix provides</li>
              </ul>
              <br />

              <p>
                Aynzenix is only liable for the amount of money that people paid for Aynzenix services in the time they got services from Aynzenix.
              </p>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 9 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">09</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Termination</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">

              <p>
                If either side wants to stop the agreement they have to give written notice and follow the rules that're in the contract.
              </p>
              <br />

              <p>When the agreement is stopped:</p>
              <br />

              <ul className="list-none pl-0 space-y-4">
                <li className="pl-4 border-l-2 border-slate-200">the company may take away access, to the system</li>
                <li className="pl-4 border-l-2 border-slate-200">the company may give options to take out the data</li>
                <li className="pl-4 border-l-2 border-slate-200">any money that is still owed has to be paid</li>
              </ul>

            </div>
          </motion.section>

          <hr className="border-slate-100" />

          {/* Section 10 */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
            <div className="md:text-center">
              <span className="text-sm font-mono text-slate-400">10</span>
              <h2 className="text-xl font-bold text-slate-900 mt-1">Governing Law</h2>
            </div>

            <div className="prose prose-slate max-w-none text-slate-600">
              <p>
                These Terms are governed by the laws applicable to the jurisdiction in which Aynzenix Technology Limited operates.
              </p>
            </div>
          </motion.section>

        </motion.div>

        {/* Footer */}
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