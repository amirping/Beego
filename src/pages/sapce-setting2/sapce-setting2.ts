import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SapceSetting2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sapce-setting2',
  templateUrl: 'sapce-setting2.html',
})
export class SapceSetting2Page {
  arrow1 = false;
  generalSettingVar = false;
  colorVar1 = true;
  colorVar2 = true;
  colorVar3 = true;

  SNvar = false;
  arrow2 = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back() {
    this.navCtrl.pop();
  }
  openGeneralSetting() {
    this.arrow1 = !this.arrow1;
    this.generalSettingVar = !this.generalSettingVar;
    this.colorVar2 = !this.colorVar2;
    if (this.SNvar === false) {
      this.colorVar3 = !this.colorVar3;
    }
  }
  openSocialNetwork() {
    this.arrow2 = !this.arrow2;
    this.SNvar = !this.SNvar;      
    if (this.generalSettingVar === false) {      
      this.colorVar2 = !this.colorVar2;
      this.colorVar1=!this.colorVar1;
    }
    else{
      this.colorVar3 = !this.colorVar3;
    }

    // this.colorVar3=!this.colorVar3;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SapceSetting2Page');
  }


}
