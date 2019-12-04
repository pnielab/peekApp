import { Component, OnInit } from '@angular/core';
import {boxPlot} from './charts/box-plot';
import { paretoChart } from './charts/pareto';
import { lineChart } from './charts/line'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  boxPlotDataSource: Object;
  paretoDataSource: Object;
  lineDataSource: Object;
  
  constructor() {
    this.boxPlotDataSource = boxPlot;
    this.paretoDataSource = paretoChart;
    this.lineDataSource = lineChart;
  } 
}
