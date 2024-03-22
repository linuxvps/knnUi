import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment.development";
import {Constants} from "../../constants/constants";
import {SecUser} from "../../model/SecUser.model";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http: HttpClient) {
  }

  signUpUser(secUser: SecUser) {
    return this.http.post(environment.rootUrl + Constants.SIGN_UP_USER_API_URL, secUser, {observe: 'response'});
  }
}
