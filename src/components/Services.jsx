import {
  Palette,
  Code,
  TrendingUp,
  Smartphone,
  Search,
  Share2,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Crafting intuitive and engaging digital experiences. Our design services focus on seamless user journeys and visually stunning interfaces.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Building robust, scalable, and high-performance solutions. We ensure a smooth and secure experience every time with modern technologies.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Boost your brand visibility and drive meaningful engagement. We craft data-driven strategies that connect you with your target audience.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Creating powerful mobile applications for iOS and Android. User-friendly interfaces combined with robust functionality.",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your search rankings and organic traffic. Our SEO experts implement proven strategies to increase your online visibility.",
  },
  {
    icon: Share2,
    title: "Social Media",
    description:
      "Build your brand presence across social platforms. Engaging content strategies that resonate with your audience and drive results.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-primary uppercase tracking-[0.2em]"
          >
            Our Services
          </motion.span>
          <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="mt-4 text-4xl md:text-6xl font-bold text-foreground font-heading tracking-tight"
          >
            Redefining Success in the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Digital Space</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="mt-6 text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light leading-relaxed"
          >
            We provide comprehensive digital solutions to help your business
            thrive in the modern marketplace.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-colors duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-black/50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 border border-white/10 group-hover:border-primary/50 shadow-inner">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">
                  {service.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-white/80 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default ServicesSection;