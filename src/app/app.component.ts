import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { LandingPage } from "../pages/landing/landing";
import { TabsPage } from "../pages/tabs/tabs";

import { HomePage } from "../pages/home/home";

import { BlockPage } from "../pages/block/block";
import { SettingProfil2Page } from "../pages/setting-profil2/setting-profil2";
import { SettingSecurityPage } from "../pages/setting-security/setting-security";
import { ProfilPage } from "../pages/profil/profil";
import { PersonalHistoryPage } from "../pages/personal-history/personal-history";
import { FriendProfilPage } from "../pages/friend-profil/friend-profil";
import { FriendFollowPage } from "../pages/friend-follow/friend-follow";
import { PopupPage } from "../pages/popup/popup";
import { EventPage } from "../pages/event/event";
import { UpdateProgramPage } from "../pages/update-program/update-program";

import { UserProvider } from "../providers/user/user";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    public userProvider: UserProvider
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.userProvider.isConnect(state => {
      if (state) {
        this.rootPage = TabsPage;
      } else {
        this.rootPage = LandingPage;
      }
    });
  }
}
