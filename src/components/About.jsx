import { CheckCircle2, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { value: "200+", label: "Projects Completed" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "8+", label: "Years Experience" },
  { value: "50+", label: "Team Members" },
];

const features = [
  "Custom solutions tailored to your needs",
  "24/7 dedicated support team",
  "Proven track record of success",
  "Transparent communication",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
       {/* Decorative Background */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl pointer-events-none transform translate-x-1/3" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Our team collaborating on projects"
                className="w-full h-auto object-cover aspect-4/3 grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Floating Stats Card - Redesigned */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="absolute -bottom-8 -right-8 md:bottom-8 md:-right-8 bg-[#111111] rounded-2xl shadow-xl p-8 border border-white/10"
            >
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_-5px_var(--color-primary)]">
                  <ArrowUpRight className="w-8 h-8 text-black" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Years of</p>
                  <p className="text-2xl font-bold text-foreground font-heading">
                    Excellence
                  </p>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Grid */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/5 backdrop-blur-sm rounded-lg -z-10 border border-white/5" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="space-y-8"
          >
            <div>
              <span className="text-sm font-bold text-primary uppercase tracking-widest pl-1 border-l-2 border-primary">
                &nbsp;About Us
              </span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance font-heading">
                Empowering Your Success with{" "}
                <span className="text-primary italic">Digital Expertise</span>
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground/80 leading-relaxed font-light">
              At Jainshree DIGITAL, we believe in creating meaningful
              connections between brands and their audiences. Our team of
              passionate experts combines creativity with technical excellence.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-primary group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-foreground/90 font-medium group-hover:translate-x-1 transition-transform">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <p className="text-4xl font-bold text-primary font-heading">
                    {stat.value}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export const About = AboutSection;
