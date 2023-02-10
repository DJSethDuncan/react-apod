import { cleanup, render, screen } from "@testing-library/react";
import { Photo } from "../Photo";

const mockPhotoData = {
  title: "mock-title",
  date: "2022-02-08",
  hdurl: "abc123",
  url: "abc123",
  media_type: "image",
  explanation: "image explanation",
};

describe("Photo test", () => {
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

  it("shows the expected explanation", () => {
    render(<Photo resultData={mockPhotoData} />);
    const date = screen.getByText(mockPhotoData.explanation);
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

describe("missing information in photoData", () => {
  it("shows missing information message when missing url or title", () => {
    let badMockData = mockPhotoData;
    badMockData.url = "";
    render(<Photo resultData={badMockData} />);
    let missingImageMessage = screen.getByText("Missing image information");
    expect(missingImageMessage).toBeInTheDocument();

    cleanup();

    badMockData.url = mockPhotoData.url;
    badMockData.title = "";
    render(<Photo resultData={badMockData} />);
    missingImageMessage = screen.getByText("Missing image information");
    expect(missingImageMessage).toBeInTheDocument();
  });
});
