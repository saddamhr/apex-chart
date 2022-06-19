import { Component, Input, OnInit } from '@angular/core';
import { BarChartOptions } from 'src/app/chart.model';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css'],
})
export class BarChartComponent {
  @Input() chartOptions!: BarChartOptions;
  constructor() {}
}
