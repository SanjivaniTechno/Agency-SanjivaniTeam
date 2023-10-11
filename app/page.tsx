import Services from "@/components/Services";
import Footer from "@/components/Footer";
import HeroSection from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Feature from "@/components/Feature";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Feature />
    </div>
  );
}
