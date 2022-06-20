import { Component } from '@angular/core';
import { BarChartOptions } from './chart.model';
import { ApiRequestService } from './services/api-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  superUserBarChartData!: BarChartOptions;

  constructor(private _apiRequestService: ApiRequestService) {
    this.getChartData('superuser');
  }

  getChartData(type: string) {
    this._apiRequestService.fetchChartData(type).subscribe(
      (data: BarChartOptions) => {
        this.superUserBarChartData = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  tabChanged(event: any) {
    if (event.index === 0) {
      this.getChartData('superuser');
    } else if (event.index === 1) {
      this.getChartData('admin');
    } else {
      this.getChartData('user');
    }
  }
}
