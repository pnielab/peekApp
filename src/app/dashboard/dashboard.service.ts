import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getIssuesPerProduct() {
    return this.http.get("http://10.9.220.133:3300/v1/report/product/issues");
  }
}
