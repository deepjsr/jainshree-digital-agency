import { useState, lazy, Suspense } from "react";
import Hero from "./components/Hero";
import Header from "./components/Header";
import "./App.css";

// Lazy load below-fold components
const ServicesSection = lazy(() => import("./components/Services"));
const About = lazy(() =>
  import("./components/About").then((module) => ({ default: module.About })),
);
const ContactSection = lazy(() => import("./components/ContactForm"));
const Footer = lazy(() =>
  import("./components/Footer").then((module) => ({ default: module.Footer })),
);
const BackToTop = lazy(() =>
  import("./components/BackToTop").then((module) => ({
    default: module.BackToTop,
  })),
);
const WhatsAppChat = lazy(() => import("./components/WhatsAppChat"));

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Suspense fallback={<div className="h-screen w-full bg-background" />}>
        <ServicesSection />
        <About />
        <ContactSection />
        <Footer />
        <WhatsAppChat />
        <BackToTop />
      </Suspense>
    </main>
  );
}

export default App;
