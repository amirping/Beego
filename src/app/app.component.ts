import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import{ProfilPage} from '../pages/profil/profil';
import{ListOfFollowsPage} from '../pages/list-of-follows/list-of-follows'
import { LandingPage } from '../pages/landing/landing';
import { ParametreDuComptePage } from '../pages/parametre-du-compte/parametre-du-compte';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ProfilPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

