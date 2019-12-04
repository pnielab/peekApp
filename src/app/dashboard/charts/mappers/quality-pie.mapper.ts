import { QualityPieChart } from "assets/mocks/quality-pie";

export function qualityPieChartMapper(qualityPieCharts: QualityPieChart[]) {
  return {
    chart: {
      caption: "Quality",
      subcaption: "Per product",
      theme: "fusion"
    },
    data: qualityPieCharts.map((x: QualityPieChart) => {
      return {
        label: x.productName,
        value: x.sum
      };
    })
  };
}
