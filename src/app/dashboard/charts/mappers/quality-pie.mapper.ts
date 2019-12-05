import { QualityPieChart } from "assets/mocks/quality-pie";

export function qualityPieChartMapper(qualityPieCharts: QualityPieChart[]) {
  let qualityMultiplySum = 0;
  let totalSums = 0;
  qualityPieCharts.forEach(x => {
    qualityMultiplySum += x.quality * x.sum;
    totalSums += x.sum;
  });
  let weightedAverege = qualityMultiplySum / totalSums;
  return {
    chart: {
      theme: "fusion"
    },
    data: [
      {
        value: weightedAverege,
        label: "",
        color: "#28a745"
      },
      {
        value: 1 - weightedAverege,
        label: "",
        color: "#dc3545"
      }
    ]
  };
}
