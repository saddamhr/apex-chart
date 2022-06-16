import { Component, ViewChild } from "@angular/core";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;

  constructor() {
    this.series= [
      {
        name: "My-series",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 5]
      },

    ]
    this.chart =  {
      height: 350,
      type: "bar"
    }
    this.xaxis= {
      categories: ["Jan", "Feb",  "Mar",  "Apr",  "May",  "Jun",  "Jul",  "Aug", "Sep"]
    }

    this.title= {
      text: "My First Angular Chart"
    }
  }
}
