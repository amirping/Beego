import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController,Events   } from 'ionic-angular';
import { SpaceDetailFeedback1Page } from '../space-detail-feedback1/space-detail-feedback1';
import { SpaceDetailFeedback2Page } from '../space-detail-feedback2/space-detail-feedback2';

/**
 * Generated class for the SpaceDetailFeedback3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-detail-feedback3',
  templateUrl: 'space-detail-feedback3.html',
})
export class SpaceDetailFeedback3Page {
  disabled ;
  otherOpen = false 
  r;
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private modalCtrl : ModalController , private viewCtrl:ViewController
    ,private events: Events) {
      this.r=navParams.get('ratingg');
  }
  opinionDone(){
    this.events.publish('dropblur',false);
    this.viewCtrl.dismiss();
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailFeedback3Page');
  }

}
