import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { BarChartOptions, FormOption } from '../chart.model';

@Injectable({
  providedIn: 'root',
})
export class ApiRequestService {
  constructor(private http: HttpClient) {}

  fetchChartData(type: string) {
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
  }

  fetchFormData() {
    const path = `./assets/form.json`;
    return this.http.get<FormOption>(path).pipe(
      retry(1),
      catchError((err) => {
        return throwError(err);
      }),
      map((chartData) => {
        return chartData;
      })
    );
  }
}
