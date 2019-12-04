export function issuesPerProductMapper(issuesPerProduct) {
  return {
    chart: {
      xaxisname: "Product",
      yaxisname: "Number of occurensess",
      theme: "fusion",
      plottooltext: "$label reported <b>$datavalue</b> issues",

      plotSpacePercent: 0,
      stack100percent: 1
    },
    data: issuesPerProduct.issuesPerProduct.map(issue => {
      return {
        label: issue.product,
        value: issue.sumOfIssues
      };
    })
  };
}
