"use client";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const CombinedLayout = ({ children }: Props) => {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="h-full overflow-y-scroll flex-grow relative">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default CombinedLayout;
