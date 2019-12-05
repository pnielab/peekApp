import { Component, OnInit, NgZone } from "@angular/core";
import { boxPlot } from "./charts/box-plot";
import { FormControl } from "@angular/forms";
import { qualityPieChartMapper } from "./charts/mappers/quality-pie.mapper";
import {
  qualityPieData,
  QualityPieChart
} from "../../assets/mocks/quality-pie";
import { numberOfIssuesMapper } from "./charts/mappers/number-of-issues.mapper";
import { issuesPerProductMapper } from "./charts/mappers/issues-per-product.mapper";
import { Router } from "@angular/router";
import { DashboardService } from "./dashboard.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent {
  showParetoDataSource = true;
  showParetoTable = true;
  showQualityPieChart = true;
  showQuantityPieTable = true;
  showLineChart = true;
  boxPlotDataSource: {};
  paretoDataSource: {};
  paretoTable: {};
  lineDataSource: {};
  qualityPieChart: {};
  fileInputFormControl: FormControl;
  qualityPieTable: { rows: QualityPieChart[]; headers: string[] };

  constructor(
    private zone: NgZone,
    private router: Router,
    private dashboardService: DashboardService
  ) {
    this.dashboardService
      .getIssuesPerProduct()
      .subscribe((issuesPerProduct: any) => {
        this.paretoDataSource = issuesPerProductMapper(issuesPerProduct);
        this.paretoTable = {
          rows: issuesPerProduct.issuesPerProduct,
          headers: ["ID", "Product", "Issues"]
        };
      });
    this.dashboardService
      .getNumberOfIssues()
      .subscribe((numberOfIssues: any) => {
        this.lineDataSource = numberOfIssuesMapper(
          numberOfIssues.numberOfIssues
        );
      });
    this.fileInputFormControl = new FormControl();
    this.boxPlotDataSource = boxPlot;

    this.qualityPieTable = {
      rows: qualityPieData.qualityPie,
      headers: ["ID", "Product", "Quality"]
    };
    this.qualityPieChart = qualityPieChartMapper(qualityPieData.qualityPie);
  }

  update(event) {
    // Run inside angular context
    this.zone.run(() => {
      console.log(event);
      if (event.dataObj.categoryLabel === "PA") {
        this.router.navigateByUrl("/pa");
      }
    });
  }

  fileChangeEvent(event) {
    setTimeout(() => (this.showParetoDataSource = true), 500);
    setTimeout(() => (this.showParetoTable = true), 1500);
    setTimeout(() => (this.showQualityPieChart = true), 2500);
    setTimeout(() => (this.showQuantityPieTable = true), 3500);
    setTimeout(() => (this.showLineChart = true), 4500);
  }
}
