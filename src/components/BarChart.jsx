import React from "react";
import { Chart } from "react-google-charts";
// import data from '../assets/data.json'

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["2014", 1000, 400, 200],
  ["2015", 1170, 460, 250],
  ["2016", 660, 1120, 300],
  ["2017", 1030, 540, 350],
];

export const options = {
  chart: {
    title: "Fees Collection & Expenses For May 2023",
    // subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
};

export function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="120%"
      height="400px"
      data={data}
      options={options}
    />
  );
}