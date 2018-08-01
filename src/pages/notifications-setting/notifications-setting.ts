import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';

/**
 * Generated class for the NotificationsSettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications-setting',
  templateUrl: 'notifications-setting.html',
})
export class NotificationsSettingPage {
  btnTranformation= false;

  btnTrans(){
    this.btnTranformation = !this.btnTranformation;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  backToNotificationList(){
    this.navCtrl.push(NotificationsPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsSettingPage');
  }

}
