import { useState } from "react";
import Hero from "./components/Hero";
import { ServicesSection } from "./components/Services";
import { About } from "./components/About";

import "./App.css";
import Header from "./components/Header";
import { ContactSection } from "./components/ContactForm";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import WhatsAppChat from "./components/WhatsAppChat";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ServicesSection />
      <About />
      <ContactSection />
      <Footer />
      <WhatsAppChat />
      <BackToTop />
    </main>
  );
}

export default App;
