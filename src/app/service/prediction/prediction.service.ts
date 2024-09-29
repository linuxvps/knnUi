import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment.development";
import {Constants} from "../../constants/constants";

export interface CashPrediction {
  actualCash: number;
  predictedCash: number;
}

@Injectable({
  providedIn: 'root'
})
export class PredictionService {


  constructor(private http: HttpClient) {}

  getPredictions() {
    return this.http.get(
      environment.rootUrl + Constants.PREDICTIONS_API_URL, {observe: 'response'}
    )
  }
}
