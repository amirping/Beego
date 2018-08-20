import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController  } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SpaceUpdatePicCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-update-pic-category',
  templateUrl: 'space-update-pic-category.html',
})
export class SpaceUpdatePicCategoryPage {
  blurVar=false;
  img;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private dialogs: Dialogs,
    private modalCtrl : ModalController,
    private alertCtrl: AlertController, private viewCtrl:ViewController) {
      this.img=navParams.get('img');
      // console.log(this.img);
  }

  picActions(){
    this.blurVar=true;
    this.presentActionSheet();
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [
        {
          text: 'Changer la photo',
          
          handler: () => {
            this.dialogs.confirm("Si vous le supprimer   ... "
            , "Voulez vous supprimer prenom ?", ['Supprimer','Annuler']);
          }
        },
        {
          text: 'Prendre une photo',
        
          handler: () => {
          
            
          }
        },
        {
          text: 'Supprimer',
          role: 'destructive',
          handler: () => {
            
          }
        },
      
        {
          text: 'Annuler',
          role: 'cancel',
          handler: () => {
            this.viewCtrl.dismiss();
            console.log('Cancel clicked');
            this.blurVar=false;
          }
        }
      ]
    });
 
    actionSheet.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceUpdatePicCategoryPage');
  }

}
