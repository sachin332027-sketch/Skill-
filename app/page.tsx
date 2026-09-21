import Header from "./components/Header";
import Hero from "./components/Hero";
import ScaleSection from "./components/ScaleSection";
import CategoryCards from "./components/CategoryCards";
import Capabilities from "./components/Capabilities";
import TechFlow from "./components/TechFlow";
import Ecosystem from "./components/Ecosystem";
import Impact from "./components/Impact";
import CaseStudies from "./components/CaseStudies";
import OurStrength from "./components/OurStrength";
import Insights from "./components/Insights";
import About from "./components/About";
import IndiaMap from "./components/IndiaMap";
import Careers from "./components/Careers";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ScaleSection />
        <CategoryCards />
        <Capabilities />
        <TechFlow />
        <Ecosystem />
        <Impact />
        <CaseStudies />
        <OurStrength />
        <Insights />
        <About />
        <IndiaMap />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
