import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpaceDetailOpinionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-detail-opinions',
  templateUrl: 'space-detail-opinions.html',
})
export class SpaceDetailOpinionsPage {
  rating = 5 ;
  back(){
    this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailOpinionsPage');
  }

}
