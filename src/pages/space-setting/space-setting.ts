import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import {SapceSetting2Page} from '../sapce-setting2/sapce-setting2';
import { SpaceSecurityPage } from '../space-security/space-security';
import { SpaceCategorySpecialtyPage } from '../space-category-specialty/space-category-specialty';

/**
 * Generated class for the SpaceSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-setting',
  templateUrl: 'space-setting.html',
})
export class SpaceSettingPage {
  @ViewChild (Content) content:Content;
  data: any = [];
  favoris: any = [
    {
      id: 0,
      pic: "https://source.unsplash.com/1080x600/?food"
    },
    {
      id: 1,
      pic: "https://source.unsplash.com/600x1080/?movie"
    },
    {
      id: 2,
      pic: "https://source.unsplash.com/900x900/?party"
    },
    {
      id: 3,
      pic: "https://source.unsplash.com/1000x900/?events"
    },
    {
      id: 4,
      pic: "https://source.unsplash.com/1080x600/?music part"
    },
    {
      id: 5,
      pic: "https://source.unsplash.com/900x900/?desko"
    }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.favoris;
  }
  lasttop=58;
  showHeader=false;
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceSettingPage');
    this.content.ionScroll.subscribe(($event)=>{
      // console.log($event);
      if($event.scrollTop > this.lasttop){
        this.showHeader=true;
        // console.log("test", this.showHeader);
      }
      else{
        this.showHeader=false;
        // console.log(this.showHeader);
      }
      if($event.scrollTop>58){
        this.lasttop=$event.scrollTop;
      }
      else{
        this.lasttop=58;
      }
    })
  }
  generalSetting(){
    this.navCtrl.push(SapceSetting2Page);
  }
  security(){
    this.navCtrl.push(SpaceSecurityPage);
  }
  categoryAndSpecialty(){
    this.navCtrl.push(SpaceCategorySpecialtyPage);
  }
}
