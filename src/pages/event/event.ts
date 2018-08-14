import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import {UpdateProgramPage} from '../update-program/update-program';

/**
 * Generated class for the EventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event',
  templateUrl: 'event.html',
})
export class EventPage {
  show=false;
  disabled=false;
  index="1";
  showInvitaion(){
    this.show = !this.show;
  }

  constructor(public navCtrl: NavController,private modalCtrl : ModalController,
     public navParams: NavParams) {
  }

  updateProgram(){
    this.disabled=true;
    const modal1= this.modalCtrl.create(UpdateProgramPage, null, { cssClass: 'update-program-modal' });
    modal1.present();
    modal1.onDidDismiss(()=>{
      this.disabled=false;
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EventPage');
  }

}
