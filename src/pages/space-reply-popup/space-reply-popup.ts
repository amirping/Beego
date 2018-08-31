import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the SpaceReplyPopupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-reply-popup',
  templateUrl: 'space-reply-popup.html',
})
export class SpaceReplyPopupPage {
  name;
  lastName;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController, private viewCtrl: ViewController) {
      this.name=navParams.get('name');
      this.lastName=navParams.get('lastName');
      console.log(this.name )
  }
  submit(){
    this.viewCtrl.dismiss();
    //just for test
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceReplyPopupPage');
  }

}
