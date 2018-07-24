import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
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
  nom : string;
  idEspace;
  back(){
    this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController,  private modalCtrl : ModalController,
    public navParams: NavParams, private viewCtrl:ViewController ) {
      this.nom = this.navParams.get('nom');
      this.idEspace = this.navParams.get('cle');
      
  }
  goToFeedback1(){
    const modal1= this.modalCtrl.create(SpaceDetailFeedback1Page,{ nom: this.nom, cle:this.idEspace });
    modal1.present();
    this.viewCtrl.dismiss();
    modal1.onDidDismiss(()=>{
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailOpinionsPage');
  }

}
