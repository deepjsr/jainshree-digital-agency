import { ArrowRight, Users, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 shadow-sm"
            >
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-white/10 flex items-center justify-center">
                  <Users className="w-3 h-3 text-primary" />
                </div>
                <div className="w-6 h-6 rounded-full bg-primary/30 border border-white/10" />
                <div className="w-6 h-6 rounded-full bg-primary/40 border border-white/10" />
              </div>
              <span className="text-sm font-medium text-white/90 font-sans tracking-wide">
                100+ Happy Clients
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              variants={item}
              className="text-5xl md:text-7xl font-bold text-foreground leading-[0.9] text-balance tracking-tighter font-heading"
            >
              Turning Ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
                Digital Legends
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={item}
              className="text-lg md:text-xl text-muted-foreground/80 max-w-xl leading-relaxed font-light"
            >
              We create immersive digital experiences that defy expected norms.
              Transform your brand with distinct aesthetics and motion-first
              engineering.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-black font-bold text-lg hover:shadow-[0_0_40px_-10px_var(--color-primary)] transition-all duration-300"
              >
                Start A Project
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={item}
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
          </motion.div>

          {/* Right Content - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract Composition */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] transform rotate-3 blur-3xl" />
              <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-[#0a0a0a]">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Team"
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute top-10 right-10 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl"
                >
                  <p className="text-primary text-4xl font-heading font-bold">
                    250+
                  </p>
                  <p className="text-sm text-white/60">Projects Delivered</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
