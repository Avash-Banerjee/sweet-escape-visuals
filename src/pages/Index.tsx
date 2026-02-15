import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureGrid from "@/components/SignatureGrid";
import CafeExperience from "@/components/CafeExperience";
import MenuShowcase from "@/components/MenuShowcase";
import ComboSpecials from "@/components/ComboSpecials";
import InstagramWall from "@/components/InstagramWall";
import CommunitySection from "@/components/CommunitySection";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <SignatureGrid />
      <CafeExperience />
      <MenuShowcase />
      <ComboSpecials />
      <InstagramWall />
      <CommunitySection />
      <VisitUs />
      <Footer />
    </div>
  );
};

export default Index;
