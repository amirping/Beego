import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, ViewController } from 'ionic-angular';

/**
 * Generated class for the SpaceDetailFeedback2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-detail-feedback2',
  templateUrl: 'space-detail-feedback2.html',
})
export class SpaceDetailFeedback2Page {
  r ;
   
  constructor(public navCtrl: NavController, public navParams: NavParams
  ,private modalCtrl : ModalController , private viewCtrl:ViewController) {
    this.r=navParams.get('ratingg');
    // console.log('ratingg', navParams.get('ratingg'));
    // console.log(this.r);
  }
  // goToFeefback1(){
  //   const modal1= this.modalCtrl.create(SpaceDetailFeedback2Page);
  //   modal1.present();
  //   this.viewCtrl.dismiss();
  //   modal1.onDidDismiss(()=>{
  //   });
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailFeedback2Page');
  }

}
