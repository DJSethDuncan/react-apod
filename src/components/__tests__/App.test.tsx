import { render, screen } from "@testing-library/react";
import { App } from "../App";
import { getApiData } from "../../repositories/utils";

jest.mock("../../repositories/utils");
const mockGetApiData = getApiData as jest.MockedFunction<typeof getApiData>;

const imageData = {
  title: "Pillars of Creation",
  date: "2026-11-19",
  hdurl: "https://example.com/hd.jpg",
  url: "https://example.com/photo.jpg",
  media_type: "image",
  explanation: "Gas and dust in the Eagle Nebula.",
};

describe("App", () => {
  const originalToken = process.env.REACT_APP_NASA_API_TOKEN;

  beforeEach(() => {
    process.env.REACT_APP_NASA_API_TOKEN = "test-token";
    mockGetApiData.mockReset();
  });

  afterAll(() => {
    process.env.REACT_APP_NASA_API_TOKEN = originalToken;
  });

  it("renders", async () => {
    mockGetApiData.mockResolvedValue({ data: imageData } as any);
    render(<App />);
    expect(screen.getByText("NASA Astronomy Photo of the Day")).toBeVisible();
    await screen.findByText("Pillars of Creation");
  });

  it("shows the loading shimmer until the API responds", async () => {
    mockGetApiData.mockResolvedValue({ data: imageData } as any);
    render(<App />);
    expect(
      screen.getByRole("status", { name: "Loading photo of the day" })
    ).toBeInTheDocument();
    await screen.findByText("Pillars of Creation");
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("fetches the API data once", async () => {
    mockGetApiData.mockResolvedValue({ data: imageData } as any);
    render(<App />);
    await screen.findByText("Pillars of Creation");
    expect(mockGetApiData).toHaveBeenCalledTimes(1);
  });

  it("replaces the shimmer with an error message when the request fails", async () => {
    mockGetApiData.mockRejectedValue(new Error("network down"));
    render(<App />);
    await screen.findByText("Unable to retrieve data from API");
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });
});
