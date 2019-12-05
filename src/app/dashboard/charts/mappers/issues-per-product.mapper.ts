export function issuesPerProductMapper(issuesPerProduct) {
  return {
    chart: {
      xaxisname: "Product",
      yaxisname: "Number of occurensess",
      theme: "fusion",
      plottooltext: "$label reported <b>$datavalue</b> issues",
      plotSpacePercent: 0,
      stack100Percent: 1,
      decimals: 1,
      showPercentInTooltip: 0,
      showValues: 1,
      showPercentValues: 0
    },
    data: issuesPerProduct.issuesPerProduct.map(issue => {
      return {
        label: issue.product,
        value: issue.sumOfIssues,
        color: "#28a745"
      };
    })
  };
}
