import { Component, OnInit } from '@angular/core';
import { errorCodesData } from 'assets/mocks/errorCodes';

@Component({
  selector: 'app-pa-dashboard',
  templateUrl: './pa-dashboard.component.html',
  styleUrls: ['./pa-dashboard.component.css']
})
export class PADashboardComponent implements OnInit {
  boxPlotDataSource: {};
  paretoDataSource: {};
  paretoTable: {};
  lineDataSource: {};
  qualityPieChart: {};

  constructor() {}

  ngOnInit(): void {
    this.paretoTable = {
      rows: errorCodesData.errorCodes,
      headers: ['ID', 'Error', 'Number of occurrences', 'Feature']
    };
  }
}
