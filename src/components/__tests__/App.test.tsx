import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders", () => {
    render(<App />);
    const app = screen.getByText("APOD");
    expect(app).toBeVisible();
  });
});
