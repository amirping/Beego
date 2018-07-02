import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { AlertController } from 'ionic-angular';
import { PopupPage } from '../popup/popup';

/**
 * Generated class for the FriendFollowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-follow',
  templateUrl: 'friend-follow.html',
})
export class FriendFollowPage {
  
   disabled=false;
    
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController,
    private dialogs: Dialogs,
    private modalCtrl : ModalController,
    private alertCtrl: AlertController) {
      // this.modalCtrl.create(PopupPage, null, { cssClass: 'popup-modal' }).present();
  }
  show(){
    
      this.presentActionSheet();
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      // title: 'Modify your album',
      buttons: [
        {
          text: 'supprimer',
          role: 'destructive',
          handler: () => {
            this.dialogs.confirm("Si vous le supprimer   ... "
            , "Voulez vous supprimer prenom ?", ['Supprimer','Annuler']);
          }
        },
        {
          text: 'signaler',
        
          handler: () => {
            this.disabled=true;
          const modal1= this.modalCtrl.create(PopupPage, null, { cssClass: 'popup-modal' });
          modal1.present();
          modal1.onDidDismiss(()=>{
            this.disabled=false;
          });
            
          }
        },
        {
          text: 'bloquer',
          
          handler: () => {
            this.dialogs.confirm("Si vous le débloquer ... "
            , "Voulez vous bloqué prenom ?", ['Bloquer','Annuler']);
            
          }
        },
        {
          text: 'bloquer les notifications',
          handler: () => {
            this.dialogs.confirm("Si vous les débloquer les notification  ... "
            , "Voulez vous bloqué les notification du prenom ?", ['Bloquer','Annuler']);
            
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
              
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  // dosomething(img,imgbgcolor){
    
  //   var rgb = getAverageRGB(img);
  //   imgbgcolor.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
  //   function getAverageRGB(imgEl) {
    
  //     var blockSize = 5, // only visit every 5 pixels
  //         defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
  //         canvas = document.createElement('canvas'),
  //         context = canvas.getContext && canvas.getContext('2d'),
  //         data, width, height,
  //         i = -4,
  //         length,
  //         rgb = {r:0,g:0,b:0},
  //         count = 0;
          
  //     if (!context) {
  //         return defaultRGB;
  //     }
      
  //     height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  //     width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
      
  //     context.drawImage(imgEl, 0, 0);
      
  //     try {
  //         data = context.getImageData(0, 0, width, height);
  //     } catch(e) {
  //         /* security error, img on diff domain */alert('x');
  //         return defaultRGB;
  //     }
      
  //     length = data.data.length;
      
  //     while ( (i += blockSize * 4) < length ) {
  //         ++count;
  //         rgb.r += data.data[i];
  //         rgb.g += data.data[i+1];
  //         rgb.b += data.data[i+2];
  //     }
      
  //     // ~~ used to floor values
  //     rgb.r = ~~(rgb.r/count);
  //     rgb.g = ~~(rgb.g/count);
  //     rgb.b = ~~(rgb.b/count);
      
  //     return rgb;
      
  // }

  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendFollowPage');
  }

}
