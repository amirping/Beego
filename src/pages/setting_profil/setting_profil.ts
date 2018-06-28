import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ListOfFollowsPage } from '../list-of-follows/list-of-follows';
import {BlockPage} from '../block/block';
import {SettingProfil2Page } from '../setting-profil2/setting-profil2';
import {SettingSecurityPage} from '../setting-security/setting-security'
import { UserProvider } from '../../providers/user/user';


/**
 * Generated class for the ParametreDuComptePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting_profil',
  templateUrl: 'setting_profil.html',
})
export class SettingProfilPage {
  fbValidLink = false;
  instaValidLink = false;
  snapValidLink = false;
  fbLink: string;
  instaLink: string;
  snapLink: string;
  fbLinkTemp: string;
  instaLinkTemp: string;
  snapLinkTemp: string;
  constructor(public navCtrl: NavController,
    public userProvider: UserProvider,
    public loadCtrl: LoadingController,
    public navParams: NavParams) {
  }
  
  ionViewDidLoad() {
    this.fbLink = this.navParams.get('fb');
    this.instaLink = this.navParams.get('insta');
    this.snapLink = this.navParams.get('snap');
    this.fbLinkTemp = this.fbLink;
    this.instaLinkTemp = this.instaLink;
    this.snapLinkTemp = this.snapLink;
  }
  updateSocialLink(idx){
    switch (idx) {
      case 0:
      console.log(this.fbLinkTemp);
        this.fbValidLink = 
          /^(http(s)?:\/\/)?(www\.)?(facebook|fb)\.com\/([A-z0-9\-_\?=\.]+\/?)$/
          .test(this.fbLinkTemp)||this.fbLinkTemp=="";
        break;
        case 1:
        this.instaValidLink = 
          /(https?:\/\/)?(www\.)?instagram\.com\/([A-Za-z0-9_](?:(?:[A-Za-z0-9_]|(?:\.(?!\.))){0,28}(?:[A-Za-z0-9_]))?)/
          .test(this.instaLinkTemp)||this.instaLinkTemp=="";
        break;
        case 2:
        this.snapValidLink = 
          /^(http(s)?:\/\/)?(www\.)?(snapchat)\.com\/([A-z0-9\-_\?=\.])+(\/[A-z0-9\-_\?=\.]+)?$/
          .test(this.snapLinkTemp)||this.snapLinkTemp=="";
        break;
    
      default:
        break;
    }
  }
  saveSocialLink(idx){
    const load = this.loadCtrl.create();
    load.present();
    switch (idx) {
      case 0:
        this.fbLinkTemp = removeHTTP(this.fbLinkTemp);
        this.userProvider.updateSocialLink(this.fbLinkTemp, this.instaLink, this.snapLink).then(()=>{
          this.fbLink = this.fbLinkTemp;
          this.fbValidLink = false;
          load.dismiss();
        }).catch((err)=>{
          console.log(err);
        })
        break;
      case 1:
        this.instaLinkTemp = removeHTTP(this.instaLinkTemp);
        this.userProvider.updateSocialLink(this.fbLink, this.instaLinkTemp, this.snapLink).then(()=>{
          this.instaLink = this.instaLinkTemp;
          this.instaValidLink = false;
          load.dismiss();
        }).catch((err)=>{
          console.log(err);
        })
        break;
      case 2:
        this.snapLinkTemp = removeHTTP(this.snapLinkTemp);
        this.userProvider.updateSocialLink(this.fbLink, this.instaLink, this.snapLinkTemp).then(()=>{
          this.snapLink = this.snapLinkTemp;
          this.snapValidLink = false;
          load.dismiss();
        }).catch((err)=>{
          load.dismiss();
          console.log(err);
        })
        break;
    
      default:
        break;
    }
    function removeHTTP(link: string): string {
      return link.replace(/(http(s)?:\/\/)?(www\.)?/, "");
    }
  }
  back(){
    this.navCtrl.pop();
  }
  follows(){
    this.navCtrl.push(ListOfFollowsPage);
  }
  blockList(){
    this.navCtrl.push(BlockPage);
  }
  goToParam(){
    this.navCtrl.push(SettingProfil2Page);
  }
  goTosecurity(){
    this.navCtrl.push(SettingSecurityPage);
  }
}
