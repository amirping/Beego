import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PdcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pdc',
  templateUrl: 'pdc.html',
})
export class PdcPage {
  descriptionVar=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  showDescription(){
    this.descriptionVar=!this.descriptionVar;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PdcPage');
  }

}
