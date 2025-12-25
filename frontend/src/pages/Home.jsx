import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import LoopCarousel from "../components/LoopCarousel";
import ServicesAlt from "../components/ServicesAlt";
import ServicesPalette from "../components/ServicesPalette";
import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs";
import { ArrowBendDownRight } from "phosphor-react";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* HERO ONLY */}
      <div className="hero">
        <Navbar />
        <Hero />
      </div>

      {/* CAROUSEL */}
      <LoopCarousel />

      {/* CTA AFTER CAROUSEL */}
      <div className="hero-cta-section">
    <div className="cta-doodle">
      <ArrowBendDownRight size={34} weight="light" className="cta-arrow" />
      <span className="cta-note">it's free</span>

    </div>

    <button className="cta-dotted">Get Started</button>
  </div>

      {/* SERVICES */}
      {/* <Services /> */}
      {/* <ServicesAlt /> */}
      <ServicesPalette />

      <Testimonials />
      
      <AboutUs />
    </>
  );
};

export default Home;
