import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "@/(home)/contact/page";

describe("contact page component", () => {
  test("should render contact", () => {
    render(<Contact />);
    const div = screen.getByText("Contact");
    expect(div).toHaveTextContent("Contact");
  });
});
