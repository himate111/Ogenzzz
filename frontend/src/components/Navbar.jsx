import { useState, useRef, useEffect } from "react";
import "../styles/navbar.css";

const menu = ["Home", "Products", "Blog", "About"];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const menuRefs = useRef([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const current = menuRefs.current[activeIndex];
    if (current && sliderRef.current) {
      sliderRef.current.style.width = `${current.offsetWidth}px`;
      sliderRef.current.style.transform = `translateX(${current.offsetLeft}px)`;
    }
  }, [activeIndex]);

  return (
    <header className="nav-container">
      <nav className="nav-pill">

        {/* Brand */}
        <div className="brand">Ogenz</div>

        {/* Menu */}
        <div className="menu-wrapper">
          <span ref={sliderRef} className="slider" />

          {menu.map((item, index) => (
            <div
              key={item}
              ref={(el) => (menuRefs.current[index] = el)}
              className={`nav-link ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item}
              {/* {item === "Home" && <span className="dot">4</span>} */}
            </div>
          ))}
        </div>

        {/* Contact */}
        <button className="contact-btn">Contact</button>

      </nav>
    </header>
  );
};

export default Navbar;
