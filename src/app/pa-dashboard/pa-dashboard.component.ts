import { Component, OnInit } from "@angular/core";
import { errorCodesData } from "assets/mocks/errorCodes";
import { MatDialog } from "@angular/material";
import { PAErrorDialogComponent } from "./pa-error-dialog/pa-error-dialog.component";
import { HttpClient } from "@angular/common/http";
import { boxPlotMapper } from "app/dashboard/charts/mappers/box-plot.mapper";

@Component({
  selector: "app-pa-dashboard",
  templateUrl: "./pa-dashboard.component.html",
  styleUrls: ["./pa-dashboard.component.css"]
})
export class PADashboardComponent implements OnInit {
  paretoTable: {};
  boxPlotDataSource: {};

  constructor(private dialog: MatDialog, private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get("http://10.9.220.133:3300/v1/report/version/issues")
      .subscribe((res: any) => {
        this.boxPlotDataSource = boxPlotMapper(res.softwareIssuesByVersion);
      });

    this.http
      .get("http://10.9.8.38:3300/v1/report/feature/issues")
      .subscribe((res: any) => {
        this.paretoTable = {
          rows: res.errorCodes,
          headers: ["ID", "Error", "Number of occurrences"]
        };
      });
  }

  public errorEventClick(data) {
    this.dialog.open(PAErrorDialogComponent, {
      data,
      height: "400px",
      width: "600px"
    });
  }
}
