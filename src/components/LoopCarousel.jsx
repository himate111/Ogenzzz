import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../styles/LoopCarousel.css";

import carosel1 from "../videos/Teja.mp4";
import carosel2 from "../videos/muruga.mp4";
import carosel3 from "../videos/rikky.mp4";
import carosel4 from "../videos/raja.mp4";
import carosel5 from "../videos/viveksankar.mp4";
import carosel6 from "../videos/lalithamam.mp4";
import carosel7 from "../videos/nikhilanna.mp4";


const videos = [
  carosel1,
  carosel2,
  carosel3,
  carosel4,
  carosel5,
  carosel6,
  carosel7,
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
      duration: 70,               // ⬅️ SLOW speed
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
    const x = gsap.getProperty(card, "x");
    const centerX = x + 100;
    const screenCenter = vw / 2;

    const distance = Math.abs(centerX - screenCenter);
    const normalized = Math.min(distance / screenCenter, 1);

    const scale =
      Math.round((0.78 + normalized * 0.35) * 1000) / 1000;

    const rotateY =
      centerX < screenCenter
        ? normalized * 28
        : -normalized * 28;

    gsap.set(card, {
      scale,
      rotateY,
      z: -normalized * 120,
      y: normalized * 18,
      opacity: 0.55 + normalized * 0.45,
    });
  });
},
    });
  },
   
  []);

  return (
    <section className="carousel-section">
      <div className="carousel-container" ref={containerRef}>
{videos.map((src, i) => (
  <div
    className="carousel-card"
    key={i}
    ref={(el) => (cardsRef.current[i] = el)}
  >
    <video
      src={src}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
    />
  </div>
))}

      </div>
    </section>
  );
}