import { Component, OnInit } from '@angular/core';
import {boxPlot} from './charts/box-plot';
import { paretoChart } from './charts/pareto';
import { lineChart } from './charts/line'
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {

  boxPlotDataSource: Object;
  paretoDataSource: Object;
  lineDataSource: Object;
  basicfile: FormControl;

  constructor() {
    this.basicfile = new FormControl();
    this.boxPlotDataSource = boxPlot;
    this.paretoDataSource = paretoChart;
    this.lineDataSource = lineChart;
  } 
}
