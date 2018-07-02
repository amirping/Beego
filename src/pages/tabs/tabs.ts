import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { HomePage } from '../home/home';
import {ChilloutPage } from '../chillout/chillout';
import {ProfilPage } from '../profil/profil';
import { UserProvider } from '../../providers/user/user';
import { App } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ChilloutPage;
  tab3Root = ProfilPage;
  tab4Root = ProfilPage;
  tab5Root = ProfilPage;
  
  connected : boolean;

  constructor(private userProvider: UserProvider,
    private appCtr: App) {
  }
  ionViewDidEnter(){
    this.connected = false;
    this.userProvider.observeStateChange(state=>{
      if(state){
        this.connected = true;
        this.userProvider.startObserveUser();
      }else{
        if(this.connected){
          this.appCtr.getRootNav().setRoot(LandingPage);
        }
      }
    })
  }
  ionViewWillLeave(){
    this.userProvider.stopObserveUser();
  }
}
