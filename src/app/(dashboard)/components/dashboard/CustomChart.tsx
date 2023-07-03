"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import { useThemeDetector } from "@/custom hooks/ThemeDetector";
import { ChartData } from "../../../../../typings";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      backgroundColor: "rgba(122, 72, 213,1)",

      data: [65, 59, 80, 81, 56],
    },
  ],
  plugins: {
    legend: {
      display: false,
    },
  },
};

type Props = {
  chartData: ChartData;
};

const CustomChart = ({ chartData }: Props) => {
  const darkTheme = useThemeDetector();

  return (
    <section className="h-full">
      <div className="pt-8 h-full">
        <Bar
          data={chartData}
          options={{
            aspectRatio: 1.28,
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                intersect: false,
              },
            },
            scales: {
              x: {
                type: "category",
                grid: {
                  display: false,
                  // color: "rgba(252, 247, 253, .5)",
                },
                border: {
                  display: false,
                },
              },
              y: {
                border: {
                  dash: [4, 4],
                  display: false,
                },
                grace: 1,
                grid: {
                  display: true,
                  drawTicks: false,
                  color:
                    darkTheme === true
                      ? "rgba(252, 252, 253, .5)"
                      : "rgb(8, 13, 37)",
                },
                // beginAtZero: true,
                // max: 90,
                ticks: {
                  stepSize: 3,
                  padding: 10,
                },
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default CustomChart;
