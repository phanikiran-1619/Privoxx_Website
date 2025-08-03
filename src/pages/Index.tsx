import { AnimatedNavbar } from "@/components/AnimatedNavbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductDetails } from "@/components/ProductDetails";
import { ScrollingPrivacyBenefits } from "@/components/ScrollingPrivacyBenefits";
import { Testimonials } from "@/components/Testimonials";
import { BookingForm } from "@/components/BookingForm";
import { CompanyLeadership } from "@/components/CompanyLeadership";
import { Footer } from "@/components/Footer";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Index = () => {
  useScrollTracking();

  return (
    <div className="min-h-screen">
      <AnimatedNavbar />
      <HeroSection />
      <ProductDetails />
      <ScrollingPrivacyBenefits />
      <Testimonials />
      <BookingForm />
      <CompanyLeadership />
      <Footer />
    </div>
  );
};

export default Index;
