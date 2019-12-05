export function issuesPerProductMapper(issuesPerProduct) {
  let totalSumOfIssues = 0;
  issuesPerProduct.issuesPerProduct.forEach(issues => {
    totalSumOfIssues += +issues.sumOfIssues;
  });
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
      showPercentValues: 0,
      numberSuffix: "%"
    },
    data: issuesPerProduct.issuesPerProduct.map(issue => {
      return {
        label: issue.product,
        value: (issue.sumOfIssues / totalSumOfIssues) * 100,
        color: "#28a745"
      };
    })
  };
}
