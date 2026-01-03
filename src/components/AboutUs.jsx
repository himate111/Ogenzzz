import "../styles/aboutUs.css";

import centerVideo from "../videos/aboutus.mp4";
import missmiss from "../assets/missmiss.png";

import visionvideo from "../videos/visionvideo.mp4";
import { scrollToSection } from "../utlis/scroolTo";


const AboutUs = () => {
  return (
    <section className="about-wrapper"> {/* 👈 NEW WRAPPER */}

      {/* ================= ABOUT US ================= */}
      <div className="about-section">
        <div className="about-container">

          <div className="about-left">
            <h2>About Us</h2>
            <p>
              We’re a Gen Z–led creative agency, shaped by growing up in constant change in how people communicate, consume, and decide what matters. 
            </p>
          </div>
            <div className="about-image-wrap video-circle">
              <video
                src={centerVideo}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>


          <div className="about-cta-plain">
            <h4>
              <span className="cta-intro">Let’s get</span><br />
            started,launch your<br />
              growth strategy.
            </h4>
            <button className="primary-cta"  onClick={() => scrollToSection("contact")}>Start the conversation</button>
          </div>

        </div>
      </div>

     
    {/* ================= WHO WE ARE ================= */}
       <div className="who-we-are-section">
  <div className="who-we-are-card">

    <div className="who-image-wrap">
      <img
        src={missmiss}
        alt="Who we are"
      />
    </div>

    <div className="who-content">
      <h3>Who We Are</h3>
      <p>
       We work closely with founders and individuals, not just brands.
       Because clarity starts with the person behind it.<br/>
       Direction comes before execution.
       Everything we build is designed to hold up as things change.

      </p>
    </div>

  </div>
</div>
    {/* ================= WHY CHOOSE US ================= */}
<div className="why-choose-section">
  <h2>Why Choose Us?</h2>

  <div className="why-choose-grid">
    <div className="why-card">
      <span className="why-number">01</span>
      <h4>1. We start with people, not deliverables</h4>
      <p>
         We work closely with founders and individuals before touching the brand.
         When the person is clear, everything else falls into place.
      </p>
    </div>

    <div className="why-card">
      <span className="why-number">02</span>
      <h4>We don’t rush to output</h4>
      <p>
        We take time to understand direction, context, and intent before execution.
        That’s how the work stays consistent instead of feeling random.
      </p>
    </div>

    <div className="why-card">
      <span className="why-number">03</span>
      <h4>We think in systems, not one-offs</h4>    
      <p>
      Our work is built to hold together across platforms, formats, and time.
      Not just for launch, but for what comes after.
      </p>
    </div>

    <div className="why-card">
      <span className="why-number">04</span>
      <h4>We keep things intentional</h4>
      <p>
        No unnecessary noise. No trend-chasing.
Only decisions that make sense for the brand you’re building.
      </p>
    </div>
  </div>
</div>


 {/* ================= MISSION & VISION ================= */}



    </section>
  );
};

export default AboutUs;










