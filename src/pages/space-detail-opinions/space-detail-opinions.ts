import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SpaceDetailFeedback1Page } from '../space-detail-feedback1/space-detail-feedback1';

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
  dismiss=false;
  rating = 5 ;
  back(){
    this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController,  private modalCtrl : ModalController,
    public navParams: NavParams) {
  }
  goToFeefback1(){
    // this.navCtrl.push(SpaceDetailOpinionsPage);
    // this.disabled=true;
    const modal1= this.modalCtrl.create(SpaceDetailFeedback1Page);
    modal1.present();
    this.dismiss=true;
    modal1.onDidDismiss(()=>{
      // this.disabled=false;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailOpinionsPage');
  }

}
