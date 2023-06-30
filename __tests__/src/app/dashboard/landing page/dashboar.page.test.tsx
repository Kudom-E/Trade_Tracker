import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "@/(dashboard)/dashboard/page";

describe("Dashboard page component", () => {
  test("should render dashboard section", () => {
    render(<Dashboard />);
    const section = screen.getByTestId("dashboard");
    expect(section).toBeInTheDocument();
  });
});
