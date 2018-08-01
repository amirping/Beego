import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationsSettingPage } from '../notifications-setting/notifications-setting';

/**
 * Generated class for the NotificationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notifications',
  templateUrl: 'notifications.html',
})
export class NotificationsPage {
  notifications = [
    {
      type:"newEvent"
    },
    {
      type:"friendRequest"
    },
    {
      type:"shareLocation"
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToSetting(){
    this.navCtrl.push(NotificationsSettingPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificationsPage');
  }

}
