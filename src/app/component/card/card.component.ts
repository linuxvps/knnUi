import {Component, inject, OnInit} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CardService} from "../../service/card.service";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

  response: any = [];


  constructor(private cardService:CardService) {
  }
  ngOnInit(): void {
    this.fetchData();
    console.log('card component')
  }

  fetchData() {
    this.cardService.getAllCards().subscribe(value => {
      this.response = value.body;
      console.log(this.response)
    })
  }

}
