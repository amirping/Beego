import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, ViewController,Events } from 'ionic-angular';
import { SpaceDetailFeedback3Page } from '../space-detail-feedback3/space-detail-feedback3';
import { SpaceDetailFeedback1Page } from '../space-detail-feedback1/space-detail-feedback1';

/**
 * Generated class
 *  for the SpaceDetailFeedback2Page page.
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
  disabled ;
  otherOpen = false ;  
  r ;
   
  constructor(public navCtrl: NavController, public navParams: NavParams
  ,private modalCtrl : ModalController , private viewCtrl:ViewController
  ,private events: Events) {
    this.r=navParams.get('ratingg');
  
  }
  goToFeefback3(){
    this.otherOpen=true;
    const modal3= this.modalCtrl.create(SpaceDetailFeedback3Page , {ratingg:this.r},{enableBackdropDismiss:false});
    modal3.present();
    this.viewCtrl.dismiss({'otherOpen':this.otherOpen});
    modal3.onDidDismiss((data)=>{
      console.log("test4"+data);
      if (data && data.otherOpen === true){
        this.events.publish('otherOpen',true);
      }
      else{
        this.events.publish('otherOpen',false);
      }
    });
  }
  
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailFeedback2Page');
  }

}
