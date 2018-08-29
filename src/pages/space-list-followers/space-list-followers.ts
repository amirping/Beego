import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Events } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { AlertController } from 'ionic-angular';
import { SpaceReportPopupPage } from '../space-report-popup/space-report-popup';

/**
 * Generated class for the SpaceListFollowersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-list-followers',
  templateUrl: 'space-list-followers.html',
})
export class SpaceListFollowersPage {
  name;
  index = "1";
  blurVar = false;
  // infoSwipeVar=false;
  verif = false;
  indexSwipe = -1;
  listFollows: Array<any> = [];
  listsuggestion: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private events: Events,
    public actionSheetCtrl: ActionSheetController,
    private dialogs: Dialogs,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController, private viewCtrl: ViewController) {
    this.listFollows.push({
      name: 'Folen ',
      lastName:'ben folen',
      place: 'beja',
      commentNbr: '1',
      picUrl: '../../assets/imgs/photoDeProfil.png',
    },

      {
        name: 'Folena ',
        lastName:'ben folen',
        place: 'zahrouni miza',
        picUrl: '../../assets/imgs/photoDeProfil.png',
      },

      {
        name: 'Folena ',
        lastName:'ben folen',
        place: 'zahrouni miza',
        picUrl: '../../assets/imgs/photoDeProfil.png',
      })
    this.listsuggestion.push({
      name: 'Folen ben folen',
      place: 'beja',
      commentNbr: '1',
      picUrl: '../../assets/imgs/photoDeProfil.png',
    },

      {
        name: 'Folena ben folen',
        place: 'zahrouni miza',
        picUrl: '../../assets/imgs/photoDeProfil.png',

      })

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
  openItem(event, index) {
    console.log(event);
    console.log(index);
    this.indexSwipe = index;
  }


  deleteFollower() {
    this.blurVar = true;
    this.presentActionSheet();
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      cssClass: 'action-sheets-groups-page',
      buttons: [

        {
          text: 'Supprimer',
          role: 'destructive',
          cssClass: 'EditionIcon_delete_Follower',
          handler: () => {

          }
        },

        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'EditionIcon_cancel_Follower',
          handler: () => {
            console.log('Cancel clicked');
            this.blurVar = false;
          }
        }
      ]
    });

    actionSheet.present();
  }

  ReportFollower(i) {
    this.name=this.listFollows[i].name;
    this.blurVar = true;
    this.presentActionSheet2();
  }
  presentActionSheet2() {
    let actionSheet = this.actionSheetCtrl.create({
      cssClass: 'action-sheets-groups-page',
      buttons: [

        {
          text: 'Signaler',
          role: 'destructive',
          cssClass: 'EditionIcon_Signaler_Follower',
          handler: () => {    
            this.blurVar = true;   
            const modal1 = this.modalCtrl.create(SpaceReportPopupPage,{ name: this.name}, { enableBackdropDismiss: false });
            modal1.present();
            modal1.onDidDismiss(() => {
              this.blurVar = false;
            });
          }
        },

        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'EditionIcon_cancel_Follower',
          handler: () => {
            console.log('Cancel clicked');
            this.blurVar = false;
          }
        }
      ]
    });

    actionSheet.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceListFollowersPage');
  }

}
