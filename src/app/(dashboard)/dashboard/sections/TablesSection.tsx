import DataTable from "@/(dashboard)/components/dashboard/DataTable";
import React from "react";
import { TableData } from "../../../../../typings";

// type Props = {};

const TablesSection = () => {
  const tableData: TableData = {
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
      {
        Name: "Garrett Winters",
        Position: "Director",
        Office: "San Francisco",
        Age: "63",
        Date: "22/04/2021",
      },
      {
        Name: "Tiger Nixon",
        Position: "Systen Architect",
        Office: "San Francisco",
        Age: "61",
        Date: "22/04/2021",
      },
    ],
  };

  const tableData2: TableData = {
    headers: ["Name", "Position", "Office"],
    data: [
      {
        Name: "Ashton Cox",
        Position: "Technical Author",
        Office: "San Francisco",
      },
      {
        Name: "Cedric Kelly",
        Position: "Javascript Developer",
        Office: "Edinburgh",
      },
      {
        Name: "Garrett Winters",
        Position: "Director",
        Office: "San Francisco",
      },
      {
        Name: "Tiger Nixon",
        Position: "Systen Architect",
        Office: "San Francisco",
      },
    ],
  };

  return (
    <section>
      <div className="flex gap-10 flex-wrap lg:flex-nowrap pb-10">
        {/* days graph */}
        <div className="w-[100%] lg:w-[60%] rounded-[6px] bg-[rgba(var(--secondary-color-rgb),1)] p-4 sm:p-10 max-h-[35rem]">
          <div className="border-[.5px] border-[rgba(var(--text-color-rgb),.5)] rounded-[6px] p-5">
            <div className="flex justify-between items-center px-2">
              <div className="text-[rgba(var(--text-color-rgb),1)]">
                <h3>Trades</h3>
              </div>
              <div>
                <button className="h-full px-5 md:px-8 py-2 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] text-white cursor-default">
                  See all
                </button>
              </div>
            </div>
            <DataTable tableData={tableData} />
          </div>
        </div>
        {/* week & month & year graph */}
        <div className="bg-[rgba(var(--secondary-color-rgb),1)] w-[100%] lg:w-[40%] rounded-[6px] p-4 sm:p-10 max-h-[35rem]">
          <div className="border-[.5px] border-[rgba(var(--text-color-rgb),.5)] rounded-[6px] p-5">
            <div className="flex justify-between items-center px-2">
              <div className="text-[rgba(var(--text-color-rgb),1)]">
                <h3>Trade totals</h3>
              </div>
              <div className="flex gap-3 flex-wrap sm:flex-nowrap justify-items-end">
                <button
                  className={`h-full px-5 md:px-8 py-2 bg-[rgba(var(--primary-color-rgb),1)] cursor-default text-white rounded-[6px] text-[rgba(var(--primary-color-rgb),1)]`}
                >
                  See all
                </button>
              </div>
            </div>
            <DataTable tableData={tableData2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TablesSection;
