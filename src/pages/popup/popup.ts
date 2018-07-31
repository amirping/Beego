import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popup',
  templateUrl: 'popup.html',
})
export class PopupPage {
  friend:any;
  constructor(public navCtrl: NavController,
    private viewCtrl : ViewController,
     public navParams: NavParams) {
       this.friend = this.navParams.get('friend');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopupPage');
  }
  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

}
