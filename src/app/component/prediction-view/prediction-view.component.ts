import {Component, OnInit} from '@angular/core';
import {CashPrediction, PredictionService} from '../../service/prediction/prediction.service';
import {catchError} from 'rxjs';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-prediction-view',
  templateUrl: './prediction-view.component.html',
  standalone: true,
  imports: [CommonModule],
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
    this.predictions = response.body.predictions;
    this.plotImage = response.body.plotImage;
  }

  private handleError(error: any): void {
    console.log('error in predictionService')
    console.log(error);
  }
}
