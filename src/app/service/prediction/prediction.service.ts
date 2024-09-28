import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CashPrediction {
  actualCash: number;
  predictedCash: number;
}

@Injectable({
  providedIn: 'root'
})
export class PredictionService {
  private apiUrl = 'http://localhost:6666/api/predictions'; // Adjust if necessary

  constructor(private http: HttpClient) {}

  getPredictions(): Observable<{ predictions: CashPrediction[], plotImage: string }> {
    return this.http.get<{ predictions: CashPrediction[], plotImage: string }>(this.apiUrl);
  }
}
