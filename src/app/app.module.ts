import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';




import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { TripsPage } from "../pages/trips/trips";

import { TripDetailPage } from "../pages/trip-detail/trip-detail";

import { TripService } from "../services/trip-service";
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    TripsPage,
    TripDetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
   
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    LoginPage,
    RegisterPage,
    TripsPage,
    TripDetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TripService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
