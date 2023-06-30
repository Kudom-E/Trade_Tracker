import React from "react";
import { render, screen, RenderResult } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "@/(home)/contact/page";

describe("contact page component", () => {
  test("should render contact card", () => {
    render(<Contact />);
    const card = screen.getByTestId("contact-card");
    expect(card).toBeVisible();
  });
  test("should render contact form", () => {
    render(<Contact />);
    const form = screen.getByTestId("contact-form");
    expect(form).toBeVisible();
  });
  test("should render contact info", () => {
    render(<Contact />);
    const info = screen.getByTestId("contact-info");
    const heading = screen.getByRole("heading");
    expect(info).toBeVisible();
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Get a quote");
  });
  test("should render submit button", () => {
    render(<Contact />);
    const submitButton = screen.getByRole("submit");
    expect(submitButton).toBeVisible();
    expect(submitButton).toHaveTextContent("Send Message");
  });
});
