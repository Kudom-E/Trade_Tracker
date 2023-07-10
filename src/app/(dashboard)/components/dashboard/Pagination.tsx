"use client";

import React from "react";

type Props = {
  pages: number[];
  activePage: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
};

const Pagination = ({ pages, activePage, setActivePage }: Props) => {
  return (
    <section>
      <div className="mx-auto">
        <div className="px-5 py-6 bg-[rgba(var(--base-background-rgb),1)]">
          <div className="flex h-8 gap-1">
            <button
              className={`inline-flex items-center justify-center w-8 text-[rgb(var(--text-color-rgb))]  rounded-l-lg ${
                activePage !== 0
                  ? "cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] hover:scale-[2]"
                  : "cursor-not-allowed"
              }`}
              onClick={() => activePage !== 0 && setActivePage(activePage - 1)}
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 4 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.6454 2.99997L3.4154 1.22997C3.50852 1.13629 3.5608 1.00957 3.5608 0.877474C3.5608 0.745381 3.50852 0.618656 3.4154 0.524974C3.36892 0.47811 3.31362 0.440913 3.25269 0.415529C3.19176 0.390144 3.12641 0.377075 3.0604 0.377075C2.99439 0.377075 2.92904 0.390144 2.86811 0.415529C2.80718 0.440913 2.75188 0.47811 2.7054 0.524974L0.585399 2.64497C0.538535 2.69146 0.501338 2.74676 0.475954 2.80769C0.450569 2.86862 0.4375 2.93397 0.4375 2.99997C0.4375 3.06598 0.450569 3.13133 0.475954 3.19226C0.501338 3.25319 0.538535 3.30849 0.585399 3.35497L2.7054 5.49997C2.75212 5.54631 2.80753 5.58298 2.86845 5.60786C2.92936 5.63274 2.9946 5.64536 3.0604 5.64497C3.1262 5.64536 3.19143 5.63274 3.25235 5.60786C3.31327 5.58298 3.36868 5.54631 3.4154 5.49997C3.50852 5.40629 3.5608 5.27957 3.5608 5.14747C3.5608 5.01538 3.50852 4.88866 3.4154 4.79497L1.6454 2.99997Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
            {pages.map((page, index) => {
              return (
                <button
                  key={index}
                  className={`inline-flex items-center justify-center w-8 text-sm ${
                    activePage === index
                      ? "text-[rgba(var(--primary-color-rgb),1)] scale-[1.25]"
                      : "text-[rgba(var(--text-color-rgb),.5)] hover:text-[rgba(var(--primary-color-rgb),.5)] hover:scale-[1.25]"
                  } font-semibold`}
                  onClick={() => setActivePage(index)}
                >
                  {page}
                </button>
              );
            })}
            <button
              className={`inline-flex items-center justify-center w-8 text-[rgb(var(--text-color-rgb))] rounded-r-lg ${
                activePage !== pages.length - 1
                  ? "cursor-pointer hover:text-[rgba(var(--primary-color-rgb),1)] hover:scale-[2]"
                  : "cursor-not-allowed"
              }`}
              onClick={() =>
                activePage < pages.length - 1 && setActivePage(activePage + 1)
              }
            >
              <svg
                width="6"
                height="10"
                viewBox="0 0 4 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.3546 3.00003L0.584601 4.77003C0.491475 4.86371 0.439205 4.99043 0.439205 5.12253C0.439205 5.25462 0.491475 5.38134 0.584601 5.47503C0.631083 5.52189 0.686383 5.55909 0.747313 5.58447C0.808242 5.60986 0.873595 5.62293 0.939601 5.62293C1.00561 5.62293 1.07096 5.60986 1.13189 5.58447C1.19282 5.55909 1.24812 5.52189 1.2946 5.47503L3.4146 3.35503C3.46146 3.30854 3.49866 3.25324 3.52405 3.19231C3.54943 3.13138 3.5625 3.06603 3.5625 3.00003C3.5625 2.93402 3.54943 2.86867 3.52405 2.80774C3.49866 2.74681 3.46146 2.69151 3.4146 2.64503L1.2946 0.500026C1.24788 0.453685 1.19247 0.417023 1.13155 0.392141C1.07063 0.367258 1.0054 0.354645 0.9396 0.355026C0.873797 0.354645 0.808566 0.367258 0.747647 0.392141C0.686728 0.417023 0.631321 0.453686 0.5846 0.500026C0.491475 0.593707 0.439204 0.720433 0.439204 0.852526C0.439204 0.984619 0.491475 1.11134 0.584601 1.20503L2.3546 3.00003Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pagination;
