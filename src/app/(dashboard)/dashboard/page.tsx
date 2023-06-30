import React from "react";
import GraphsSection from "./sections/GraphsSection";
import TotalsSection from "./sections/TotalsSection";

// type Props = {}

const Dashboard = () => {
  return (
    <section className="w-full px-10">
      {/* background */}
      <div className="h-[25rem] dashboard-background absolute z-[-1] left-0 right-0 top-0"></div>
      {/* Foreground */}
      <>
        <TotalsSection />
      </>
      <>
        <GraphsSection />
      </>
    </section>
  );
};

export default Dashboard;
