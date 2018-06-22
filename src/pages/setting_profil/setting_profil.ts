import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {} from '../profil/profil';
import { ListOfFollowsPage } from '../list-of-follows/list-of-follows';
import {BlockPage} from '../block/block'

/**
 * Generated class for the ParametreDuComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting_profil',
  templateUrl: 'setting_profil.html',
})
export class SettingProfilPage {
  back(){
    this.navCtrl.pop();
  }
  follows(){
    this.navCtrl.push(ListOfFollowsPage);
  }

  blockList(){
    this.navCtrl.push(BlockPage);
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Setting_profil');
  }

}
