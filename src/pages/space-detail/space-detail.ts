import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpaceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-detail',
  templateUrl: 'space-detail.html',
})
export class SpaceDetailPage {
  dualValue2 = 30;
  notes = [
    {
      value:40,
      index:5
    },
    {
      value:25,
      index:4
    },
    {
      value:2,
      index:3
    },
    {
      value:10,
      index:2
    },
    {
      value:15,
      index:1
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailPage');
  }

}
