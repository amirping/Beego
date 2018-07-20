import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmojiEvent } from '@ionic-tools/emoji-picker/src';

/**
 * Generated class for the SpaceDetailFeedback1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-detail-feedback1',
  templateUrl: 'space-detail-feedback1.html',
})
export class SpaceDetailFeedback1Page {
  rating = 5 ;

 
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailFeedback1Page');
  }

}
