"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      // fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(122, 72, 213,1)",
      borderWidth: 5,

      data: [65, 59, 80, 81, 56],
    },
  ],
};

const DaysChart = () => {
  return (
    <section>
      <div className="p-5">
        <Line
          className="w-p[100%]"
          data={state}
          options={{
            scales: {
              x: {
                type: "category",
                grid: {
                  display: false,
                  // color: "rgba(252, 247, 253, .5)", // Color of the grid lines
                },
              },
              y: {
                grid: {
                  display: false,
                  color: "rgba(20, 23, 36, .5)",
                  tickColor: "red",
                },
              },
            },
            elements: {
              point: {
                radius: 0, // Set the point radius to 0 to remove the dots
              },
            },
          }}
        />
      </div>
    </section>
  );
};

export default DaysChart;
