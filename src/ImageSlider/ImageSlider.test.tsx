import { act, render, screen } from "@testing-library/react";
import ImageSlider from "./ImageSlider";

describe("ImageSlider", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it("auto advances to the next slide after the carousel interval", () => {
    render(<ImageSlider />);

    const initialSlide = screen.getByText("Mountain Morning").closest(".carousel-slide");
    expect(initialSlide).toHaveAttribute("data-active", "true");

    act(() => {
      jest.advanceTimersByTime(4000);
    });

    const nextSlide = screen.getByText("Ocean Breeze").closest(".carousel-slide");
    expect(nextSlide).toHaveAttribute("data-active", "true");
  });
});
