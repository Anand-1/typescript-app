import { act, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import ImageSlider from "./ImageSlider";

describe("ImageSlider", () => {
  beforeEach(() => {
    // Timer test pattern: fake timers make interval-based carousel behavior deterministic.
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it("auto advances to the next slide after the carousel interval", () => {
    render(<ImageSlider />);

    // User-facing query pattern: find visible slide text, then inspect the slide container state.
    const initialSlide = screen.getByText("Mountain Morning").closest(".carousel-slide");
    expect(initialSlide).toHaveAttribute("data-active", "true");

    act(() => {
      // Advance the interval manually instead of waiting in real time.
      vi.advanceTimersByTime(4000);
    });

    const nextSlide = screen.getByText("Ocean Breeze").closest(".carousel-slide");
    expect(nextSlide).toHaveAttribute("data-active", "true");
  });
});
