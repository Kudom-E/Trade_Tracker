import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from "@/(dashboard)/components/dashboard/DataTable";

describe("DataTable component renders with the right props", () => {
  let component: ReturnType<typeof render>;

  const tableDataProps = {
    headers: ["Name", "Position", "Office", "Age", "Date"],
    data: [
      {
        Name: "Ashton Cox",
        Position: "Technical Author",
        Office: "San Francisco",
        Age: "66",
        Date: "22/04/2021",
      },
      {
        Name: "Cedric Kelly",
        Position: "Javascript Developer",
        Office: "Edinburgh",
        Age: "22",
        Date: "22/04/2021",
      },
    ],
  };

  beforeEach(() => {
    component = render(<DataTable tableData={tableDataProps} />); // Render the component and store it in the variable
  });

  afterEach(() => {
    component.unmount(); // Reset the component variable to null to clean up
  });

  test("renders the right number of headers", () => {
    const headers = screen.getAllByTestId("header");
    expect(headers).toHaveLength(tableDataProps.headers.length);
  });

  test("renders the right number of rows of data", () => {
    const row = screen.getAllByTestId("data-row");
    expect(row).toHaveLength(tableDataProps.data.length);
  });

  test("renders the right number of columns of data", () => {
    const column = screen.getAllByTestId("data-column");
    expect(column).toHaveLength(
      Object.values(tableDataProps.data[0]).length * tableDataProps.data.length
    );
  });

  test("renders the right headers in the right order", () => {
    const header = screen.getAllByTestId("header");
    expect(header[0]).toHaveTextContent(tableDataProps.headers[0]);
    expect(header[1]).toHaveTextContent(tableDataProps.headers[1]);
    expect(header[2]).toHaveTextContent(tableDataProps.headers[2]);
    expect(header[3]).toHaveTextContent(tableDataProps.headers[3]);
  });

  test("renders the right data in the right order", () => {
    const column = screen.getAllByTestId("data-column");
    expect(column[0]).toHaveTextContent(tableDataProps.data[0].Name);
    expect(column[1]).toHaveTextContent(tableDataProps.data[0].Position);
    expect(column[2]).toHaveTextContent(tableDataProps.data[0].Office);
    expect(column[3]).toHaveTextContent(tableDataProps.data[0].Age);
    expect(column[4]).toHaveTextContent(tableDataProps.data[0].Date);
  });
});
