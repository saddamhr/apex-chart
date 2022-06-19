import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { BarChartOptions } from '../chart.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private http: HttpClient) {}

  fetchChartData(type:string) {
    console.log(type)
    const path = `./assets/${type}.json`;
    return this.http.get<BarChartOptions>(path).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      }),
      map((chartData) => {
        return chartData;
      })
    );

    // return this.http.get<BarChartOptions>("./../../../src/assets/superuser.json");
  }
}
