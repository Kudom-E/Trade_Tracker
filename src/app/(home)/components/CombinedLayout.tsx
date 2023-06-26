"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SidebarButton from "./SidebarButton";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const CombinedLayout = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <div
      className={`z-0 font-serif h-screen ${
        pathname === "/" ? "flex flex-col" : ""
      }`}
    >
      <SidebarButton />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default CombinedLayout;
