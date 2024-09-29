import {Component, OnInit} from '@angular/core';
import {CashPrediction, PredictionService} from '../../service/prediction/prediction.service';
import {catchError} from 'rxjs';

@Component({
  selector: 'app-prediction-view',
  templateUrl: './prediction-view.component.html',
  standalone: true,
  styleUrls: ['./prediction-view.component.css']
})
export class PredictionViewComponent implements OnInit {
  predictions: CashPrediction[] = [];
  plotImage: string = ''; // Define plotImage as a string to store the Base64 image

  constructor(private predictionService: PredictionService) {
  }

  ngOnInit(): void {
    this.predictionService.getPredictions().pipe(
      catchError(error => {
        this.handleError(error);
        throw error;
      })
    ).subscribe(
      (response: any) => {
        this.handleResponse(response);
      }
    );
  }

  private handleResponse(response: any): void {
    console.log('response  predictionService')
    console.log(response);
    debugger
    this.predictions = response.predictions;
    this.plotImage = response.plotImage;
  }

  private handleError(error: any): void {
    console.log('error in predictionService')
    console.log(error);
  }
}
