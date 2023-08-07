import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CommunicationComponent } from './communication/communication.component';
import { ComMainComponent } from './com-main/com-main.component';
import { MesssageSenderComponent } from './messsage-sender/messsage-sender.component';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainMenuComponent,
    FooterComponent,
    MainComponent,
    CommunicationComponent,
    ComMainComponent,
    MesssageSenderComponent,
    LoginComponent,
    CreateAccountComponent,
    RecoverPasswordComponent,
    TermsAndConditionsComponent,
    ProfileComponent,
    UserDetailsComponent,
    HeaderComponent,
    MainContentComponent

  ], 
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
