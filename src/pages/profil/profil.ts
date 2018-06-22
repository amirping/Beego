import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListOfFollowsPage} from '../list-of-follows/list-of-follows'
import { SettingProfilPage } from '../setting_profil/setting_profil';

/**
 * Generated class for the PrfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  folowsPage(){
    this.navCtrl.push(ListOfFollowsPage);
  }
  paramPage(){
    this.navCtrl.push(SettingProfilPage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrfilPage');
  }

}
