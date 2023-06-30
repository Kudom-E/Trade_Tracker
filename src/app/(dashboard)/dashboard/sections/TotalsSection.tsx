import React from "react";
import TotalsCard from "../../components/dashboard/TotalsCard";

const totals = [
  {
    time: "yesterday",
    total: "350",
    percentage: "3.48%",
    icon: "increase",
  },
  {
    time: "last week",
    total: "897",
    percentage: "0%",
    icon: "same",
  },
  {
    time: "last month",
    total: "3,500",
    percentage: "-3.48%",
    icon: "decrease",
  },
  {
    time: "last year",
    total: "30,050,",
    percentage: "13.48%",
    icon: "increase",
  },
];

const TotalsSection = () => {
  return (
    <section>
      <div className="pb-10 flex gap-5 flex-wrap">
        {totals.map((spec, index) => {
          return (
            <TotalsCard
              time={spec.time}
              total={spec.total}
              percentage={spec.percentage}
              icon={spec.icon}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default TotalsSection;
