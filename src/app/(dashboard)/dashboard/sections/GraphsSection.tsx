import DaysChart from "@/(dashboard)/components/dashboard/DaysChart";
import React from "react";

type Props = {};

const GraphsSection = (props: Props) => {
  const chartData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
      },
    ],
  };

  return (
    <section>
      <div className="flex gap-10">
        {/* days graph */}
        <div className="bg-[rgba(var(--text-color-rgb),1)] w-[70%] h-[30rem] rounded-[6px]">
          <DaysChart />
        </div>
        {/* week & month & year graph */}
        <div className="bg-[rgba(var(--secondary-color-rgb),1)] w-[30%] h-[30rem] rounded-[6px]"></div>
      </div>
    </section>
  );
};

export default GraphsSection;
