import { Component, OnInit } from "@angular/core";
import { boxPlot } from "./charts/box-plot";
import { paretoChart } from "./charts/pareto";
import { lineChart } from "./charts/line";
import { FormControl } from "@angular/forms";
import { qualityPieChartMapper } from "./charts/mappers/quality-pie.mapper";
import {
  qualityPieData,
  QualityPieChart
} from "../../assets/mocks/quality-pie";
import { issuesPerProduct } from "../../assets/mocks/issues-per-product";
import { issuesPerProductMapper } from "./charts/mappers/issues-per-product.mapper";

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
    this.lineDataSource = lineChart;
    this.qualityPieTable = {
      rows: qualityPieData.qualityPie,
      headers: ["ID", "Product", "Quality"]
    };

    this.qualityPieChart = qualityPieChartMapper(this.qualityPieTable.rows);
  }
}
