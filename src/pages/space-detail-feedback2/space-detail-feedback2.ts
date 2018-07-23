import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, ViewController } from 'ionic-angular';
import { SpaceDetailFeedback3Page } from '../space-detail-feedback3/space-detail-feedback3';
import { SpaceDetailFeedback1Page } from '../space-detail-feedback1/space-detail-feedback1';

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
  goToFeefback3(){
    const modal3= this.modalCtrl.create(SpaceDetailFeedback3Page , {ratingg:this.r},);
    modal3.present();
    this.viewCtrl.dismiss();
    modal3.onDidDismiss(()=>{
    });
  }
  
  backToFeedback1(){
    const modal3= this.modalCtrl.create(SpaceDetailFeedback1Page);
    modal3.present();
    this.viewCtrl.dismiss();
    modal3.onDidDismiss(()=>{
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailFeedback2Page');
  }

}
