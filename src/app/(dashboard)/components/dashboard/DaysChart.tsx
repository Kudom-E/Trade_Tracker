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
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      // fill: false,
      lineTension: 0.5,
      borderColor: "rgba(122, 72, 213,1)",
      borderWidth: 5,

      data: [65, 59, 80, 81, 56],
    },
  ],
  plugins: {
    legend: {
      display: false,
    },
  },
};

const DaysChart = () => {
  return (
    <section className="h-full">
      <div className="pt-8 h-full">
        <Line
          data={state}
          options={{
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
                  color: "rgba(252, 247, 253, .5)",
                },
                // beginAtZero: true,
                // max: 90,
                ticks: {
                  stepSize: 3,
                  padding: 10,
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
