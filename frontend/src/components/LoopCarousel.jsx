import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/LoopCarousel.css";

const images = [
  "https://i.pravatar.cc/300?img=11",
  "https://i.pravatar.cc/300?img=12",
  "https://i.pravatar.cc/300?img=13",
  "https://i.pravatar.cc/300?img=14",
  "https://i.pravatar.cc/300?img=15",
  "https://i.pravatar.cc/300?img=16",
  "https://i.pravatar.cc/300?img=17",
];

export default function LoopCarousel() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const vw = window.innerWidth;
    const spacing = 260;          // distance between cards
    const totalWidth = spacing * cards.length;

    gsap.set(containerRef.current, {
      perspective: 1200,
    });

    // Initial positions (start from RIGHT side)
    cards.forEach((card, i) => {
      gsap.set(card, {
        x: vw + i * spacing,
        y: 0,
      });
    });

    gsap.to(cards, {
      x: `-=${totalWidth}`,
      duration: 40,               // ⬅️ SLOW speed
      ease: "none",
      repeat: -1,
      modifiers: {
        x: (x) => {
          const wrapped =
            ((parseFloat(x) + totalWidth) % totalWidth) - spacing;
          return `${wrapped}px`;
        },
      },
      onUpdate: () => {
        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const screenCenter = vw / 2;

          const distance = Math.abs(centerX - screenCenter);
          const normalized = Math.min(distance / screenCenter, 1);

          // SCALE: smallest in center
          const scale = 0.78 + normalized * 0.35;

          // ROTATION: face inward
          const rotateY =
            centerX < screenCenter
              ? normalized * 28
              : -normalized * 28;

          // DEPTH illusion
          const z = -normalized * 120;
          const y = normalized * 18;

          gsap.set(card, {
            scale,
            rotateY,
            z,
            y,
            opacity: 0.55 + normalized * 0.45,
          });
        });
      },
    });
  }, []);

  return (
    <section className="carousel-section">
      <div className="carousel-container" ref={containerRef}>
        {images.map((src, i) => (
          <div
            className="carousel-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
