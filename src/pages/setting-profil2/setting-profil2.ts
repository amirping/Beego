import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,LoadingController, AlertController  } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the SettingProfil2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting-profil2',
  templateUrl: 'setting-profil2.html',
})
export class SettingProfil2Page {
  datePickerMin:string;
  datePicker: string;
  year:string = "Année";
  month:string = "Mois";
  day:string = "Jours";

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,) {
      
  }
  back(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingProfil2Page');
  }

}
