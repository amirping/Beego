import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';

//const vibrant = require('node-vibrant');

/**
 * Generated class for the FriendProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-profil',
  templateUrl: 'friend-profil.html',
})
export class FriendProfilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  folowsPage(){
    this.navCtrl.push(ProfilPage);
  }
  
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendProfilPage');
  }

}
