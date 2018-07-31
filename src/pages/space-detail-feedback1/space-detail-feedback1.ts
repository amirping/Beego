import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController,Events } from 'ionic-angular';
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
  disabled ;
  rating =3 ;
  otherOpen = false ;


 
  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private modalCtrl : ModalController , private viewCtrl:ViewController
  ,private events: Events) {
      // this.backrdropblur=navParams.get('blur');
      // console.log('feedback 1',this.backrdropblur);
  }
 
  goToFeefback2(){
    this.otherOpen=true;
    const modal2= this.modalCtrl.create(SpaceDetailFeedback2Page, {ratingg:this.rating },{enableBackdropDismiss:false} );
    modal2.present();
    this.viewCtrl.dismiss({'otherOpen':this.otherOpen});
    // console.log(this.rating);
    modal2.onDidDismiss((data)=>{
      console.log("test3"+data);
      if (data && data.otherOpen === true){
        this.events.publish('otherOpen',true);
      }
      else{
        this.events.publish('otherOpen',false);
      }
    });
  }
  cancel(){
    this.events.publish('otherOpen',false);
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailFeedback1Page');
  }

}
