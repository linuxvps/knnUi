import {Routes} from '@angular/router';
import {CardComponent} from "./component/card/card.component";
import {ContactUsComponent} from "./component/contact-us/contact-us.component";
import {SigninComponent} from "./component/signin/signin.component";
import {SignupComponent} from "./component/signup/signup.component";
import {PredictionViewComponent} from "./component/prediction-view/prediction-view.component";


export const routes: Routes = [
  {path: 'card', component: CardComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: 'sign-up', component: SignupComponent},
  {path: 'sign-in', component: SigninComponent},
  {path: '', component: PredictionViewComponent}
];
