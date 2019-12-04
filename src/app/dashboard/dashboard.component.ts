import { Component, OnInit } from '@angular/core';
import {boxPlot} from './charts/box-plot';
import { issuesPerProduct } from '../../assets/mocks/issuesPerProduct';
import { lineChart } from './charts/line'
import { FormControl } from '@angular/forms';
import { issuesPerProductMapper } from './charts/mappers/issuesPerProduct.mapper';

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
    this.paretoDataSource = issuesPerProductMapper(issuesPerProduct);
    this.lineDataSource = lineChart;
  } 
}
