import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';

import { AuthComponent } from './auth/auth.component';
import { AuthSigninComponent } from './auth/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AuthForgotPasswordComponent } from './auth/auth-forgot-password/auth-forgot-password.component';

import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    SettingsComponent,
    AuthComponent,
    AuthSigninComponent,
    AuthSignupComponent,
    AuthForgotPasswordComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
