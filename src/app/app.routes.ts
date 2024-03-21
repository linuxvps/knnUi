import {Routes} from '@angular/router';
import {CardComponent} from "./component/card/card.component";
import {ContactUsComponent} from "./component/contact-us/contact-us.component";
import {SigninComponent} from "./component/signin/signin.component";

export const routes: Routes = [
  {path: 'card', component: CardComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'sign-in', component: SigninComponent}
];
