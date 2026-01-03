import "../styles/testimonials.css";
import person1 from "../assets/clients/person1.png";
import person2 from "../assets/clients/person10.jpeg";
import person3 from "../assets/clients/person3.jpeg";
import rekha from "../assets/clients/rekhamam.png";
import gocolors from "../assets/clients/gocolors.png";
import newclient from "../assets/clients/newclient.jpeg";
import person7 from "../assets/clients/nikhil.jpeg";
import rajamanickam from "../assets/clients/rajamanickam.jpeg";
import person9 from "../assets/clients/person9.jpeg";



const people = [
    
person1,
person2,
person3,
rekha,
gocolors,
newclient,
person7,
rajamanickam,
person9


  
];



const Testimonials = () => {
  return (
    <section className="testimonials-viewport">
      <section className="testimonials-section">

        {/* Avatar row */}
        <div className="testimonials-avatars-wrap">
          <div className="testimonials-avatars">
            {people.map((img, i) => (
              <div key={i} className={`avatar-wrap c${i + 1}`}>
                <img
                  src={img}
                  className="avatar"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center content */}
        <div className="testimonials-content">
          <span className="testimonials-pill">Testimonials</span>

          <h2>
            Some of the people we’ve worked with. <br />
            <span>Different industries. Different challenges.</span>
          </h2>

          <p>
            Every project came with its own context, pace, and set of challenges.
          </p>

          <button className="testimonials-btn">
            Read Success Stories →
          </button>
        </div>

      </section>
    </section>
  );
};

export default Testimonials;

