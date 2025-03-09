import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import Clients from "./components/Clients";
import ContactHeader from "./components/ContactHeader";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import FAQSection from "./components/FQASection";
import HappyClients from "./components/HappyClients";
import Hero from "./components/Hero";
import MobileAppSection from "./components/MobileSection";
import Options from "./components/Options";
import ServiceSection from "./components/ServiceSection";
import StatsSection from "./components/StatSection";
import StickyHeader from "./components/StickyHeader";
import TestimonialSection from "./components/Testimonial";
import TrustedBusiness from "./components/TrustedBusiness";
import ViewSection from "./components/ViewSection";
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
      <ViewSection />
      <HappyClients />
      <Options />
      <BlogSection />
      <TestimonialSection />
      <FAQSection />
      <MobileAppSection />
      <StatsSection />
      <CTASection />
      <Clients />
      <Footer />
    </>
  );
}

export default App;
