import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {} from '../profil/profil';

/**
 * Generated class for the ParametreDuComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parametre-du-compte',
  templateUrl: 'parametre-du-compte.html',
})
export class ParametreDuComptePage {
  back(){
    this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParametreDuComptePage');
  }

}
