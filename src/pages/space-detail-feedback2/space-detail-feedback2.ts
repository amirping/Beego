import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, ViewController } from 'ionic-angular';
import { SpaceDetailFeedback3Page } from '../space-detail-feedback3/space-detail-feedback3';
import { SpaceDetailFeedback1Page } from '../space-detail-feedback1/space-detail-feedback1';
import { AngularFireDatabase,AngularFireList } from '../../../node_modules/angularfire2/database';

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
  nom : string;
  listReviews : AngularFireList<any>;
  idEspace;
   date = new Date();
  constructor(public navCtrl: NavController, public navParams: NavParams
  ,private modalCtrl : ModalController , private viewCtrl:ViewController, private db : AngularFireDatabase) {
    this.r=navParams.get('ratingg');
    this.nom = this.navParams.get('nom');
    this.idEspace = this.navParams.get('cle')
    this.listReviews= this.db.list(`espace/${this.idEspace}/Reviews`);
    console.log(this.date)
    // console.log('ratingg', navParams.get('ratingg'));
    // console.log(this.r);
  }
  goToFeefback3(description){
    this.listReviews.push({
      firstName:"Ghassen",
      lastName:"ASKRI",
      description: description,
      date : this.date.toISOString().substring(0, 10),
      rating : this.r}
    )

    const modal3= this.modalCtrl.create(SpaceDetailFeedback3Page , {ratingg:this.r});
    modal3.present();
    this.viewCtrl.dismiss();
    modal3.onDidDismiss(()=>{
    });
  }
  
  backToFeedback1(){
    const modal3= this.modalCtrl.create(SpaceDetailFeedback1Page,{ nom: this.nom });
    modal3.present();
    this.viewCtrl.dismiss();
    modal3.onDidDismiss(()=>{
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailFeedback2Page');
  }

}
