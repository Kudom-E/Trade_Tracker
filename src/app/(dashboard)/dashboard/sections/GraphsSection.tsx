"use client";

import CustomChart from "@/(dashboard)/components/dashboard/CustomChart";
import DaysChart from "@/(dashboard)/components/dashboard/DaysChart";
import React, { useState } from "react";

// type Props = {};

const GraphsSection = () => {
  const [activeGraph, setActiveGraph] = useState("MonthsGraph");

  const activateMonth = () => {
    if (activeGraph !== "MonthsGraph") {
      setActiveGraph("MonthsGraph");
    } else {
      return;
    }
  };

  const activateYear = () => {
    if (activeGraph !== "YearsGraph") {
      setActiveGraph("YearsGraph");
    } else {
      return;
    }
  };

  const monthsData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [12, 19, 3, 0, 2, 13],
        backgroundColor: "rgba(122, 72, 213,1)",
      },
    ],
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const yearsData = {
    labels: ["2018", "2019", "2020", "2021", "2022", "2023"],
    datasets: [
      {
        data: [30, 19, 53, 25, 2, 10],
        backgroundColor: "rgba(122, 72, 213,1)",
      },
    ],
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <section>
      <div className="flex gap-10 flex-wrap lg:flex-nowrap">
        {/* days graph */}
        <div className="bg-[rgba(var(--secondary-color-false-rgb),1)] w-[100%] lg:w-[60%] rounded-[6px] p-10 max-h-[35rem]">
          <div className="flex justify-between px-2">
            <div className="text-white">
              <h5 className="uppercase opacity-50 text-xs">overview</h5>
              <h3>Daily trade totals</h3>
            </div>
            <div>
              <button className="h-full px-8 bg-[rgba(var(--primary-color-rgb),1)] rounded-[6px] text-white cursor-default">
                Days
              </button>
            </div>
          </div>
          <DaysChart />
        </div>
        {/* week & month & year graph */}
        <div className="bg-[rgba(var(--secondary-color-rgb),1)] w-[100%] lg:w-[40%] rounded-[6px] p-10 max-h-[35rem]">
          <div className="flex justify-between px-2">
            <div className="text-[rgba(var(--text-color-rgb),1)]">
              <h5 className="uppercase opacity-50 text-xs">performance</h5>
              <h3>Trade totals</h3>
            </div>
            <div className="flex gap-3">
              <button
                className={`h-full px-8 ${
                  activeGraph === "MonthsGraph"
                    ? "bg-[rgba(var(--primary-color-rgb),1)] cursor-default text-white"
                    : "bg-[rgba(var(--base-background-rgb),1)] hover:shadow-[0_20px_80px_-10px_rgba(var(--base-background-rgb),1)] hover:translate-y-[-2px]"
                } rounded-[6px] text-[rgba(var(--primary-color-rgb),1)]`}
                onClick={() => activateMonth()}
              >
                Months
              </button>
              <button
                className={`h-full px-8 ${
                  activeGraph === "YearsGraph"
                    ? "bg-[rgba(var(--primary-color-rgb),1)] cursor-default text-white"
                    : "bg-[rgba(var(--base-background-rgb),1)] hover:shadow-[0_20px_80px_-10px_rgba(var(--base-background-rgb),1)] hover:translate-y-[-2px]"
                } rounded-[6px] text-[rgba(var(--primary-color-rgb),1)]`}
                onClick={() => activateYear()}
              >
                Years
              </button>
            </div>
          </div>
          <CustomChart
            chartData={activeGraph === "MonthsGraph" ? monthsData : yearsData}
          />
        </div>
      </div>
    </section>
  );
};

export default GraphsSection;
