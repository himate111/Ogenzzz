import "../styles/testimonials.css";

const people = [
    
  "https://randomuser.me/api/portraits/men/11.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/13.jpg",
  "https://randomuser.me/api/portraits/women/14.jpg",
  "https://randomuser.me/api/portraits/men/15.jpg",
    "https://randomuser.me/api/portraits/men/16.jpg",
  "https://randomuser.me/api/portraits/women/17.jpg",
  "https://randomuser.me/api/portraits/men/18.jpg",
  "https://randomuser.me/api/portraits/women/19.jpg",
  
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      {/* Avatar row */}
      <div className="testimonials-avatars">
        {people.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`avatar c${i + 1}`}
            alt=""
          />
        ))}
      </div>

      {/* Center content */}
      <div className="testimonials-content">
        <span className="testimonials-pill">Testimonials</span>

        <h2>
          Trusted by leaders <br />
          <span>from various industries</span>
        </h2>

        <p>
          Learn why professionals trust our solutions to complete
          their customer journeys.
        </p>

        <button className="testimonials-btn">
          Read Success Stories →
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
