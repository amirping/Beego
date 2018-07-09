import { Component, ViewChild } from '@angular/core';

// import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {ChilloutPage } from '../chillout/chillout';
import {ProfilPage } from '../profil/profil';
import { UserProvider } from '../../providers/user/user';
import { Tabs, NavController, AlertController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: "tabs.html"
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ProfilPage;
  tab3Root = HomePage;
  tab4Root = ProfilPage;
  tab5Root = ProfilPage;
  connected : boolean;
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
  ionViewDidEnter(){
    console.log("eeeeeeeeeeeeeeeeeeeeeeeeeeeeee88888888888888");
    this.userProvider.setTabsCtrl((connect,firstLoad=false)=>{
      if(!firstLoad){
        if(!connect){
          console.log("prevent to enter");
          this.alertCtrl.create({
            title:'connect',
            message:'login or register ',
            buttons:[{
              text:'login',
              handler:()=>{
                this.navCtrl.setRoot(LoginPage)
              }
            },{
              text:'cancel'
            }]
          }).present();
          setTimeout(() => {
            this.tabRef.select(0)
          }, 0);
        }
      }else{
        if(connect){
          this.userProvider.startObserveUser();

        }
      }
    });
  }
  ionViewWillLeave() {
    this.userProvider.stopObserveUser();
    this.userProvider.removeTabsCtrl();
  }
}
