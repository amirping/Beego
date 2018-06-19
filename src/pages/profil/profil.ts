import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ListOfFollowsPage} from '../list-of-follows/list-of-follows'
import { ParametreDuComptePage } from '../parametre-du-compte/parametre-du-compte';

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
    this.navCtrl.push(ParametreDuComptePage);
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrfilPage');
  }

}
