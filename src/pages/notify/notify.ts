import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FriendsProvider } from '../../providers/friends/friends';

/**
 * Generated class for the NotifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notify',
  templateUrl: 'notify.html',
})
export class NotifyPage {
  friends: any;
  constructor(public navCtrl: NavController,
    public friendsProvider : FriendsProvider,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotifyPage');
    this.friendsProvider.getFriendsRequest(requests=>{
      this.friends = requests;
      console.log(this.friends);
    })
  }
  accept(uid){
    this.friendsProvider.acceptFriendRequest(uid).then(d=>{
      console.log(d);
    }).catch(e=>{
      console.log(e);
    })
  }

}
