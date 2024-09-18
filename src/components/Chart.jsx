import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { olympicsData } from "../data/olympicsData";

const chartSetting = {
  yAxis: [
    {
      label: "Medals",
    },
  ],
  width: 600,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};

export default function BarsDataset() {
  return (
    <BarChart
      dataset={olympicsData}
      xAxis={[{ scaleType: "band", dataKey: "year" }]}
      series={[
        { dataKey: "gold", label: "Gold", color: "#FFD700" }, // Gold color
        { dataKey: "silver", label: "Silver", color: "#C0C0C0" }, // Silver color
        { dataKey: "bronze", label: "Bronze", color: "#CD7F32" }, // Bronze color
      ]}
      {...chartSetting}
    />
  );
}
