import { baseChart } from '../base-chart';

export function issuesPerProductMapper(issuesPerProduct) {
    const paretoDataSource = baseChart;
    paretoDataSource.chart.caption = 'Issues Per Product';
    paretoDataSource.chart.xaxisname = 'Product';
    paretoDataSource.chart.yaxisname = 'Number of occurensess';
    paretoDataSource.chart.theme = 'fusion';
    paretoDataSource.chart.plottooltext = '$label reported <b>$datavalue</b> issues';
    paretoDataSource.data = issuesPerProduct.issuesPerProduct.map(issue => {
        return {
            label: issue.product,
            value: issue.sumOfIssues
        }});
    
        return paretoDataSource;
}
