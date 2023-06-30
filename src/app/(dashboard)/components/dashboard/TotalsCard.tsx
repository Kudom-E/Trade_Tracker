import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";
import { Totals } from "@/../../typings";

type Props = {
  total: string;
  time: string;
  percentage: string;
  icon: string;
};

const TotalsCard = ({ time, total, percentage, icon }: Props) => {
  return (
    <div className="min-w-[20rem]">
      <div className="py-5 px-8 bg-[rgba(var(--secondary-color-rgb),1)] rounded-[6px]">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="text-[rgba(var(--text-color-rgb),.5)] uppercase">
              Totals{" "}
              <strong className="text-[rgba(var(--text-color-rgb),1)]">
                ( {time} )
              </strong>
            </h5>
            <p className="text-[rgba(var(--primary-color-rgb),1)] py-2 text-2xl">
              {total}
            </p>
          </div>
          <div
            className={`rounded-full p-5 aspect-square ${
              icon === "increase"
                ? "bg-green-500"
                : icon === "decrease"
                ? "bg-red-500"
                : "bg-[rgba(var(--primary-color-rgb),1)]"
            }`}
          >
            {icon === "increase" ? (
              <BsGraphUpArrow />
            ) : icon === "decrease" ? (
              <BsGraphDownArrow />
            ) : (
              <BsDashLg />
            )}
          </div>
        </div>
        <div className="pt-5">
          <p className="text-light text-[rgba(var(--text-color-rgb),.5)]">
            <strong
              className={`${
                icon === "increase"
                  ? "text-green-500"
                  : icon === "decrease"
                  ? "text-red-500"
                  : "text-[rgba(var(--primary-color-rgb),1)]"
              }`}
            >
              {percentage}
            </strong>{" "}
            Since {time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalsCard;
