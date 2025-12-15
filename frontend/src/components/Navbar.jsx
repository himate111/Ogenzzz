import { useState, useRef, useEffect } from "react";
import "../styles/navbar.css";

const menu = ["Home", "Products", "Blog", "About"];

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const menuRef = useRef([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    const current = menuRef.current[activeIndex];
    if (current && sliderRef.current) {
      sliderRef.current.style.width = `${current.offsetWidth}px`;
      sliderRef.current.style.transform = `translateX(${current.offsetLeft}px)`;
    }
  }, [activeIndex]);

  return (
    <header className="nav-container">
      <nav className="nav-pill">

        {/* BRAND */}
        <div className="brand">Ogenz</div>

        {/* MENU */}
        <div className="menu-wrapper">
          <div className="slider" ref={sliderRef} />
          {menu.map((item, index) => (
            <div
              key={item}
              ref={(el) => (menuRef.current[index] = el)}
              className={`nav-link ${activeIndex === index ? "active" : ""}`}
              onClick={() => setActiveIndex(index)}
            >
              {item}
              {/* {item === "Home" && <span className="dot">4</span>} */}
            </div>
          ))}
        </div>

        {/* CONTACT */}
        <button className="contact-btn">Contact</button>

      </nav>
    </header>
  );
};

export default Navbar;
