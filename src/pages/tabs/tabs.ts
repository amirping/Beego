import { Component, ViewChild } from "@angular/core";

// import { AboutPage } from '../about/about';
import { HomePage } from "../home/home";
import { ChilloutPage } from "../chillout/chillout";
import { ProfilPage } from "../profil/profil";
import { UserProvider } from "../../providers/user/user";
import { App, Tabs, Events } from "ionic-angular";
import { LandingPage } from "../landing/landing";

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ChilloutPage;
  tab3Root = ProfilPage;
  tab4Root = ProfilPage;
  tab5Root = ProfilPage;

  connected: boolean;
  showTabs = true;

  @ViewChild(Tabs) tabs: Tabs;

  constructor(
    private userProvider: UserProvider,
    private appCtr: App,
    events: Events
  ) {
    events.subscribe("MenuOpen", isOpen => {
      console.log("only god know how");

      console.log(isOpen);
      this.showTabs = !isOpen;
      var tabBarElement = document.querySelector(".tabbar.show-tabbar");
      if (!this.showTabs) {
        tabBarElement.classList.add("animated", "fadeOutDown");
        tabBarElement.classList.remove("fadeInUp");
      } else {
        tabBarElement.classList.remove("fadeOutDown");
        tabBarElement.classList.add("animated", "fadeInUp");
      }
      console.log(tabBarElement);
    });
  }
  ionViewDidEnter() {
    this.connected = false;
    this.userProvider.observeStateChange(state => {
      if (state) {
        this.connected = true;
        this.userProvider.startObserveUser();
      } else {
        if (this.connected) {
          this.appCtr.getRootNav().setRoot(LandingPage);
        }
      }
    });
  }
  ionViewWillLeave() {
    this.userProvider.stopObserveUser();
  }
}
