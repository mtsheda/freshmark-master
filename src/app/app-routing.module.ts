import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { CommunicationComponent } from './communication/communication.component';
import { MesssageSenderComponent } from './messsage-sender/messsage-sender.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { LoginComponent } from './login/login.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path:"",pathMatch:"full",component:AppComponent
  },
  {
    path:"create",component:CreateAccountComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"login/passwordRecovery",component:RecoverPasswordComponent
  },
  {
    path:"create/termsAndConditions",component:TermsAndConditionsComponent
  },
  {
    path: "mainMenu", component: MainMenuComponent
  },

  {
    path: "communication", component: CommunicationComponent
  },
  {

    path:"message", component: MesssageSenderComponent
  },

{
  path:"profile", component: ProfileComponent
},
{
  path:"userDetails", component: UserDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
