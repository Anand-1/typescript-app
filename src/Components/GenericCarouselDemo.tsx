import React from "react";
import GenericCarousel from "./GenericCarousel";
import "./GenericCarousel.css";

type DemoItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const demoItems: DemoItem[] = [
  {
    id: "demo-1",
    title: "Skyline",
    description: "A modern city skyline at sunset.",
    image:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
          <rect width="100%" height="100%" fill="#111827" />
          <rect x="90" y="140" width="80" height="220" fill="#f59e0b" />
          <rect x="210" y="200" width="100" height="160" fill="#38bdf8" />
          <rect x="350" y="120" width="110" height="240" fill="#f43f5e" />
          <rect x="500" y="180" width="90" height="180" fill="#10b981" />
          <rect x="620" y="90" width="90" height="270" fill="#a78bfa" />
          <rect x="0" y="360" width="800" height="140" fill="#1f2937" />
        </svg>
      `),
  },
  {
    id: "demo-2",
    title: "Desert Road",
    description: "A winding road through golden dunes.",
    image:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
          <rect width="100%" height="100%" fill="#f59e0b" />
          <path d="M0 380 C180 320 260 310 360 340 C480 375 650 400 800 340 L800 500 L0 500 Z" fill="#fb923c" />
          <path d="M120 360 L320 240 L500 320 L680 220" stroke="#78350f" stroke-width="10" fill="none" stroke-linecap="round" />
          <circle cx="620" cy="140" r="60" fill="#fde68a" />
        </svg>
      `),
  },
  {
    id: "demo-3",
    title: "Forest Lake",
    description: "A calm lake inside a green forest.",
    image:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
          <rect width="100%" height="100%" fill="#14532d" />
          <path d="M0 360 C170 300 210 300 300 340 C410 390 580 390 800 320 L800 500 L0 500 Z" fill="#166534" />
          <circle cx="620" cy="140" r="55" fill="#fde68a" opacity="0.8" />
          <path d="M120 340 L250 220 L320 340" fill="#4d7c0f" />
          <path d="M360 340 L520 170 L620 340" fill="#4d7c0f" />
        </svg>
      `),
  },
];

const GenericCarouselDemo = () => {
  return (
    <section className="example-page">
      <header className="example-header">
        <h1>Generic Carousel Example</h1>
        <p>
          A reusable carousel that accepts item data, render props, autoplay,
          controls, dots, hover pause, and touch gestures.
        </p>
        <div className="example-links">
          <a href="https://react.dev/learn/passing-props-to-a-component" target="_blank" rel="noreferrer">
            Open Props Docs
          </a>
        </div>
      </header>

      <section className="example-panel">
        <GenericCarousel
          items={demoItems}
          autoPlay
          interval={4000}
          // Custom renderer pattern: the generic carousel owns movement, this callback owns slide UI.
          renderItem={(item) => (
            <div style={{ background: "#fff", borderRadius: "8px", overflow: "hidden", boxShadow: "0 12px 30px rgba(15, 23, 42, 0.12)" }}>
              <img src={item.image} alt={item.title} style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }} />
              <div style={{ padding: "1rem 1.25rem 1.25rem" }}>
                <h3 style={{ margin: "0 0 0.35rem" }}>{item.title}</h3>
                <p style={{ margin: 0, color: "#475569" }}>{item.description}</p>
              </div>
            </div>
          )}
        />
      </section>
    </section>
  );
};

export default GenericCarouselDemo;
