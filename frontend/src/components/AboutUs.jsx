import "../styles/aboutUs.css";
import digitalMarketingImg from "../assets/digitalMarketing.png";
import centerVideo from "../assets/centerVideo.mp4";
import vision from "../assets/vision.mp4"
import vision2 from "../assets/vision2.mp4";
import whoWeAreImg from "../assets/newnew.png";
import Mission from "../assets/mission.jpg";

const AboutUs = () => {
  return (
    <section className="about-wrapper"> {/* 👈 NEW WRAPPER */}

      {/* ================= ABOUT US ================= */}
      <div className="about-section">
        <div className="about-container">

          <div className="about-left">
            <h2>About Us</h2>
            <p>
              At <strong>Ogenz</strong>, we help brands grow through
              data-driven digital marketing, creative strategy,
              and performance optimization.
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
              started—launch your<br />
              growth strategy.
            </h4>
            <button className="primary-cta">Get Free Strategy</button>
          </div>

        </div>
      </div>

     
    {/* ================= WHO WE ARE ================= */}
       <div className="who-we-are-section">
  <div className="who-we-are-card">

    <div className="who-image-wrap">
      <img
        src={whoWeAreImg}
        alt="Who we are"
      />
    </div>

    <div className="who-content">
      <h3>Who We Are</h3>
      <p>
        We’re a strategy-first digital marketing studio  
        focused on building brands that stand out  
        in a crowded digital world. Our work blends  
        compelling content, thoughtful design, and  
        data-driven execution to help businesses  
        connect with the right audience at the right moment.

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
      <h4>Strategy-First Approach</h4>
      <p>
        We start with insight and research to ensure every campaign is built
        on a strong strategic foundation.
      </p>
    </div>

    <div className="why-card">
      <span className="why-number">02</span>
      <h4>Creative Excellence</h4>
      <p>
        Our team blends storytelling, design, and content to create
        memorable brand experiences.
      </p>
    </div>

    <div className="why-card">
      <span className="why-number">03</span>
      <h4>Data-Driven Results</h4>
      <p>
        We use analytics and performance insights to continuously optimize
        and improve results.
      </p>
    </div>

    <div className="why-card">
      <span className="why-number">04</span>
      <h4>Trusted Partnership</h4>
      <p>
        We work as an extension of your team, focused on long-term growth
        and success.
      </p>
    </div>
  </div>
</div>

 {/* ================= MISSION & VISION ================= */}
<section className="mission-vision-section">

  {/* OUR MISSION */}
  <div className="mission-container">
    <div className="mission-text">
      <h2>Our Mission</h2>
      <p>
        Our mission is to empower brands through thoughtful strategy,
        impactful content, and data-driven digital marketing solutions.
        We help businesses grow with clarity, creativity, and purpose
        while building meaningful connections with their audience.
      </p>
    </div>

   <div className="mission-image">
  <video
    src={vision2}
    autoPlay
    muted
    loop
    playsInline
  />
</div>

  </div>

  {/* OUR VISION */}
   <div className="vision-card">
    <div className="vision-heading">
      <span>Our</span>
      <span>Vision</span>
    </div>

    <p className="vision-text">
      Our vision is to become a trusted digital growth partner for ambitious
      brands, known for creative excellence, strategic depth, and measurable
      results that create long-term impact.
    </p>
  </div>


</section>


    </section>
  );
};

export default AboutUs;
