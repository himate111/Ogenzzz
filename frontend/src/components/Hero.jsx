import { Megaphone } from "lucide-react";
import { ArrowBendRightDown } from "phosphor-react";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero-content">
        {/* Badge */}
        <span className="hero-badge">
          <Megaphone size={14} className="badge-icon" />
          Built for brands that want to be talked about
        </span>

        {/* Title */}
        <h1 className="hero-title">
          We Don’t Do Ads. <br />
          We Build <span>Culture.</span>
        </h1>

        {/* Subtitle */}
        <p className="hero-subtitle">
          Ogenz creates content, branding, and digital moves that stop the scroll
          and turn attention into loyalty.
        </p>
      </div>

      {/* 🔥 CONTENT → CAROUSEL ARROW (REFERENCE STYLE) */}
      <div className="hero-side-arrow">
  <span className="hero-side-text">Elevate your brand</span>
  <ArrowBendRightDown size={48} weight="bold" />
</div>

    </section>
  );
};

export default Hero;
