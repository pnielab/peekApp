export function boxPlotMapper(boxPlotChart: any) {
  return {
    chart: {
      theme: "fusion"
    },
    categories: [
      {
        category: boxPlotChart.map(x => {
          return { label: x.version };
        })
      }
    ],
    dataset: [
      {
        seriesname: "Physical Analyzer",
        data: [
          {
            value: "8,18,5,7,3,2,19"
          },
          {
            value: "8,16,5,5,1,2,18"
          },
          {
            value: "8,12,5,1,3,2,18"
          },
          {
            value: "1,6,5,3,3,2,2"
          }
        ]
      }
    ]
  };
}
