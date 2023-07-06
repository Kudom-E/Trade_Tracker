"use client";

import React, { useEffect, useState } from "react";
import DataTable from "../components/dashboard/DataTable";
import Pagination from "../components/dashboard/Pagination";
import { tableData } from "../dashboard/data/TableData";

const Tables = () => {
  const { headers, data } = tableData;

  const [activePage, setActivePage] = useState(0);
  const [lastData, setLastData] = useState(0);

  const pageSize = 10;

  useEffect(() => {
    setLastData((activePage + 1) * pageSize);
  }, [activePage]);

  const firstData = lastData - pageSize;

  const filteredData = data.slice(firstData, lastData);

  const displayData = { headers, data: filteredData };

  const pageNumbers = Array.from(
    { length: tableData.data.length / pageSize },
    (_, index) => index + 1
  );

  return (
    <section>
      <div className="w-[100%] rounded-[6px] p-4 pb-0 sm:p-10 sm:pb-0">
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
          <DataTable tableData={displayData} />
          {!(tableData.data.length <= 10) && (
            <Pagination
              pages={pageNumbers}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
        </div>
      </div>

      <div className="w-[100%] rounded-[6px] p-4 sm:p-10">
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
          <DataTable tableData={displayData} />
          {!(tableData.data.length <= 10) && (
            <Pagination
              pages={pageNumbers}
              activePage={activePage}
              setActivePage={setActivePage}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Tables;
