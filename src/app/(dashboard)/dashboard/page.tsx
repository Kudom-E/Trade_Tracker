import React from "react";
import GraphsSection from "./sections/GraphsSection";
import TablesSection from "./sections/TablesSection";
import TotalsSection from "./sections/TotalsSection";

// type Props = {}

const Dashboard = () => {
  return (
    <section data-testid="dashboard">
      <>
        <TotalsSection />
      </>
      <>
        <GraphsSection />
      </>
      <>
        <TablesSection />
      </>
    </section>
  );
};

export default Dashboard;
