import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "@/(home)/contact/page";

describe("contact page component", () => {
  let component: ReturnType<typeof render>;

  beforeEach(() => {
    component = render(<Contact />);
  });

  afterEach(() => {
    component.unmount();
  });

  test("should render contact card", () => {
    const card = screen.getByTestId("contact-card");
    expect(card).toBeVisible();
  });
  test("should render contact form", () => {
    const form = screen.getByTestId("contact-form");
    expect(form).toBeVisible();
  });
  test("should render contact info", () => {
    const info = screen.getByTestId("contact-info");
    const heading = screen.getByRole("heading");
    expect(info).toBeVisible();
    expect(heading).toBeVisible();
    expect(heading).toHaveTextContent("Get a quote");
  });
  test("should render submit button", () => {
    const submitButton = screen.getByRole("submit");
    expect(submitButton).toBeVisible();
    expect(submitButton).toHaveTextContent("Send Message");
  });
});
