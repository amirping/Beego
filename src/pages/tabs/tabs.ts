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
              this.navCtrl.setRoot(LoginPage)
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
  }
}
