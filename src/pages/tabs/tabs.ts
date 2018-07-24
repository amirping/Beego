import { Component, ViewChild } from '@angular/core';
import { Tabs, NavController, AlertController, Events } from 'ionic-angular';
import { HomePage } from '../home/home';
import {ProfilPage } from '../profil/profil';
import {ChilloutPage } from '../chillout/chillout';
import { LoginPage } from '../login/login';

import { UserProvider } from '../../providers/user/user';
import { NotifyPage } from '../notify/notify';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = ProfilPage;
  tab3Root = HomePage;
  tab4Root = NotifyPage;
  tab5Root = ProfilPage;
  connected : boolean;
  showTabs = true;
  @ViewChild(Tabs) tabs: Tabs;

  constructor(private userProvider: UserProvider,
    private alertCtrl: AlertController,
    private navCtrl: NavController,
    events: Events) {
      events.subscribe("MenuOpen", isOpen => {
        console.log("only god know how");
   
        console.log(isOpen);
        this.showTabs = !isOpen;
        const tabBarElement = document.querySelector(".tabbar.show-tabbar");
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
    console.log("did enter to tabs");
    this.userProvider.setTabsCtrl(connect=>{
      if(connect){
        this.userProvider.startObserveUser();
      }else{
        console.log("prevent to enter");
        this.alertCtrl.create({
          title:'connect',
          message:'login or register ',
          buttons:[{
            text:'login',
            handler:()=>{
              this.navCtrl.setRoot(LoginPage);
            }
          },{
            text:'cancel'
          }]
        }).present();
        setTimeout(() => {
          this.tabs.select(0)
        }, 0);

      }
    })
  }

  ionViewWillLeave() {
    this.userProvider.stopObserveUser();
    this.userProvider.removeTabsCtrl();
  }
}
