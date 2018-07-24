import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController  } from 'ionic-angular';
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
  r;
  nom : string;
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private modalCtrl : ModalController , private viewCtrl:ViewController) {
      this.r=navParams.get('ratingg');
      this.nom = this.navParams.get('nom');
  }
  backToFeedback1(){
    const modal3= this.modalCtrl.create(SpaceDetailFeedback1Page,{ nom: this.nom });
    modal3.present();
    this.viewCtrl.dismiss();
    modal3.onDidDismiss(()=>{
    });
  }
  backToFeedback2(){
    const modal3= this.modalCtrl.create(SpaceDetailFeedback2Page , {ratingg:this.r,nom: this.nom });
    modal3.present();
    this.viewCtrl.dismiss();
    modal3.onDidDismiss(()=>{
    });
  }
  close(){
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailFeedback3Page');
  }

}
