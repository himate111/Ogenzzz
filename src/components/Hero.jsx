import { Megaphone } from "lucide-react";
import { ArrowBendRightDown } from "phosphor-react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        {/* Badge */}
        

        {/* Title */}
        <h1 className="hero-title">
          If you’re the face of the brand 
          <span className="act-text"> "act like it."</span>
        </h1>


        {/* Subtitle */}
        <p className="hero-subtitle">
          That’s why we make sure people know you, not just your logo.
        </p>
      </div>

      {/* 🔥 CONTENT → CAROUSEL ARROW (REFERENCE STYLE) */}
      <div className="hero-side-arrow">
  <span className="hero-side-text">Elevate your brand</span>
  <ArrowBendRightDown size={40} weight="bold" />
</div>

    </section>
  );
};

export default Hero;
