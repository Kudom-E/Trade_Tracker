import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import GraphsSection from "@/(dashboard)/dashboard/sections/GraphsSection";

// jest.mock("react-chartjs-2", () => ({
//   GraphsSection: () => null,
// }));
describe("Grapgs section component", () => {
  test("should have days line graph and custom bar graph", () => {
    render(<GraphsSection />);
    const lineGraph = screen.getByTestId("days-line-chart");
    const barGraph = screen.getByTestId("custom-bar-chart");
    expect(lineGraph).toBeInTheDocument();
    expect(barGraph).toBeInTheDocument();
  });
});
