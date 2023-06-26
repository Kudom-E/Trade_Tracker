"use client";

import React from "react";
import Sidebar from "./Sidebar";

// type Props = {};

const SidebarButton = () => {
  return (
    <div className="md:hidden">
      <div>
        <button className="h-[3rem] aspect-square bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px] block md:hidden"></button>
      </div>
      <section>
        <Sidebar />
      </section>
    </div>
  );
};

export default SidebarButton;
