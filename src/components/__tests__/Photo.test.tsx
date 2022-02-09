import React from "react";
import { render, screen } from "@testing-library/react";
import Photo from "../Photo";

describe("Photo test", () => {
  const mockPhotoData = {
    title: "mock-title",
    date: "2022-02-08",
    hdurl: "abc123",
    url: "abc123",
  };

  it("shows the expected title", () => {
    render(<Photo photoData={mockPhotoData} />);
    const title = screen.getByText("mock-title");
    expect(title).toBeInTheDocument();
  });

  it("shows the expected date", () => {
    render(<Photo photoData={mockPhotoData} />);
    const date = screen.getByText("2022-02-08");
    expect(date).toBeInTheDocument();
  });

  it("loads an image with the correct src", () => {
    render(<Photo photoData={mockPhotoData} />);
    const img = screen.getByTitle("APOD Image");
    expect(img).toBeVisible();
  });

  it("shows the title as the alt text", () => {
    render(<Photo photoData={mockPhotoData} />);
    const img = screen.getByAltText(mockPhotoData.title);
    expect(img).toBeInTheDocument();
  });
});
