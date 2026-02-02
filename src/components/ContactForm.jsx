import React from "react";
import { useState } from "react";
import { Send, Phone, Mail, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    value: "+91 96174 38100",
    href: "tel:+919617438100",
  },
  {
    icon: Mail,
    title: "Email",
    value: "jainshreedigital@gmail.com",
    href: "mailto:jainshreedigital@gmail.com",
  },
  {
    icon: MapPin,
    title: "Address",
    value:
      "1067, Ranjeet Hanuman Rd, Gumasta Nagar, Sudama Nagar, Indore, Madhya Pradesh 452009, India",
    href: "#",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formDataObj = new FormData(e.target);
    // IMPORTANT: Replace this with your Access Key from web3forms.com
    formDataObj.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataObj,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! We'll get back to you shortly.");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        console.error("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Something went wrong. Please check your connection.");
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-widest pl-1 border-l-2 border-primary">
            &nbsp;Contact Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground font-heading">
            Let&apos;s Start a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">
              Conversation
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground/80 max-w-2xl mx-auto font-light">
            Ready to transform your digital presence? Get in touch with us
            today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 hover:border-primary/50 transition-colors rounded-xl overflow-hidden backdrop-blur-sm"
              >
                <div className="p-4">
                  <a href={info.href} className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-all duration-300">
                      <info.icon className="w-5 h-5 text-primary group-hover:text-black" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">
                        {info.title}
                      </p>
                      <p className="font-medium text-foreground text-lg">
                        {info.value}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}

            {/* Quick CTA */}
            <div className="bg-gradient-to-br from-primary to-emerald-500 rounded-xl p-6 text-black shadow-lg shadow-primary/20">
              <h3 className="text-xl font-bold mb-2 font-heading">
                Need Urgent Help?
              </h3>
              <p className="text-black/80 text-sm mb-6 font-medium">
                Call us directly and speak with our experts.
              </p>
              <a
                href="tel:+919617438100"
                className="w-full inline-flex items-center justify-center gap-2 bg-black text-primary hover:bg-black/80 rounded-full px-6 py-3 font-bold transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="First name  Last name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="name"
                        className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground/50 transition-all outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="xyz@something.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground/50 transition-all outline-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 96174 38100"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3 rounded-lg text-foreground placeholder:text-muted-foreground/50 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-muted-foreground uppercase tracking-wider"
                    >
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary px-4 py-3 rounded-lg text-foreground resize-none placeholder:text-muted-foreground/50 transition-all outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-black font-bold rounded-full px-8 py-4 text-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                  {result && (
                    <p
                      className={`text-center text-sm font-medium ${result.includes("success") ? "text-emerald-400" : "text-red-400"}`}
                    >
                      {result}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default ContactSection;
