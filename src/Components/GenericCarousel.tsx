import React from "react";

type CarouselItem = {
  id: string | number;
  title: string;
  description?: string;
  image?: string;
  content?: React.ReactNode;
};

type GenericCarouselProps = {
  items: CarouselItem[];
  renderItem?: (item: CarouselItem) => React.ReactNode;
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showDots?: boolean;
  className?: string;
};

const GenericCarousel = ({
  items,
  renderItem,
  autoPlay = true,
  interval = 4000,
  showControls = true,
  showDots = true,
  className = "",
}: GenericCarouselProps) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);
  const touchStartX = React.useRef<number | null>(null);
  const touchEndX = React.useRef<number | null>(null);

  const goToPrevious = React.useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  }, [items.length]);

  const goToNext = React.useCallback(() => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  }, [items.length]);

  React.useEffect(() => {
    if (!autoPlay || isPaused || items.length <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      goToNext();
    }, interval);

    return () => window.clearInterval(timer);
  }, [autoPlay, goToNext, interval, isPaused, items.length]);

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

    if (delta > 50) {
      goToNext();
    } else if (delta < -50) {
      goToPrevious();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!items.length) {
    return null;
  }

  return (
    <div
      className={`generic-carousel ${className}`.trim()}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="generic-carousel-viewport">
        <div
          className="generic-carousel-track"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`generic-carousel-slide ${index === activeIndex ? "active" : ""}`}
            >
              {renderItem ? renderItem(item) : item.content}
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <div className="generic-carousel-controls">
          <button type="button" onClick={goToPrevious}>
            Previous
          </button>
          {showDots && (
            <div className="generic-carousel-dots" aria-label="Slide indicators">
              {items.map((item, index) => (
                <span
                  key={item.id}
                  className={`generic-carousel-dot ${index === activeIndex ? "active" : ""}`}
                />
              ))}
            </div>
          )}
          <button type="button" onClick={goToNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default GenericCarousel;
