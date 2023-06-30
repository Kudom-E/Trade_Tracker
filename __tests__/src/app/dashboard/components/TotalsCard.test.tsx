import React from "react";
import { render, screen } from "@testing-library/react";
import TotalsCard from "@/(dashboard)/components/dashboard/TotalsCard";

describe("TotalsCard component dynamic renders", () => {
  const positiveProps = {
    time: "yesterday",
    total: "1000",
    percentage: "50%",
    icon: "increase",
  };

  const negativeProps = {
    time: "last week",
    total: "3000",
    percentage: "-5%",
    icon: "decrease",
  };

  const sameProps = {
    time: "last month",
    total: "5000",
    percentage: "0%",
    icon: "same",
  };

  test("renders correctly with positive numbers and green color", () => {
    const { getByText, getByTestId } = render(
      <TotalsCard {...positiveProps} />
    );
    const directionIcon = getByTestId("up-icon");

    // Assert the presence of specific elements
    expect(getByText("Totals")).toBeInTheDocument();
    expect(getByText("( yesterday )")).toBeInTheDocument();
    expect(getByText("1000")).toBeInTheDocument();
    expect(getByTestId("icon")).toBeInTheDocument();
    expect(getByTestId("totals-summary")).toHaveTextContent(
      "50% Since yesterday"
    );

    // Additional assertions specific to the icon prop
    expect(getByTestId("icon")).toHaveClass("bg-green-500");
    expect(getByTestId("icon")).toContainElement(directionIcon);
  });

  test("renders correctly with negative numbers and red color", () => {
    const { getByText, getByTestId } = render(
      <TotalsCard {...negativeProps} />
    );
    const directionIcon = getByTestId("down-icon");

    // Assert the presence of specific elements
    expect(getByText("Totals")).toBeInTheDocument();
    expect(getByText("( last week )")).toBeInTheDocument();
    expect(getByText("3000")).toBeInTheDocument();
    expect(getByTestId("icon")).toBeInTheDocument();
    expect(getByTestId("totals-summary")).toHaveTextContent(
      "-5% Since last week"
    );

    // Additional assertions specific to the icon prop
    expect(getByTestId("icon")).toHaveClass("bg-red-500");
    expect(getByTestId("icon")).toContainElement(directionIcon);
  });

  test("renders correctly with same numbers and primary color", () => {
    const { getByText, getByTestId } = render(<TotalsCard {...sameProps} />);
    const directionIcon = getByTestId("dash-icon");

    // Assert the presence of specific elements
    expect(getByText("Totals")).toBeInTheDocument();
    expect(getByText("( last month )")).toBeInTheDocument();
    expect(getByText("5000")).toBeInTheDocument();
    expect(getByTestId("icon")).toBeInTheDocument();
    expect(getByTestId("totals-summary")).toHaveTextContent(
      "0% Since last month"
    );

    // Additional assertions specific to the icon prop
    expect(getByTestId("icon")).toHaveClass(
      "bg-[rgba(var(--primary-color-rgb),1)]"
    );
    expect(getByTestId("icon")).toContainElement(directionIcon);
  });
});
