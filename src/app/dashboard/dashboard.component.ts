import { Component, OnInit } from "@angular/core";
import { boxPlot } from "./charts/box-plot";
import { FormControl } from "@angular/forms";
import { qualityPieChartMapper } from "./charts/mappers/quality-pie.mapper";
import {
  qualityPieData,
  QualityPieChart
} from "../../assets/mocks/quality-pie";
import { numberOfIssuesData } from "assets/mocks/number-of-Issues";
import { numberOfIssuesMapper } from "./charts/mappers/number-of-issues.mapper";
import { issuesPerProductMapper } from "./charts/mappers/issues-per-product.mapper";
import { issuesPerProduct } from "assets/mocks/issues-per-product";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  boxPlotDataSource: {};
  paretoDataSource: {};
  lineDataSource: {};
  qualityPieChart: {};
  fileInputFormControl: FormControl;
  qualityPieTable: { rows: QualityPieChart[]; headers: string[] };

  constructor() {
    this.fileInputFormControl = new FormControl();
    this.boxPlotDataSource = boxPlot;
    this.paretoDataSource = issuesPerProductMapper(issuesPerProduct);
    this.qualityPieTable = {
      rows: qualityPieData.qualityPie,
      headers: ["ID", "Product", "Quality"]
    };
    this.qualityPieChart = qualityPieChartMapper(qualityPieData.qualityPie);

    this.lineDataSource = numberOfIssuesMapper(
      numberOfIssuesData.numberOfIssues
    );
  }
}
