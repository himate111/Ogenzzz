import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import LoopCarousel from "../components/LoopCarousel";
import ServicesAlt from "../components/ServicesAlt";
import ServicesPalette from "../components/ServicesPalette";
import Testimonials from "../components/Testimonials";
import AboutUs from "../components/AboutUs";
import Career from "../components/Career";
import Contact from "../components/Contact";
import { scrollToSection } from "../utlis/scroolTo";
import { ArrowBendDownRight } from "phosphor-react";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      {/* HERO ONLY */}
      <div className="hero" id = "top">
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

    <button className="cta-dotted" onClick={() => scrollToSection("contact")} >Get Started</button>
  </div>

      {/* SERVICES */}
      {/* <Services /> */}
      {/* <ServicesAlt /> */}
      <section id="services">
          <ServicesPalette />
      </section>

        <section id="about">
        <AboutUs />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>
      
        {/* ABOUT */}
   


      {/* CAREERS */}
      <section id="careers">
        <Career />
      </section>


      <section id="contact">
        <Contact />
      </section>
    </>
  );
};

export default Home;
