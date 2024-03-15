import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Constants} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }

  getAllCards(){
    return this.http.get(environment.rootUrl + Constants.GET_ALL_CARDS_API_URL,{observe:'response'});

  }
}
