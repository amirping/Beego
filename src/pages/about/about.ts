import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
  ,private videoPlayer: VideoPlayer) {
  }
  playVideo(){
    alert("dddd");
    
    this.videoPlayer.play('../../assets/video/videost.webm').then(() => {
 console.log('video completed');
}).catch(err => {
 alert(JSON.stringify(err));
});
  }

  back(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
