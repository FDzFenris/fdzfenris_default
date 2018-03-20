import {Component} from "@angular/core";
import {NavController, PopoverController} from "ionic-angular";
import {TripsPage} from "../trips/trips";
/* 
import {NotificationsPage} from "../notifications/notifications";
import {SettingsPage} from "../settings/settings";

import {SearchLocationPage} from "../search-location/search-location"; */


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  // search condition
  public search = {
    name: "FDzFenris",
    date: new Date().toISOString()
  }

  constructor(public nav: NavController, public popoverCtrl: PopoverController) {
  }

  ionViewWillEnter() {
  
  }

  // go to result page
  doSearch() {
   this.nav.push(TripsPage);
  }

  // choose place
  choosePlace(from) {
  /*   this.nav.push(SearchLocationPage, from); */
  }

  // to go account page
  goToAccount() {
   /*  this.nav.push(SettingsPage); */
  }

  presentNotifications(myEvent) {
    console.log(myEvent);
 /*    let popover = this.popoverCtrl.create(NotificationsPage);
    popover.present({
      ev: myEvent
    }); */
  }

}

//
