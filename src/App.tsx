import AboutSection from "./components/AboutSection";
import ContactHeader from "./components/ContactHeader";
import Hero from "./components/Hero";
import ServiceSection from "./components/ServiceSection";
import StickyHeader from "./components/StickyHeader";
import TrustedBusiness from "./components/TrustedBusiness";
import WhySection from "./components/WhySection";

function App() {
  return (
    <>
      <ContactHeader />
      <StickyHeader />
      <Hero />
      <TrustedBusiness />
      <ServiceSection />
      <AboutSection />
      <WhySection />
    </>
  );
}

export default App;
