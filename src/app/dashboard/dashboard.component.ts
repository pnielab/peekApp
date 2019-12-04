import { Component, OnInit } from '@angular/core';
import {boxPlot} from './charts/box-plot';
import { paretoChart } from './charts/pareto';
import { lineChart } from './charts/line';
import { FormControl } from '@angular/forms';
import { qualityPieChartMapper}  from './charts/mappers/quality-pie.mapper';
import { qualityPieData } from '../../assets/mocks/quality-pie'

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
    this.paretoDataSource = paretoChart;
    this.lineDataSource = lineChart;
    this.qualityPieChart = qualityPieChartMapper(qualityPieData.qualityPie);
  } 
}
