import {Component, OnInit} from '@angular/core';
import {ContactusService} from "../../service/contactus/contactus.service";

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit {


  constructor(private contactUs: ContactusService) {
  }

  ngOnInit(): void {
    console.log('there it is')
    this.contactUs.getContactUs().subscribe(value => {
      var response: any = value.body;
      console.log(response)
    })
  }

}
