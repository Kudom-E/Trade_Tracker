import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/(home)/(home)/page";

describe("home page component", () => {
  test("should render main heading", () => {
    render(<Home />);
    const header = screen.getByTestId("main-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("For What is Coming Next");
  });
  test("should render sub heading", () => {
    render(<Home />);
    const header = screen.getByTestId("sub-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent(
      "A nextjs boilerplat with Jest, Circle CI, Vercel, Typescript"
    );
  });
});
