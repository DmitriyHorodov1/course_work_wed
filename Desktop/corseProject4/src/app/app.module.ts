import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { TechniqueComponent } from './technique/technique.component';
import { AddPostModule } from './add-post';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { EditComponent } from './edit/edit.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import{AuthService} from "./shared/services/auth-service";
import {AuthGuard} from "./shared/guard/auth.guard";
import { ComentsComponent } from './coments/coments.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },


 // {path: '', component: HomepageComponent },
  { path: 'game', component: GameComponent},
  { path: 'technique', component: TechniqueComponent , canActivate: [AuthGuard]},
   {path: 'edit', component: EditComponent}

];

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdsuWvfU5nIvEyPFkWuYZIgxh_Gb_ADH8",
  authDomain: "itinfo-df9d2.firebaseapp.com",
  projectId: "itinfo-df9d2",
  storageBucket: "itinfo-df9d2.appspot.com",
  messagingSenderId: "947019217657",
  appId: "1:947019217657:web:38e5895ff218a59feec028",
  measurementId: "G-9C8H8RSZ54"
};

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    TechniqueComponent,
    EditComponent,
    HomepageComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ComentsComponent




  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AddPostModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
