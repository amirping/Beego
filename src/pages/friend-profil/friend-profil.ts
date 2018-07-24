import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { User } from '../../models/user.interface';
import { FriendsProvider } from '../../providers/friends/friends';

//const vibrant = require('node-vibrant');

/**
 * Generated class for the FriendProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friend-profil',
  templateUrl: 'friend-profil.html',
})
export class FriendProfilPage {
  friend:User;
  constructor(public navCtrl: NavController,
    public friendsProvider: FriendsProvider,
    public navParams: NavParams) {
      const uid = this.navParams.get("uid");
    console.log(uid);
    this.friendsProvider.getFriend(this.navParams.get('uid')).subscribe((friend: User)=>{
      this.friend = friend;
      this.friend.uid = uid;
      this.friend.age = Math.abs(new Date(Date.now() - this.friend.birthday).getUTCFullYear() - 1970);
      console.log(this.friend)
    });
    
  }
  formatFollows(nbr:number):string{
    return nbr+"";
  }
  folowsPage(){
    this.navCtrl.push(ProfilPage);
  }
  requestFriend(friend){
    friend.waiting = true;
      this.friendsProvider.sendFriendRequest(friend.uid, 'request').then(t=>{
        
        console.log(t);
      }).catch(e=>{
        console.log(e);
      });
  }
  
  


  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendProfilPage');
    
  }

}
