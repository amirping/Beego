import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { SpaceReplyPopupPage } from '../space-reply-popup/space-reply-popup';

/**
 * Generated class for the SpaceFeedbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-feedback',
  templateUrl: 'space-feedback.html',
})
export class SpaceFeedbackPage {
  hiddenVar = false;
  list: Array<any> = [];
  rating = 4;
  indexSwipe = -1;
  verif = false;
  blurVar = false;
  name;
  lastName;
  com: Array<any> = [];
  comReply: Array<any> = [];
  grideVar = false;
  text_send = "";
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController, private viewCtrl: ViewController) {
    this.list.push({
      name: 'Mohamed  ',
      lastName: 'Limayma',
      place: 'beja',
      commentNbr: '1',
      comment: 'Le Lorem Ipsum est simplement faux textesimplement faux texte',
      picUrl: '../../assets/imgs/photoDeProfil.png',
    },
      {
        name: 'Folena ',
        lastName: 'ben folen',
        place: 'zahrouni miza',
        commentNbr: '2',
        comment: 'Le Lorem Ipsum est simplement faux text esimplement faux texte  textesimplement faux texte esimplement faux texte  textesimplement faux texteesimplement faux texte  textesimplement faux texte',
        picUrl: '../../assets/imgs/photoDeProfil.png',
      })
  }
  back() {
    this.navCtrl.pop();
  }
  openItem(event, index) {
    console.log(event);
    console.log(index);
    this.indexSwipe = index;
  }
  moveInfo(event, index) {
    if (!this.verif) {
      this.indexSwipe = index;
      this.verif = true;
    }
    else if ((this.verif) && (this.indexSwipe != index)) {
      this.indexSwipe = index;
    }
    else {
      this.indexSwipe = -1;
      this.verif = false;
    }

  }

  //reply
  reply(i) {
    this.name = this.list[i].name;
    this.lastName = this.list[i].lastName;
    this.blurVar = true;
    const modal1 = this.modalCtrl.create(SpaceReplyPopupPage, { name: this.name, lastName: this.lastName }, { enableBackdropDismiss: false });
    modal1.present();
    modal1.onDidDismiss(() => {
      this.blurVar = false;
    });
  }
  openComments(item) {
    this.com = this.list[item];
    this.hiddenVar = true;
    this.grideVar = true;
  }
  sendMsg() {
    if (!this.text_send.trim()) return;
    this.comReply.push({
      comment: this.text_send,
    }),
      console.log(this.comReply);
    this.text_send = '';
  }
  closeCom() {
    this.hiddenVar = false;
    this.grideVar = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceFeedbackPage');
  }

}
