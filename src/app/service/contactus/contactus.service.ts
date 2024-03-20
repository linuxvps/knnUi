import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Constants} from "../../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http: HttpClient) {
  }

  getContactUs() {
    return this.http.get(
      environment.rootUrl + Constants.GET_CONTACT_US_API_URL, {observe: 'response'}
    )
  }

}
