import "../styles/servicesAlt.css";

const services = [
  {
    title: "Smart Scheduler",
    desc: "Organize your day with AI-powered planning — sync tasks, events, and get smart reminders that adapt to your workflow.",
    bg: "#FFF8D6",
    icon: "🔔",
  },
  {
    title: "Focus Mode",
    desc: "Block distractions and get in the zone with personalized soundscapes, app blockers, and deep work timers.",
    bg: "#EAF3FF",
    icon: "🎯",
  },
  {
    title: "Habit Tracker",
    desc: "Build habits that stick. Track your progress visually and receive motivation when you need it most.",
    bg: "#FFE8E8",
    icon: "📊",
  },
  {
    title: "Digital Cleanup",
    desc: "Free up space, delete duplicates, and organize your device with a single tap.",
    bg: "#F4F0FF",
    icon: "🧹",
  },
];

export default function ServicesAlt() {
  return (
    <section className="services-alt">
      <span className="services-alt-badge">Our Service</span>

      <h2 className="services-alt-title">
        More Than Just Productivity
      </h2>

      <p className="services-alt-subtitle">
        Our toolkit is built to help you stay organized, focused, and in control —
        from planning your day to decluttering your digital space.
      </p>

      <div className="services-alt-grid">
        {services.map((item, index) => (
          <div className="services-alt-card" key={index}>
            <div
              className="services-alt-icon"
              style={{ background: item.bg }}
            >
              <span>{item.icon}</span>
            </div>

            <div className="services-alt-content">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
