import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController } from 'ionic-angular';
//import { EmojiEvent } from '@ionic-tools/emoji-picker/src';
import { SpaceDetailFeedback2Page } from '../space-detail-feedback2/space-detail-feedback2';

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
  rating =3 ;
  // ratingg;
 
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private modalCtrl : ModalController , private viewCtrl:ViewController) {
  }
 
  goToFeefback2(){
    const modal2= this.modalCtrl.create(SpaceDetailFeedback2Page, {ratingg:this.rating}, );
    modal2.present();
    this.viewCtrl.dismiss();
    // console.log(this.rating);
    modal2.onDidDismiss(()=>{
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailFeedback1Page');
  }

}
