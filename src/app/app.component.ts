

import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list'; 
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { EspacesPage } from '../pages/espaces/espaces';
import { EvenementPage } from '../pages/evenement/evenement';

import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";


import { LandingPage } from "../pages/landing/landing";
import { ChilloutPage } from "../pages/chillout/chillout";

import { HomePage } from '../pages/home/home';
import { UserProvider } from '../providers/user/user';


@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage:any = AcceuilPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
