import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    const app = screen.getByText("NASA Astronomy Photo of the Day");
    expect(app).toBeVisible();
  });
});
