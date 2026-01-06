import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/contact.css";

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
  YoutubeLogo
} from "phosphor-react";


import { PhoneCall, EnvelopeSimple, MapPin } from "phosphor-react";



const Contact = () => {


  const navigate = useNavigate();

const scrollToSection = (id) => {
  navigate("/");

  // delay to ensure page loads before scrolling
  setTimeout(() => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 300);
};


const [contactData, setContactData] = useState({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const [newsletterEmail, setNewsletterEmail] = useState("");
const [loading, setLoading] = useState(false);

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";


const handleNewsletterSubmit = async (e) => {
  e.preventDefault();

  if (!newsletterEmail) {
    alert("Please enter an email");
    return;
  }

  try {
    const res = await fetch(`${API_URL}/newsletter`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: newsletterEmail }),
    });

    const result = await res.json();

    if (res.ok) {
      setPopup({
  show: true,
  message: "Thanks for subscribing to our newsletter 🎉",
  type: "success",
});

      setNewsletterEmail("");
    } else {
      setPopup({
  show: true,
  message: "Subscription failed. Please try again ❌",
  type: "error",
});

    }
  } catch (err) {
    alert("Server error ❌");
  }
};


const [popup, setPopup] = useState({
  show: false,
  message: "",
  type: "success", // success | error
});


  return (

    <section className="contact-wrapper">

    
     {/* CONTACT HEADER */}
     <section className="contact-header">
  <h1>Contact Us</h1>

  <p className="contact-breadcrumb">
    Home <span>›</span> Contact
  </p>

  {/* Decorative dots */}
  
     </section>


      {/* CONTENT AFTER VIDEO */}
      <div className="contact-content">

        {/* TOP SECTION */}
        <div className="contact-top">

          {/* FORM */}
           <div className="contact-form">
  <form
    onSubmit={async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const res = await fetch(`${API_URL}/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(contactData),
        });

        const result = await res.json();

        if (res.ok) {
          
          setPopup({
          show: true,
          message: "Thanks for contacting us! We’ll get back to you shortly 😊",
          type: "success",
        });

          setContactData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        } else {
          alert(result.error || "Failed to send message ❌");
        }
      } catch (err) {
              setPopup({
        show: true,
        message: "Something went wrong. Please try again later ❌",
        type: "error",
      });

      } finally {
        setLoading(false);
      }
    }}
  >
    <div className="row">
      <input
        type="email"
        placeholder="Email"
        required
        value={contactData.email}
        onChange={(e) =>
          setContactData({ ...contactData, email: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Phone"
        value={contactData.phone}
        onChange={(e) =>
          setContactData({ ...contactData, phone: e.target.value })
        }
      />
    </div>

    <input
      type="text"
      placeholder="Name"
      required
      value={contactData.name}
      onChange={(e) =>
        setContactData({ ...contactData, name: e.target.value })
      }
    />

    <textarea
      placeholder="Message"
      rows="4"
      required
      value={contactData.message}
      onChange={(e) =>
        setContactData({ ...contactData, message: e.target.value })
      }
    />

    <button className="primary-btn" disabled={loading}>
      {loading ? "Sending..." : "Submit"}
    </button>
  </form>
</div>


          {/* NEWSLETTER */}
         <div className="newsletter">
  <h3>Our Newsletters</h3>
  <p>
    Join our newsletter to stay up to date on features, releases,
    and updates from our team.
  </p>

  <form
    onSubmit={async (e) => {
      e.preventDefault();

      try {
        const res = await fetch(`${API_URL}/newsletter`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: newsletterEmail }),
        });

        const result = await res.json();

        if (res.ok) {
         setPopup({
          show: true,
          message: "Thanks for subscribing to our newsletter 🎉",
          type: "success",
        });

          setNewsletterEmail("");
        } else {
          setPopup({
          show: true,
          message: "Subscription failed. Please try again ❌",
          type: "error",
        });

        }
      } catch (err) {
        alert("Server error ❌");
      }
    }}
  >
    <input
      type="email"
      placeholder="Email"
      required
      value={newsletterEmail}
      onChange={(e) => setNewsletterEmail(e.target.value)}
    />

    <button className="dark-btn">Subscribe</button>
  </form>
</div>



        </div>

        {/* BOTTOM CARDS */}
        <div className="contact-cards">
             <div className="card teal">
         <div className="card-header">
        <PhoneCall size={22} />
        <h4>(+91) 93603 12408</h4>
        </div>
        <p>
        Reach out to us directly for immediate support or business inquiries.
        </p>
        </div>
            
        <div className="card light">
        <div className="card-header">
            <EnvelopeSimple size={22} />
            <h4>sayhi2ogenz@gmail.com</h4>
        </div>
        <p>
            Send us an email and we'll get back to you within one business day with the information you need.
        </p>
        </div>


         <div className="card white">
        <div className="card-header">
            <MapPin size={22} />
            <h4>Anna Nagar, Chennai</h4>
        </div>
        <p>
            2 Floor, I Block 7th, 10, Street, H Block, H Block 2nd St, A E Block, Anna Nagar, Chennai, Tamil Nadu 600040
        </p>
        </div>


        </div>

      </div>



      {/* MAP SECTION */}
     <div className="contact-map">
  <iframe
    title="Office Location"
    src="https://www.google.com/maps?q=2+Floor,+I+Block+7th+10+Street,+H+Block,+Anna+Nagar,+Chennai,+Tamil+Nadu+600040&z=17&output=embed"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
     </div>


<div className="footer-divider"></div>

    {/* FOOTER */}
<footer className="contact-footer">
  <div className="footer-top">

    {/* LEFT: BRAND + NEWSLETTER */}
      <div className="footer-brand">
  <h3>Ogenz / Creative Studio</h3>
  <p>
    Join our newsletter to stay up to date on features, releases,
    and updates from our team.
  </p>

  <form className="footer-subscribe" onSubmit={handleNewsletterSubmit}>
    <input
      type="email"
      placeholder="Enter your email"
      required
      value={newsletterEmail}
      onChange={(e) => setNewsletterEmail(e.target.value)}
    />
    <button type="submit">Subscribe</button>
  </form>

  <small>
    By subscribing you agree to our <a href="#">Privacy Policy</a>.
  </small>
</div>


    {/* CENTER: QUICK LINKS */}
  
    <div className="footer-links">
      <h4>Quick Links</h4>
      <ul>
        <li onClick={() => scrollToSection("top")}>Home</li>
        <li onClick={() => scrollToSection("about")}>About Us</li>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("testimonials")}>Testimonials</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>

    </div>

   
  <div className="footer-social">
  <h4>Follow Us</h4>

  <div className="social-icons">
  <div className="social-item">
    <FacebookLogo size={18} weight="fill" /> Facebook
  </div>


  <div className="social-item">
  <a
    href="https://www.instagram.com/ogenz.official?igsh=bDRidnQ1Y2p6cXFh"
    target="_blank"
    rel="noopener noreferrer"
  >
    <InstagramLogo size={18} weight="fill" />
    Instagram
  </a>
</div>



 <div className="social-item linkedin">
  <a
    href="https://www.linkedin.com/company/ogenz/"
    target="_blank"
    rel="noopener noreferrer"
  >
  <LinkedinLogo size={18} weight="fill" /> LinkedIn
    </a>
</div>


    <div className="social-item">
      <TwitterLogo size={18} weight="fill" /> X
    </div>

    <div className="social-item">
      <YoutubeLogo size={18} weight="fill" /> YouTube
    </div>
</div>

</div>
 
 </div>

  

  <div className="footer-bottom">
    <p>© 2025 Ogenz. All rights reserved.</p>
    <div className="footer-legal">
      <span>Privacy Policy</span>
      <span>Terms of Service</span>
      <span>Cookie Settings</span>
    </div>
  </div>
</footer>



{popup.show && (
  <div className="popup-overlay">
    <div className={`popup-box ${popup.type}`}>
      <p>{popup.message}</p>
      <button onClick={() => setPopup({ ...popup, show: false })}>
        OK
      </button>
    </div>
  </div>
)}

    
    </section>
  );
};

export default Contact;
