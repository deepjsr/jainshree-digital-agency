import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "px-4 md:px-8" : "px-0"}`}
    >
      <nav
        className={`mx-auto max-w-5xl transition-all duration-300 ${scrolled ? "bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg rounded-full" : "bg-transparent border-transparent"} px-6 py-3`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-[0_0_15px_-3px_var(--color-primary)]">
              <span className="text-black font-bold text-sm font-heading">
                JD
              </span>
            </div>
            <span className="text-xl font-bold text-foreground font-heading tracking-tight">
              Jainshree<span className="text-primary">.Digital</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#home"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                Home
              </a>

              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group-hover:scale-105 transform duration-200 outline-none">
                  Services
                  <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                </button>

                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top group-hover:translate-y-0 translate-y-2 w-64">
                  <div className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 ring-1 ring-black/5">
                    {[
                      "UI/UX Design",
                      "Web Development",
                      "Digital Marketing",
                      "App Development",
                      "SEO Optimization",
                      "Social Media",
                    ].map((service) => (
                      <a
                        key={service}
                        href="#services"
                        className="px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-white/5 rounded-xl transition-all duration-200 flex items-center justify-between group/item"
                      >
                        {service}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <a
                href="#about"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:scale-105 transform duration-200"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+919617438100">
              <Button
                size="sm"
                className="rounded-full bg-primary hover:bg-primary/90 text-black font-semibold shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)] transition-all"
              >
                Call Us
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Overlay */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 bg-[#0a0a0a] border border-white/10 rounded-2xl md:hidden shadow-2xl">
            <div className="flex flex-col gap-4">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
                <a href="tel:+919617438100" className="w-full">
                  <Button
                    size="sm"
                    className="w-full rounded-full bg-primary text-black font-bold"
                  >
                    Get a Quote
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
