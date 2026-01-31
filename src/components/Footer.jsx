import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Web Development",
  "UI/UX Design",
  "Digital Marketing",
  "SEO Optimization",
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_-3px_var(--color-primary)]">
                <span className="text-black font-bold text-sm font-heading">
                  JD
                </span>
              </div>
              <span className="text-xl font-bold text-white font-heading tracking-tight">
                Jainshree<span className="text-primary">.AGENCY</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Transforming businesses with innovative digital solutions. Your
              success is our mission.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-9 h-9 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-primary transition-colors text-sm font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-heading">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/60 text-sm font-light hover:text-white transition-colors cursor-default">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-heading">
              Contact
            </h4>
            <div className="space-y-3 text-sm text-white/60 font-light">
              <p>+91 98765 43210</p>
              <p>hello@jainshreedigital.com</p>
              <p>123 Business Hub</p>
              <p>Mumbai, India</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} Jainshree DIGITAL. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;