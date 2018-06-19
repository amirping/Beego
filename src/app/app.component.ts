

import{ProfilPage} from '../pages/profil/profil';
import{ListOfFollowsPage} from '../pages/list-of-follows/list-of-follows'

import { ParametreDuComptePage } from '../pages/parametre-du-compte/parametre-du-compte';


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
  rootPage:any;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public userProvider: UserProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    const sub = this.userProvider.isConnect().subscribe(state=>{
      console.log(state);
      if(state){
        if(state.emailVerified){
          console.log("set user");
          this.userProvider.setUser().then(()=>{
            this.rootPage = HomePage;
          }).catch(e=>{
            if(e.userIsNotSet){
              this.rootPage = LandingPage;
              this.userProvider.logOut()
            }
          });
        }else{
          this.rootPage = LandingPage;
          this.userProvider.logOut();
       }
      }else{
        console.log("disconect");
        this.rootPage = LandingPage;
      }
      sub.unsubscribe();
    });
  }
}
