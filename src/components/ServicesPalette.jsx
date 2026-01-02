import "../styles/servicesPalette.css";
import teamWorkIllustration from "../assets/Team work-bro.svg";


import {
  PencilSimple,
  DeviceMobile,
  IdentificationBadge,
  Sparkle,
  RocketLaunch,
  Star,
  Strategy,
  Backpack,
  Gear,
  ChartLine,
  FileText,
  FigmaLogo,
  Cube,
  AngularLogo
} from "phosphor-react";

const services = [
  {
    title: "PERSONAL BRANDING",
    heading : "The person behind the brand.",
    desc: "We help founders and leaders shape how they’re seen, heard, and remembered, across content, platforms, and public presence.",
    icon: <Star size={22} />
  },
  {
    title: "BRAND STRATEGY",
    heading : "The thinking layer.",
    desc: "Before design or content, we define what your brand stands for, who it’s for, and how it should show up everywhere.",
    icon: <Strategy size={32} />
  },
  {
    title: "BRAND IDENTITY & DESIGN",
    heading : "How it looks. How it feels.",
    desc: "We design visual identities that are clear, consistent, and flexible, not just trendy for launch week.",
    icon: <IdentificationBadge size={22} weight="bold" />
  },
  {
    title: "CONTENT & SOCIAL PRESENCE",
    heading : "How you show up day to day.",
    desc: "We create and guide content that feels intentional, not reactive and builds familiarity over time.",
    icon: <PencilSimple size={22} />
  },
  {
    title: "CAMPAIGNS & LAUNCHES",
    heading : "Moments that matter.",
    desc: "When something needs attention, a launch, a shift, an announcement, we design campaigns that people actually notice and remember.",
    icon: <RocketLaunch size={22} />
  },
  {
    title: "EVENTS, WORKSHOPS & CONSULTING",
    heading : "Alignment beyond visuals.",
    desc: "For teams that want clarity internally, we help translate the brand into shared understanding,  through sessions, workshops, and ongoing guidance.",
    icon: <Backpack size={22} />
  }
];


const ServicesPalette = () => {
  return (
    <>
      {/* ================= SERVICES PALETTE ================= */}
      <div className="services-page">
      <section className="palette-section">
        <span className="palette-badge">
          <Sparkle size={22} /> Our Services
        </span>

        <h2 className="palette-title">What we focus on</h2>

        <div className="palette-grid">
          {services.map((item, index) => (
            <div key={index} className="palette-card">
              <div className="palette-icon">
                {item.icon ? item.icon : "⬤"}
              </div>
              <h3>{item.title}</h3>

             <h4>{item.heading}</h4>
            
              <p>{item.desc}</p>
               
              <button className="read-more-btn">Read More</button>
            </div>
          ))}
        </div>
      </section>


  

      {/* ================= PROCESS WORKFLOW ================= */}
      <section className="process-workflow">
  <div className="process-wrapper">

    {/* LEFT */}
    <div className="process-left">
      <span className="process-tag">HOW IT WORKS</span>
      <h2 className="process-title">The OGenZ Way</h2>

      <div className="process-list">
        <div className="process-item">
          <span className="process-circle">01</span>
          <div className="process-content">
            <h4>Discover</h4>
            <p>We start with a call to understand your needs, then send over a questionnaire to dive deeper.</p>
          </div>
        </div>

        <div className="process-item">
          <span className="process-circle">02</span>
          <div className="process-content">
            <h4>Define</h4>
            <p>We define your brand’s core message, strategy, and audience, creating a clear roadmap for success.</p>
          </div>
        </div>

        <div className="process-item">
          <span className="process-circle">03</span>
          <div className="process-content">
            <h4>Create</h4>
            <p>One day, one shoot. We capture everything needed for an entire month of content.</p>
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT */}
    <div className="process-right">

      {/* Illustration */}
    <div className="process-illustration">
  <img
    src={teamWorkIllustration}
    alt="Team work illustration"
  />
</div>


      {/* Steps 04 & 05 */}
      <div className="process-list right-list">
        <div className="process-item">
          <span className="process-circle">04</span>
          <div className="process-content">
            <h4>Amplify</h4>
            <p>We post, promote, and make sure your brand gets noticed where it counts.</p>
          </div>
        </div>

        <div className="process-item">
          <span className="process-circle">05</span>
          <div className="process-content">
            <h4>Refine</h4>
            <p>We track, tweak, and optimize to keep your brand growing and evolving.</p>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

</div>
    </>
  );
};

export default ServicesPalette;
