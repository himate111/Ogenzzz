import "../styles/services.css";

const services = [
  {
    title: "Faucet & Leak Repairs",
    desc: "Quick fixes for dripping taps and leaking pipes.",
    img: "https://images.unsplash.com/photo-1581579185169-1c9a00c5f63a",
  },
  {
    title: "Remodeling Service",
    desc: "Upgrade your kitchen and bathroom spaces.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Drain Cleaning & Repairs",
    desc: "Clear clogged drains and restore flow.",
    img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    title: "Sewer Repair & Cleaning",
    desc: "Professional sewer inspection and cleaning.",
    img: "https://images.unsplash.com/photo-1560185008-5f0bb1866cab",
  },
  {
    title: "Water Line Repair",
    desc: "Reliable water line installation and repair.",
    img: "https://images.unsplash.com/photo-1590725121839-892b458a74fe",
  },
  {
    title: "Gas Line Services",
    desc: "Safe gas line installation and maintenance.",
    img: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        Reliable solutions crafted to elevate your brand and business
      </p>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="service-body">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span className="service-link">View Service</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
