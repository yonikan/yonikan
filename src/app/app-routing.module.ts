import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthComponent } from './auth/auth.component';
import { AuthSigninComponent } from './auth/auth-signin/auth-signin.component';
import { AuthSignupComponent } from './auth/auth-signup/auth-signup.component';
import { AuthForgotPasswordComponent } from './auth/auth-forgot-password/auth-forgot-password.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'profile', component: ProfileComponent },
  // { path: 'auth', component: AuthComponent, children: [
  //   { path: '', component: AuthSignupComponent },
  //   { path: 'signup', component: AuthSignupComponent },
  //   { path: 'forgot-password', component: AuthForgotPasswordComponent }
  // ] }
  { path: 'auth', component: AuthSigninComponent },
  { path: 'signin', component: AuthSigninComponent },
  { path: 'signup', component: AuthSignupComponent },
  { path: 'forgot-password', component: AuthForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
