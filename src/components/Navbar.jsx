import { useState, useRef, useEffect } from "react";
import "../styles/navbar.css";
import logo from "../assets/Ogenz Logo.png";

const menu = [
  { label: "Home", id: "top" },
  { label: "Services", id: "services" },
  { label: "About Us", id: "about" },
  { label: "Testimonials", id: "testimonials" },
  { label: "Careers", id: "careers" }
];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const menuRefs = useRef([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const current = menuRefs.current[activeIndex];
    if (current && sliderRef.current) {
      sliderRef.current.style.width = `${current.offsetWidth}px`;
      sliderRef.current.style.transform = `translateX(${current.offsetLeft}px)`;
    }
  }, [activeIndex]);

  const handleClick = (index, id) => {
    setActiveIndex(index);

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="nav-container">
      <nav className="nav-pill">

        {/* Brand */}
          <div
  className="brand"
  onClick={() => handleClick(0, "top")}
>
  <img src={logo} alt="Ogenz Logo" className="brand-logo" />
</div>


        {/* Menu */}
        <div className="menu-wrapper">
          <span ref={sliderRef} className="slider" />

          {menu.map((item, index) => (
            <div
              key={item.label}
              ref={(el) => (menuRefs.current[index] = el)}
              className={`nav-link ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleClick(index, item.id)}
            >
              {item.label}
            </div>
          ))}
        </div>

        {/* Contact */}
        <button
          className="contact-btn"
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Contact
        </button>

      </nav>
    </header>
  );
};

export default Navbar;

