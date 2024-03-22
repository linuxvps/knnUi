import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {SecUser} from "../../model/SecUser.model";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    FormsModule,
    JsonPipe
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  securityUser = new SecUser(0,'','','','');


  constructor() {

  }

  onSubmit(){

  }


}
