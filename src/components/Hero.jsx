import { useState } from "react";
import { ArrowRight, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Skeleton } from "./ui/skeleton";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  const item = {
    hidden: { y: 20 },
    show: {
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 shadow-sm"
            >
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-white/10 flex items-center justify-center">
                  <Users className="w-3 h-3 text-primary" />
                </div>
                <div className="w-6 h-6 rounded-full bg-primary/30 border border-white/10" />
                <div className="w-6 h-6 rounded-full bg-primary/40 border border-white/10" />
              </div>
              <span className="text-sm font-medium text-white/90 tracking-wide">
                100+ Happy Clients
              </span>
            </motion.div>

            {/* Heading (STATIC FOR FCP & SEO) */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95]">
              Turning Ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Digital Legends
              </span>
            </h1>

            {/* Description */}
            <motion.p
              variants={item}
              initial="hidden"
              animate="show"
              className="text-lg md:text-xl text-muted-foreground/80 max-w-xl leading-relaxed font-light"
            >
              We create immersive digital experiences that defy expected norms.
              Transform your brand with distinct aesthetics and
              performance-first engineering.
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-black font-bold text-lg hover:shadow-[0_0_40px_-10px_var(--color-primary)] transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Rating */}
            <motion.div
              variants={item}
              initial="hidden"
              animate="show"
              className="flex items-center gap-6 pt-4 border-t border-white/5"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                Rated{" "}
                <span className="font-semibold text-foreground">4.9/5</span> by
                industry leaders
              </span>
            </motion.div>
          </div>

          {/* RIGHT VISUAL (DECORATIVE ONLY) */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] rotate-3 blur-3xl opacity-60" />

              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                {!imgLoaded && (
                  <Skeleton className="absolute inset-0 w-full h-full rounded-[2rem]" />
                )}

                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fm=webp"
                  alt="Team collaboration"
                  width="800"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setImgLoaded(true)}
                  className={`w-full h-full object-cover transition-all duration-700 ${
                    imgLoaded ? "opacity-60" : "opacity-0"
                  }`}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                {/* Floating Card */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 right-10 p-6 bg-black/40 border border-white/10 rounded-2xl"
                >
                  <p className="text-primary text-4xl font-bold">250+</p>
                  <p className="text-sm text-white/60">Projects Delivered</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
