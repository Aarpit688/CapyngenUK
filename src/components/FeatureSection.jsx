import React from 'react';
import { Check } from 'lucide-react';

const FeatureSection = ({
    title,
    description,
    features = [],
    imageSrc,
    imageAlt = "Feature illustration",
    reverseLayout = false
}) => {
    return (
        // Replaced bg-white with a deep dark background
        <section className="w-full bg-[#0a0f1c] py-10 px-6 border-b border-white/5">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Image Column */}
                <div className={`w-full ${reverseLayout ? 'lg:order-last' : ''}`}>
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        // Added rounded corners and a dark shadow to blend perfectly into dark mode
                        className="w-full h-auto aspect-square md:aspect-[4/5] lg:aspect-square object-cover rounded-[2.5rem] shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5"
                    />
                </div>

                {/* Content Column */}
                <div className="flex flex-col space-y-8">
                    <div className="space-y-4">
                        {/* Swapped dark text for crisp white */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                            {title}
                        </h2>
                        {/* Swapped medium gray for a readable slate-300 */}
                        <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
                            {description}
                        </p>
                    </div>

                    {/* Render features only if the array exists and has items */}
                    {features.length > 0 && (
                        <ul className="space-y-5 pt-2">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-4">
                                    <div className="mt-1 shrink-0 bg-emerald-500/10 p-1 rounded-full">
                                        {/* Brightened the checkmark slightly to pop against the dark BG */}
                                        <Check
                                            className="w-5 h-5 text-emerald-400"
                                            strokeWidth={3}
                                        />
                                    </div>
                                    {/* Lightened the feature text */}
                                    <span className="text-slate-200 text-lg font-medium">
                                        {feature}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </section>
    );
};

export default FeatureSection;