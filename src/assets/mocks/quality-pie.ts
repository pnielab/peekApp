export const qualityPieData = {
  qualityPie: [
    {
      productName: "PA",
      quality: 0.8,
      sum: 200
    },
    {
      productName: "UFED_4PC",
      quality: 0.8,
      sum: 800
    }
  ] as QualityPieChart[]
};

export interface QualityPieChart {
  productName: string;
  quality: number;
  sum: number;
}
