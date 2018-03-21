import { Component,ViewChild } from '@angular/core';
import { Platform ,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs'; 
import { LoginPage } from '../pages/login/login';

import { HomePage } from "../pages/home/home";
import { TripsPage } from "../pages/trips/trips";


export interface MenuItem {
  title: string;
  component: any;
  icon: string;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  /* rootPage:any = TabsPage; */
  rootPage:any = LoginPage;

  appMenuItems: Array<MenuItem>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen)
  {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });

    this.appMenuItems = [
      {title: 'Home', component: TabsPage, icon: 'home'},
      {title: 'link2', component: TabsPage, icon: 'contacts'},
     /*  {title: 'Local Weather', component: LocalWeatherPage, icon: 'partly-sunny'} */
    ];
  }

  
  initializeApp(){

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


  logout() {
    this.nav.setRoot(LoginPage);
  }
}
