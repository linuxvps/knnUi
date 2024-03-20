import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent implements OnInit{
    ngOnInit(): void {
        console.log('there it is')
    }

}
