import { ReactLenis } from "lenis/dist/lenis-react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { FiMapPin } from "react-icons/fi";
import { useRef } from "react";

export const Banner10 = () => {
  return (
    <div className="bg-zinc-950">
      <ReactLenis
        root
        options={{
          lerp: 0.05,
        }}
      >
        <Hero />
      </ReactLenis>
    </div>
  );
};

// Section scroll height
const SECTION_HEIGHT = 1500;

const Hero = () => {
  return (
    <div
      style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
      className="relative w-full"
    >
      {/* Background + Text */}
      <CenterImageWithText />

      {/* Foreground parallax elements */}
      <ParallaxImages />

      {/* Bottom dark gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </div>
  );
};

// ✅ Center Image with Hero Text (heading + paragraph)
const CenterImageWithText = () => {
  const { scrollY } = useScroll();

  // Clip mask animation
  const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
  const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);
  const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

  // Image zoom effect
  const backgroundSize = useTransform(
    scrollY,
    [0, SECTION_HEIGHT + 500],
    ["170%", "100%"]
  );
  const opacity = useTransform(
    scrollY,
    [SECTION_HEIGHT, SECTION_HEIGHT + 500],
    [1, 0]
  );

  // Text fade & upward motion
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -80]);

  return (
    <motion.div
      className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center"
      style={{
        clipPath,
        backgroundSize,
        opacity,
        backgroundImage:
          "url(https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2670&auto=format&fit=crop)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Hero text overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/70"
        style={{ opacity: textOpacity, y: textY }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
          Journey Beyond Earth
        </h1>
        <p className="mt-6 text-lg md:text-xl text-zinc-300 max-w-2xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]">
          Embark on a new era of exploration — where innovation, precision, and
          courage unite to redefine the limits of possibility.
        </p>
      </motion.div>
    </motion.div>
  );
};

// Parallax foreground images
const ParallaxImages = () => {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-[200px]">
      <ParallaxImg
        src="https://images.unsplash.com/photo-1484600899469-230e8d1d59c0?q=80&w=2670&auto=format&fit=crop"
        alt="Rocket launch"
        start={-200}
        end={200}
        className="w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2670&auto=format&fit=crop"
        alt="Space shuttle"
        start={200}
        end={-250}
        className="mx-auto w-2/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?q=80&w=2370&auto=format&fit=crop"
        alt="Satellite orbit"
        start={-200}
        end={200}
        className="ml-auto w-1/3"
      />
      <ParallaxImg
        src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=2670&auto=format&fit=crop"
        alt="Rocket detail"
        start={0}
        end={-500}
        className="ml-24 w-5/12"
      />
    </div>
  );
};

// Reusable Parallax Image
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
      className={`object-cover rounded-lg shadow-lg ${className}`}
      ref={ref}
      style={{ transform, opacity }}
    />
  );
};
