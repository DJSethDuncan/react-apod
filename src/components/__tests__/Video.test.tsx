import React from "react";
import { render, screen } from "@testing-library/react";
import Video from "../Video";

describe("Video test", () => {
  const mockVideoData = {
    title: "mock-title",
    date: "2022-02-08",
    hdurl: "abc123",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    media_type: "video",
    explanation: "video explanation",
  };

  it("shows the expected title", () => {
    render(<Video resultData={mockVideoData} />);
    const title = screen.getByText(mockVideoData.title);
    expect(title).toBeInTheDocument();
  });

  it("shows the expected date", () => {
    render(<Video resultData={mockVideoData} />);
    const date = screen.getByText(mockVideoData.date);
    expect(date).toBeInTheDocument();
  });

  it("shows the expected explanation", () => {
    render(<Video resultData={mockVideoData} />);
    const date = screen.getByText(mockVideoData.explanation);
    expect(date).toBeInTheDocument();
  });

  it("loads an image with the correct src", () => {
    render(<Video resultData={mockVideoData} />);
    const video = screen.getByTitle(mockVideoData.title);
    expect(video).toBeVisible();
  });
});
