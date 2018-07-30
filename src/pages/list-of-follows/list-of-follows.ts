import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';
import { FriendsProvider } from '../../providers/friends/friends';
import { FriendProfilPage } from '../friend-profil/friend-profil';

/**
 * Generated class for the ListOfFollowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-of-follows',
  templateUrl: 'list-of-follows.html',
})
export class ListOfFollowsPage {
  friends = [];
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public friendsProviders: FriendsProvider,
    private dialogs: Dialogs) 
  { 
    this.friendsProviders.getFriends(friends=>{
      this.friends = friends;
      console.log(friends);
    })
  }
  log(u){
    console.log(u);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOfFollowsPage');
  }
  viewProfile(uid){
    this.navCtrl.push(FriendProfilPage, { uid });
  }
  back() {
    this.navCtrl.pop();
  }



  confirmDelete(u) {
    console.log(u);
    this.dialogs.confirm("Si vous le supprimer il ne sera plus sur votre list de follows "
      , "Vouler vous supprimer prenom", ['Supprimer', 'Annuler']);// ajouter then pour terminer l action 
    // le prenon est un variable du user qui va etre supprimer
  }



}
