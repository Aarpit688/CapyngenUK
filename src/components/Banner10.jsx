import { ReactLenis } from "lenis/react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef } from "react";

const SECTION_HEIGHT = 1500;

export const Banner10 = ({
  backgroundImage = "",
  heading,
  subheading,
  parallaxImages = [],
}) => {
  return (
    <div className="bg-zinc-950 w-full">
      {/* MOBILE LAYOUT (No Parallax Effects) */}
      <div className="block md:hidden relative h-screen w-full overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <h1 className="text-4xl font-bold text-white max-w-2xl leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
            {heading}
          </h1>
          <p className="mt-6 text-lg text-zinc-300 max-w-xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
            {subheading}
          </p>
        </div>
      </div>

      {/* DESKTOP VERSION (Parallax + Scroll Animation) */}
      <div className="hidden md:block">
        <ReactLenis
          root
          options={{
            lerp: 0.05,
          }}
        >
          <Hero
            backgroundImage={backgroundImage}
            heading={heading}
            subheading={subheading}
            parallaxImages={parallaxImages}
          />
        </ReactLenis>
      </div>
    </div>
  );
};

const Hero = ({ backgroundImage, heading, subheading, parallaxImages }) => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      <CenterImageWithText
        backgroundImage={backgroundImage}
        heading={heading}
        subheading={subheading}
      />

      <ParallaxImages parallaxImages={parallaxImages} />

      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

const CenterImageWithText = ({ backgroundImage, heading, subheading }) => {
  const { scrollY } = useScroll();

  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        clipPath,
        opacity,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/70"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          {heading}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          {subheading}
        </p>
      </motion.div>
    </motion.div>
  );
};

const ParallaxImages = ({ parallaxImages }) => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      {parallaxImages.map((img, i) => (
        <ParallaxImg
          key={i}
          src={img.src}
          alt={img.alt}
          start={img.start}
          end={img.end}
          className={img.className}
        />
      ))}
    </div>
  );
};

const ParallaxImg = ({ className, alt, src, start, end }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`${start}px end`, `end ${end * -1}px`],
  });

  const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);
  const y = useTransform(scrollYProgress, [0, 1], [start, end]);
  const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

  return (
    <motion.img
      src={src}
      alt={alt}
      ref={ref}
      className={`object-cover rounded-lg shadow-lg ${className || ""}`}
      style={{ transform, opacity }}
    />
  );
};

export default Banner10;
