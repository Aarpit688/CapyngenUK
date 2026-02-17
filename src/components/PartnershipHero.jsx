import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";

export default function PartnershipHero({
    title = "Partnership Programs",
    description = "Join our agency partnership, earn commissions by introducing clients, attend events, and expand your network",
    // Replace this with your actual image path from your assets folder
    teamImage = assets.partnership1,
}) {
    return (
        <section className="relative w-full overflow-hidden text-white pt-4 bg-black">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">

                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-bold tracking-tight leading-tight"
                >
                    {title}
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl md:text-[22px] font-medium leading-snug sm:leading-relaxed"
                >
                    {description}
                </motion.p>

            </div>

            {/* Team Image / Graphic */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="mt-12 w-full flex justify-center items-end"
            >
                <img
                    src={teamImage}
                    alt="Partnership Team"
                    className="w-full object-contain object-bottom pointer-events-none drop-shadow-2xl"
                />
            </motion.div>
        </section>
    );
}