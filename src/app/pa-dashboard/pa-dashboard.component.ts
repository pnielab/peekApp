import { Component, OnInit } from '@angular/core';
import { errorCodesData } from 'assets/mocks/errorCodes';
import { MatDialog } from '@angular/material';
import { PAErrorDialogComponent } from './pa-error-dialog/pa-error-dialog.component';

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

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.paretoTable = {
      rows: errorCodesData.errorCodes,
      headers: ['ID', 'Error', 'Number of occurrences', 'Feature']
    };
  }

  public errorEventClick(data) {
    console.log('inside error event');
     console.log(data);
    this.dialog.open(PAErrorDialogComponent, {
      data,
      height: '400px',
      width: '600px',
    });
  }
}
