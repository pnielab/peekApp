import { issuesPerProduct } from 'assets/mocks/issuesPerProduct';
import { baseChart } from '../base-chart';

export function issuesPerProductMapper(issuesPerProduct) {
    const boxPlotDataSource = baseChart;
    boxPlotDataSource.chart.caption = 'Issues Per Product';
    boxPlotDataSource.chart.xaxisname = 'Product';
    boxPlotDataSource.chart.yaxisname = 'Number of occurensess';
    boxPlotDataSource.chart.theme = 'fusion';
    boxPlotDataSource.chart.plottooltext = '$label reported <b>$datavalue</b> issues';
    boxPlotDataSource.data = issuesPerProduct.issuesPerProduct.map(issue => {
        return {
            label: issue.product,
            value: issue.sumOfIssues
        }});
    
        return boxPlotDataSource;
}
