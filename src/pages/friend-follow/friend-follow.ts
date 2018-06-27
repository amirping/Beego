import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';

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
    hideRow=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public actionSheetCtrl: ActionSheetController) {
  }
  show(){
    this.hideRow = true;
      this.presentActionSheet();
  }
  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'supprimer',
          role: 'destructive',
          handler: () => {
            this.hideRow=false;
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            this.hideRow=false;
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
              this.hideRow=false;
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  dosomething(img,imgbgcolor){
    
    var rgb = getAverageRGB(img);
    imgbgcolor.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';
    function getAverageRGB(imgEl) {
    
      var blockSize = 5, // only visit every 5 pixels
          defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
          canvas = document.createElement('canvas'),
          context = canvas.getContext && canvas.getContext('2d'),
          data, width, height,
          i = -4,
          length,
          rgb = {r:0,g:0,b:0},
          count = 0;
          
      if (!context) {
          return defaultRGB;
      }
      
      height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
      width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
      
      context.drawImage(imgEl, 0, 0);
      
      try {
          data = context.getImageData(0, 0, width, height);
      } catch(e) {
          /* security error, img on diff domain */alert('x');
          return defaultRGB;
      }
      
      length = data.data.length;
      
      while ( (i += blockSize * 4) < length ) {
          ++count;
          rgb.r += data.data[i];
          rgb.g += data.data[i+1];
          rgb.b += data.data[i+2];
      }
      
      // ~~ used to floor values
      rgb.r = ~~(rgb.r/count);
      rgb.g = ~~(rgb.g/count);
      rgb.b = ~~(rgb.b/count);
      
      return rgb;
      
  }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendFollowPage');
  }

}
