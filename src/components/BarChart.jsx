import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Date", "Collection", "Expenses"],
  ["01", 1000, 500],
  ["02", 1500, 700],
  ["03", 800, 400],
  ["04", 1200, 600],
  ["05", 2000, 900],
  ["06", 1800, 850],
  ["07", 900, 300],
  ["08", 1300, 600],
  ["09", 1700, 800],
  ["10", 1900, 1000],
  ["11", 1700, 1200],
  ["12", 1000, 500],
  ["13", 1500, 700],
  ["14", 800, 400],
  ["15", 1200, 600],
  ["16", 1900, 900],
  ["17", 1800, 850],
  ["18", 900, 300],
  ["19", 1300, 600],
  ["20", 1700, 800],
  ["21", 1900, 1000],
  ["22", 1100, 1200],
  ["23", 1000, 500],
  ["24", 1500, 700],
  ["25", 800, 400],
  ["26", 1200, 600],
  ["27", 2000, 900],
  ["28", 1800, 850],
  ["29", 900, 300],
  ["30", 1300, 600]
]


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