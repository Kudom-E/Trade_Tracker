import REact from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/(home)/(home)/page";

describe("home page component", () => {
  test("should render", () => {
    render(<Home />);
    const header = screen.getByTestId("main-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("For What is Coming Next");
  });
});
