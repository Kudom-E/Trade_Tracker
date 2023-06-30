import React from "react";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsGraphDownArrow } from "react-icons/bs";
import { BsDashLg } from "react-icons/bs";

type Props = {
  total: string;
  time: string;
  percentage: string;
  icon: string;
};

const TotalsCard = ({ time, total, percentage, icon }: Props) => {
  return (
    <div className="min-w-[100%] md:min-w-[auto] md:flex-grow md:max-w-[24rem]">
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
            data-testid="icon"
            className={`rounded-full p-5 aspect-square ${
              icon === "increase"
                ? "bg-green-500"
                : icon === "decrease"
                ? "bg-red-500"
                : "bg-[rgba(var(--primary-color-rgb),1)]"
            }`}
          >
            {icon === "increase" ? (
              <BsGraphUpArrow className="text-white" data-testid="up-icon" />
            ) : icon === "decrease" ? (
              <BsGraphDownArrow
                className="text-white"
                data-testid="down-icon"
              />
            ) : (
              <BsDashLg className="text-white" data-testid="dash-icon" />
            )}
          </div>
        </div>
        <div className="pt-5" data-testid="totals-summary">
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
