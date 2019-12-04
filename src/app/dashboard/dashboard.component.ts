import { Component, OnInit } from '@angular/core';
import {boxPlot} from './charts/box-plot';
import { paretoChart } from './charts/pareto';
import { lineChart } from './charts/line';
import { FormControl } from '@angular/forms';
import { qualityPieChartMapper}  from './charts/mappers/quality-pie.mapper';
import { qualityPieData } from '../../assets/mocks/quality-pie'
import { issuesPerProduct } from '../../assets/mocks/issuesPerProduct';
import { issuesPerProductMapper } from './charts/mappers/issuesPerProduct.mapper';
import { numberOfIssuesData } from 'assets/mocks/number-of-Issues';
import { numberOfIssuesMapper } from './charts/mappers/number-of-issues.mapper';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  boxPlotDataSource: {};
  paretoDataSource:  {};
  lineDataSource:  {};
  qualityPieChart: {};
  basicfile: FormControl;

  constructor() {
    this.basicfile = new FormControl();
    this.boxPlotDataSource = boxPlot;
    this.paretoDataSource = issuesPerProductMapper(issuesPerProduct);
    this.lineDataSource = numberOfIssuesMapper(numberOfIssuesData.numberOfIssues);
    this.qualityPieChart = qualityPieChartMapper(qualityPieData.qualityPie);
  } 
}
