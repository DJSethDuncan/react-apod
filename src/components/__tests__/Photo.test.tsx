import React from "react";
import { render, screen } from "@testing-library/react";
import Photo from "../Photo";

describe("Photo test", () => {
  const mockPhotoData = {
    title: "mock-title",
    date: "2022-02-08",
    hdurl: "abc123",
    url: "abc123",
    media_type: "image",
  };

  it("shows the expected title", () => {
    render(<Photo resultData={mockPhotoData} />);
    const title = screen.getByText(mockPhotoData.title);
    expect(title).toBeInTheDocument();
  });

  it("shows the expected date", () => {
    render(<Photo resultData={mockPhotoData} />);
    const date = screen.getByText(mockPhotoData.date);
    expect(date).toBeInTheDocument();
  });

  it("loads an image with the correct src", () => {
    render(<Photo resultData={mockPhotoData} />);
    const img = screen.getByTitle("APOD Image");
    expect(img).toBeVisible();
  });

  it("shows the title as the alt text", () => {
    render(<Photo resultData={mockPhotoData} />);
    const img = screen.getByAltText(mockPhotoData.title);
    expect(img).toBeInTheDocument();
  });
});
