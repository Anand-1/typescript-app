import React from "react";
import "./ImageSlider.css";

type Slide = {
  title: string;
  description: string;
  image: string;
};

// Static data pattern: slides are declared outside the component so they are not recreated per render.
const slides: Slide[] = [
  {
    title: "Mountain Morning",
    description: "A calm sunrise over a mountain range.",
    image:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
          <rect width="100%" height="100%" fill="#0f172a" />
          <rect x="0" y="300" width="800" height="200" fill="#1e293b" />
          <path d="M0 320 L140 240 L220 290 L330 190 L460 290 L620 190 L800 310 L800 500 L0 500 Z" fill="#475569" />
          <circle cx="620" cy="120" r="70" fill="#fbbf24" />
          <rect x="120" y="330" width="160" height="90" fill="#64748b" rx="8" />
          <rect x="310" y="350" width="120" height="70" fill="#94a3b8" rx="8" />
        </svg>
      `),
  },
  {
    title: "Ocean Breeze",
    description: "Golden light over a quiet shore.",
    image:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
          <rect width="100%" height="100%" fill="#0f766e" />
          <rect y="280" width="800" height="220" fill="#38bdf8" />
          <path d="M0 320 C180 260 310 250 400 300 C490 350 640 360 800 300 L800 500 L0 500 Z" fill="#fde68a" />
          <path d="M80 250 C160 200 240 220 320 250 C400 280 560 280 720 220" stroke="#fef3c7" stroke-width="8" fill="none" stroke-linecap="round" />
          <circle cx="630" cy="120" r="60" fill="#f8fafc" opacity="0.8" />
        </svg>
      `),
  },
  {
    title: "Forest Path",
    description: "A peaceful trail through the woods.",
    image:
      "data:image/svg+xml;utf8," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
          <rect width="100%" height="100%" fill="#14532d" />
          <rect x="0" y="320" width="800" height="180" fill="#166534" />
          <path d="M0 330 L140 220 L260 320 L420 180 L580 320 L800 220 L800 500 L0 500 Z" fill="#2f855a" />
          <path d="M270 330 L360 200 L420 330" fill="#4a7c59" />
          <path d="M420 330 L530 170 L610 330" fill="#4a7c59" />
          <path d="M120 330 L220 240 L290 330" fill="#4a7c59" />
          <circle cx="640" cy="120" r="55" fill="#fbbf24" opacity="0.65" />
        </svg>
      `),
  },
];

const ImageSlider = () => {
  // Carousel state pattern: activeIndex, fullscreen, and pause state independently model UI behavior.
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [isPaused, setIsPaused] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  const goToPrevious = () => {
    // Wrap-around navigation pattern: going backward from first slide moves to the last slide.
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    // Wrap-around navigation pattern: going forward from last slide moves to the first slide.
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    // Keyboard interaction pattern: make the carousel operable without pointer input.
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goToPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      goToNext();
    }
  };

  const toggleFullScreen = () => {
    setIsFullScreen((prev) => !prev);
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLElement>) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const delta = touchStartX.current - touchEndX.current;

    // Touch interaction pattern: horizontal swipe distance controls slide navigation.
    if (delta > 50) {
      goToNext();
    } else if (delta < -50) {
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  React.useEffect(() => {
    // Autoplay effect pattern: advance slides on an interval, paused by hover/focus.
    if (isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className={`image-slider-page ${isFullScreen ? "fullscreen" : ""}`}>
      <h2>Image Carousel</h2>
      <p>This route demonstrates a simple image carousel.</p>

      <div
        className={`image-slider-card ${isFullScreen ? "fullscreen-card" : ""}`}
        tabIndex={0}
        role="region"
        aria-label="Image carousel"
        onKeyDown={handleKeyDown}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.title}
                className="carousel-slide"
                data-active={index === activeIndex}
                aria-hidden={index !== activeIndex}
              >
                <div className="image-frame">
                  <img src={slide.image} alt={slide.title} className="slider-image" />
                  <button
                    type="button"
                    className="fullscreen-toggle"
                    onClick={toggleFullScreen}
                    aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
                  >
                    {isFullScreen ? "⤡" : "⤢"}
                  </button>
                </div>
                <div className="slider-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-controls">
          <button type="button" onClick={goToPrevious}>
            Previous
          </button>
          <div className="slider-dots" aria-label="Slide indicators">
            {slides.map((slide, index) => (
              <span
                key={slide.title}
                className={`dot ${index === activeIndex ? "active" : ""}`}
              />
            ))}
          </div>
          <button type="button" onClick={goToNext}>
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
