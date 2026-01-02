import { useState } from "react";
import "../styles/career.css";
import career from "../assets/career.jpg";
import digital from "../assets/digital.png";
import graphic from "../assets/graphic.png";
import contentWriting from "../assets/contentwriting.png";
import uiux from "../assets/uiux.png";

import {
  Funnel,
  Briefcase,
  MapPin,
  Sunglasses,
  Student,
  Binoculars,
  ArrowsOut,
  PawPrint,
  Airplane,
  ForkKnife,
  Clock,
  UsersThree,
  PersonSimpleRun,
  CloudArrowUp,
  Dog
} from "phosphor-react";




const Career = () => {

const [showApply, setShowApply] = useState(false);
const [selectedJob, setSelectedJob] = useState("");



const scrollToContact = () => {
  const section = document.getElementById("contact");
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};


  return (
    <div className="career-page">

      {/* HERO */}
      <section className="career-hero">
        <h1>Careers</h1>
        <p>
          Home <span>›</span> <strong>Career</strong>
        </p>
      </section>

      {/* CONTENT */}
      <section className="career-content">
        <div className="career-text">
          <h2>Meet the team work<br />behind our success</h2>
          <p>
            Our team consists of a group of talented individuals. We value solving
            customer problems sincerely. All of our team members are intelligent
            and highly skilled.
          </p>
        </div>

        <div className="career-image">
          <img
            src={career}
            alt="Career team"
          />
        </div>
      </section>


      {/* PERKS SECTION */}
      <section className="career-perks">
  <h2>We Offer Amazing Perks</h2>
  <p className="perks-subtitle">
    We believe great work comes from happy, supported people.
  </p>

  <div className="perks-grid">

    <div className="perk-card">
      <Airplane size={32} className="perk-icon" />
      <h4>Vacations</h4>
      <p>Generous paid time off to rest, recharge, and explore.</p>
    </div>

    <div className="perk-card">
      <PawPrint size={32} className="perk-icon" />
      <h4>Bring Your Dog</h4>
      <p>A pet-friendly workspace for happier workdays.</p>
    </div>

    <div className="perk-card">
      <ForkKnife size={32} className="perk-icon" />
      <h4>Free Gourmet Food</h4>
      <p>Enjoy healthy meals and snacks at the office.</p>
    </div>

    <div className="perk-card">
      <Clock size={32} className="perk-icon" />
      <h4>Extended Time Off</h4>
      <p>Extra leave options to maintain work-life balance.</p>
    </div>

    <div className="perk-card">
      <UsersThree size={32} className="perk-icon" />
      <h4>Parent Benefits</h4>
      <p>Supportive policies for parents and families.</p>
    </div>


    <div className="perk-card">
  <PersonSimpleRun size={32} className="perk-icon" />
  <h4>Fitness Place</h4>
  <p>
    Access to fitness facilities to stay healthy, active,
    and energized every day.
  </p>
</div>


  </div>
      </section>


    <section className="recruitment-process">
  <h2 className="process-title">
    Quick Reality Check
  </h2>

  <div className="process-steps">

    <div className="process-step">
      <div className="process-icon">
       <Sunglasses size={32} />
      </div>
      <h4>1. You Must Be Gen-Z</h4>
      <p>If memes confuse you, this might not be your place</p>
    </div>

    <div className="process-step">
      <div className="process-icon">
        <Student size={32} />
      </div>
      <h4>2. You Love Learning</h4>
      <p>Curious mind, Google-first, always trying to level up.</p>
    </div>

    <div className="process-step">
      <div className="process-icon">
        <Binoculars size={32} />
      </div>
      <h4>3. You Think Creatively</h4>
      <p>You question things, bring ideas, and don’t wait for permission.</p>
    </div>

    <div className="process-step">
      <div className="process-icon">
        <ArrowsOut size={32} />
      </div>
      <h4>4. You Want to Build & Grow</h4>
      <p>Not here just for a job,here to create, improve, and grow.</p>
    </div>


    <div className="process-step">
    <div className="process-icon">
      <Dog size={32} />
    </div>
    <h4>5. You Love Dogs 🐶</h4>
    <p>If dogs instantly make your day better, we already like you.</p>
    </div>


  </div>
</section>
      

     {/* OPEN POSITIONS */}

     <section className="jobs-interest">
  <h2 className="jobs-title">Your 9–5, But With Better Vibes</h2>
  <p className="jobs-subtitle">
    Serious work, but we don’t take ourselves too seriously.
  </p>

  <div className="jobs-grid">

    {/* Digital Marketer */}
   <div className="job-card-new">
  <div className="job-left">
    <div className="job-logo">
  <img src={digital} alt="Digital Marketer" />
</div>

  </div>

  <div className="job-center">
    <h4>Digital Marketer</h4>
    <span className="job-company">Via Ogenz Studio</span>

    <div className="job-meta">
      <span>
        <MapPin size={14} weight="fill" />
        Chennai
      </span>

      <span>
        <Funnel size={14} weight="fill" />
        Marketing
      </span>

      <span className="job-type">
        <Briefcase size={14} weight="fill" />
        Full Time
      </span>
    </div>
  </div>

  <div className="job-right">
    <button
      className="job-apply"
      onClick={() => {
        setSelectedJob("Digital Marketer");
        setShowApply(true);
      }}
    >
      Apply
    </button>

    <span className="job-like">♡</span>
  </div>
</div>


    {/* Content Writer */}
       <div className="job-card-new">
  <div className="job-left">
     <div className="job-logo">
  <img src={graphic} alt="content" />
</div>
  </div>

  <div className="job-center">
    <h4>Content Writer</h4>
    <span className="job-company">Via Ogenz Studio</span>

    <div className="job-meta">
      <span>
        <MapPin size={14} weight="fill" />
        Chennai
      </span>

      <span>
        <Funnel size={14} weight="fill" />
        Content
      </span>

      <span className="job-type">
        <Briefcase size={14} weight="fill" />
        Full Time
      </span>
    </div>
  </div>

  <div className="job-right">
   <button
  className="job-apply"
  onClick={() => {
    setSelectedJob("Content Writer");
    setShowApply(true);
  }}
>
  Apply
</button>

    <span className="job-like">♡</span>
  </div>
</div>

    {/* Graphic Designer */}
      <div className="job-card-new">
  <div className="job-left">
     <div className="job-logo">
  <img src={contentWriting} alt="content" />
</div>
  </div>

  <div className="job-center">
    <h4>Graphic Designer</h4>
    <span className="job-company">Via Ogenz Studio</span>

    <div className="job-meta">
      <span>
        <MapPin size={14} weight="fill" />
        Chennai
      </span>

      <span>
        <Funnel size={14} weight="fill" />
        Design
      </span>

      <span className="job-type">
        <Briefcase size={14} weight="fill" />
        Full Time
      </span>
    </div>
  </div>

  <div className="job-right">
    <button
  className="job-apply"
  onClick={() => {
   setSelectedJob("Graphic Designer");
    setShowApply(true);
  }}
>
  Apply
</button>

    <span className="job-like">♡</span>
  </div>
</div>

    {/* UI/UX Designer */}
      <div className="job-card-new">
  <div className="job-left">
    <div className="job-logo">
  <img src={uiux} alt="uiux" />
</div>
  </div>

  <div className="job-center">
    <h4>UI/UX Designer</h4>
    <span className="job-company">Via Ogenz Studio</span>

    <div className="job-meta">
      <span>
        <MapPin size={14} weight="fill" />
        Chennai
      </span>

      <span>
        <Funnel size={14} weight="fill" />
        Design
      </span>

      <span className="job-type">
        <Briefcase size={14} weight="fill" />
        Full Time
      </span>
    </div>
  </div>

  <div className="job-right">
    <button
  className="job-apply"
  onClick={() => {
    setSelectedJob("UI/UX Designer");
    setShowApply(true);
  }}
>
  Apply
</button>

    <span className="job-like">♡</span>
  </div>
</div>
  </div>
     </section>



{/* apply section modal*/ }

{showApply && (
  <div className="apply-overlay">
    
    {/* BACKDROP */}
    <div
      className="apply-backdrop"
      onClick={() => setShowApply(false)}
    />

    {/* MODAL */}
    <div
      className="apply-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="close-btn"
        onClick={() => setShowApply(false)}
      >
        ×
      </button>

      <h3>Apply for {selectedJob}</h3>
      <p>Please fill in your details below.</p>

      <form className="apply-form">
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email Address" required />

        <textarea
          rows="4"
          placeholder="Tell us about yourself"
        />
  
       <label className="file-upload">
        <CloudArrowUp size={20} weight="bold" />
        <span>Upload Resume</span>
        <input type="file" />
       </label>


        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  </div>
)}







    <section className="career-cta">
  <div className="career-cta-content">
    <h2>Ready For Your New Job?</h2>

     <p>
      Take the next step in your career with Ogenz. Explore exciting
      opportunities, work with a passionate team, and grow in an
      environment that values creativity, learning, and innovation.
    </p>

     <button
      className="career-cta-btn"
      onClick={scrollToContact}
    >
      Contact Us Now
    </button>

  </div>
    </section>


    </div>
  );
};

export default Career;
