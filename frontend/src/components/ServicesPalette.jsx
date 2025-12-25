import "../styles/servicesPalette.css";
import { PencilSimple, DeviceMobile,IdentificationBadge,Sparkle } from "phosphor-react";



const services = [
  {
    title: "Graphic Design",
    desc: "Unlock the power of visual storytelling with our expert graphic design services tailored to elevate your brand and captivate.",
    
  },
  {
    title: "Digital Marketing",
    desc: "Elevate your brand's online presence with our data-driven digital marketing strategies. From SEO and content marketing.",
    icon: <DeviceMobile size={22} weight="bold" />,
  },
  {
    title: "Content Marketing",
    desc: "Our team creates engaging and shareable content that resonates with your audience, drives organic traffic.",
    icon: <PencilSimple size={22} weight="bold" />
  },
  {
    title: "UI/UX Design",
    desc: "Bringing the history of your brand to the forefront gives an emotional dimension to your visual identity.",
  },
  {
    title: "Web Design",
    desc: "We specialize in creating visually stunning, user-friendly websites that align with your brand identity.",
  },
  {
    title: "Brand Identity",
    desc: "It creates a recognizable identity that differentiates the brand from competitors and resonates with the audience.",
    icon : <IdentificationBadge size={22}  weight="bold"/>
  },
];

const ServicesPalette = () => {
  return (
    <section className="palette-section">
      {/* Badge */}
      <span className="palette-badge"> <Sparkle size={25} /> Our Services</span>

      {/* Title */}
      <h2 className="palette-title">Our Palette of Expertise</h2>

      {/* Grid */}
      <div className="palette-grid">
        {services.map((item, index) => (
          <div
            key={index}
            className={`palette-card ${item.featured ? "featured" : ""}`}
          >
            <div className="palette-icon">
              {item.icon ? item.icon : "⬤"}
           </div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPalette;
