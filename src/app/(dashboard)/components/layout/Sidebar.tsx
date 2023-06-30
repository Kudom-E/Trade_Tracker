import React from "react";
import Logo from "@/(home)/components/Logo";
import Link from "next/link";

// type Props = {};

const Sidebar = () => {
  return (
    <div className="h-screen bg-[rgba(var(--secondary-color-rgb),1)] w-[15%] min-w-[15rem] absolute  left-0 z-[99] md:relative">
      <div className="p-5">
        <Link href="/" className="w-[8vw] mx-auto block">
          <Logo />
        </Link>
      </div>
      <div>
        <ul>
          <li>links</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
