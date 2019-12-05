import { NumberOfIssues } from "assets/mocks/number-of-Issues";

export function numberOfIssuesMapper(numberOfIssuesData: NumberOfIssues[]) {
  const startDate = new Date(numberOfIssuesData[0].date).toDateString();
  const endDate = new Date(
    numberOfIssuesData[numberOfIssuesData.length - 1].date
  ).toDateString();
  return {
    chart: {
      caption: `issues of all product from ${startDate} to ${endDate}`,
      yaxisname: "Number of issues",
      theme: "fusion"
    },
    data: numberOfIssuesData.map(issue => {
      return {
        label: new Date(issue.date).toDateString(),
        value: issue.issueNumber
      };
    })
  };
}
