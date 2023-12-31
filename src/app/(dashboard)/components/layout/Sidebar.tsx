import React from "react";
import Logo from "@/(home)/components/Logo";
import Link from "next/link";
import { RiComputerLine, RiTableLine, RiUserLine } from "react-icons/ri";
import { IoExitOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

// type Props = {};

const Sidebar = () => {
  const pathname = usePathname();

  const tabs = [
    {
      pathname: "Dashboard",
      path: "/dashboard",
      icon: <RiComputerLine />,
    },
    {
      pathname: "Tables",
      path: "/tables",
      icon: <RiTableLine />,
    },
    {
      pathname: "Profile",
      path: "/profile",
      icon: <RiUserLine />,
    },
  ];

  return (
    <div className="h-screen bg-[rgba(var(--secondary-color-rgb),1)] w-[15%] min-w-[15rem] absolute left-0 z-[99] md:relative">
      <div className="p-5">
        <Link href="/" className="w-[8vw] mx-auto block">
          <Logo />
        </Link>
      </div>
      <div className="pt-10">
        <ul className="flex flex-col justify-between">
          {tabs.map((tab, index) => {
            return (
              <li key={index} className="mb-4">
                <Link
                  className={`flex items-center gap-5 px-5 py-3 hover:text-[rgba(var(--accent-color-rgb))] ${
                    pathname === tab.path ? "active-link" : ""
                  }`}
                  href={tab.path}
                >
                  {tab.icon}
                  <p>{tab.pathname}</p>
                </Link>
              </li>
            );
          })}

          <li className="mb-4 absolute left-0 bottom-0 right-0">
            <Link
              className={`flex items-center gap-5 px-5 py-3 hover:text-red-500 ${
                pathname === "/login" ? "active-link" : ""
              }`}
              href="/login"
            >
              <IoExitOutline />
              <p>Log Out</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
