import { Component, OnInit } from '@angular/core';
import { PredictionService, CashPrediction } from '../../service/prediction/prediction.service';

@Component({
  selector: 'app-prediction-view',
  templateUrl: './prediction-view.component.html',
  styleUrls: ['./prediction-view.component.css']
})
export class PredictionViewComponent implements OnInit {
  predictions: CashPrediction[] = [];
  plotImage: string = ''; // Define plotImage as a string to store the Base64 image

  constructor(private predictionService: PredictionService) {}

  ngOnInit(): void {
    this.loadPredictions();
  }

  loadPredictions(): void {
    this.predictionService.getPredictions().subscribe(
      (response: any) => {
        // Assuming the response has both the predictions and the plotImage as a Base64 string
        this.predictions = response.predictions;
        this.plotImage = response.plotImage; // Directly assign the Base64 image string
      },
      (error: any) => {
        console.error('Error fetching predictions:', error);
      }
    );
  }
}
