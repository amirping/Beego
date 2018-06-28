import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LandingPage } from "../pages/landing/landing";
import {ProfilPage} from '../pages/profil/profil'
import { TabsPage } from "../pages/tabs/tabs";
import { UserProvider } from '../providers/user/user';


@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage:any ;
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
            this.rootPage =TabsPage;
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
