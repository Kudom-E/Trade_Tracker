import React from "react";
import { TableData } from "../../../../typings";
import DataTable from "../components/dashboard/DataTable";

// type Props = {}

const Tables = () => {
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

  return (
    <section>
      <div className="w-[100%] rounded-[6px] p-4 pb-0 sm:p-10 sm:pb-0 max-h-[35rem]">
        <div className="border-[.5px] border-[rgba(var(--text-color-rgb),.5)] bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px] p-5">
          <div className="flex justify-between items-center px-2">
            <div className="text-[rgba(var(--text-color-rgb),1)]">
              <h3>Trades</h3>
            </div>
            <div>
              {/* <button className="h-full px-5 md:px-8 py-2 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] text-white cursor-default">
                See all
              </button> */}
            </div>
          </div>
          <DataTable tableData={tableData} />
        </div>
      </div>

      <div className="w-[100%] rounded-[6px] p-4 sm:p-10 max-h-[35rem]">
        <div className="border-[.5px] border-[rgba(var(--text-color-rgb),.5)] bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px] p-5">
          <div className="flex justify-between items-center px-2">
            <div className="text-[rgba(var(--text-color-rgb),1)]">
              <h3>Trades</h3>
            </div>
            <div>
              {/* <button className="h-full px-5 md:px-8 py-2 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] text-white cursor-default">
                See all
              </button> */}
            </div>
          </div>
          <DataTable tableData={tableData} />
        </div>
      </div>
    </section>
  );
};

export default Tables;
