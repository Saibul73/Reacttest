import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement ,Legend,Tooltip} from "chart.js";

Chart.register(ArcElement,Legend,Tooltip);

const data = {
  labels: ["Donation", "Rent", "Miscellaneous", "Book Sale", "Uniform Sale"],
  datasets: [
    {
      label: "Income",
      data: [250, 200, 350, 200, 300],
      backgroundColor: [
        "rgba(255, 26, 104, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 26, 104, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const DonutChart = () => {
  return (
    <div>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display:true,  
              position: "top",
            },
            tooltip: {
              enabled: true,
            },
          },
          title: {
            display: true,
            text: "Income May 2023",
          },
          rotation: -90,
          circumference: 180,
          cutout: "60%",
          maintainAspectRatio: true,
          responsive: true,
        }}
      />
    </div>
  );
};
