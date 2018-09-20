import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
import { VgAPI, VgFullscreenAPI } from 'videogular2/core';

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
  api:VgAPI;
  fsAPI:VgFullscreenAPI;
  @ViewChild('media') elem;
  target:HTMLElement;
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
  onPlayReady(api:VgAPI){
    this.api=api;
    this.fsAPI=this.api.fsAPI;
    // this.fsAPI.toggleFullscreen
    console.log(this.elem);
    this.target = this.elem.nativeElement;
    
    this.api.getDefaultMedia().subscriptions.playing.subscribe(()=>{
      //let vgFor = this.elem.getAttribute('vg-for');
      
      //this.fsAPI.init(this.target,this.fsAPI.medias);
      if(!this.fsAPI.isFullscreen){
        console.log("htolna full");
      this.fsAPI.toggleFullscreen();
      }
      console.log("mriguel degla ;) ");
      
    })
    console.log((this.api));
  }
}
