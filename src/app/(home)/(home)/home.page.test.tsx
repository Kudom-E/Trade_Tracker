import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home component", () => {
  test("renders main header correctly", () => {
    render(<Home />);
    const mainHeader = screen.getByTestId("main-header");
    expect(mainHeader).toBeInTheDocument();
  });
});
