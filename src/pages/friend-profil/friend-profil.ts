import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { ProfilPage } from '../profil/profil';
import { Dialogs } from '@ionic-native/dialogs';
import { User } from '../../models/user.interface';
import { FriendsProvider } from '../../providers/friends/friends';
import { PopupPage } from '../popup/popup';

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
  disabled: boolean = false;
  constructor(public navCtrl: NavController,
    public friendsProvider: FriendsProvider,
    public actionSheetCtrl: ActionSheetController,
    private dialogs: Dialogs,
    private modalCtrl : ModalController,
    public navParams: NavParams) {
      const uid = this.navParams.get("uid");
    console.log(uid);
    this.friendsProvider.getFriend(this.navParams.get('uid')).then((friend: User)=>{
      this.friend = friend;
      console.log(this.friend)
    });
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FriendProfilPage');
    
  }
  formatFollows(nbr:number):string{
    return nbr+"";
  }
  folowsPage(){
    this.navCtrl.push(ProfilPage);
  }
  back(){
    this.navCtrl.pop();
  }
  requestFriend(friend){
      friend.waiting = true;
      this.friendsProvider.sendFriendRequest(friend.uid, 'request').then(t=>{
        friend.state = "waiting";
      }).catch(e=>{
        friend.waiting = false;
        console.log(e);
      });
  }
  show(){
    
    this.presentActionSheet();
}
presentActionSheet() {
  let actionSheet = this.actionSheetCtrl.create({
    // title: 'Modify your album',
    buttons: [
      {
        text: 'supprimer',
        role: 'destructive',
        handler: () => {
          this.dialogs.confirm("Si vous le supprimer   ... "
          , "Voulez vous supprimer prenom ?", ['Supprimer','Annuler']);
        }
      },
      {
        text: 'signaler',
      
        handler: () => {
          this.disabled=true;
        const modal1= this.modalCtrl.create(PopupPage, {friend:this.friend}, { cssClass: 'popup-modal' });
        modal1.present();
        modal1.onDidDismiss(()=>{
          this.disabled=false;
        });
          
        }
      },
      {
        text: 'bloquer',
        
        handler: () => {
          this.dialogs.confirm("Si vous le débloquer ... "
          , "Voulez vous bloqué prenom ?", ['Bloquer','Annuler']);
          
        }
      },
      {
        text: 'bloquer les notifications',
        handler: () => {
          this.dialogs.confirm("Si vous les débloquer les notification  ... "
          , "Voulez vous bloqué les notification du prenom ?", ['Bloquer','Annuler']);
          
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
            
          console.log('Cancel clicked');
        }
      }
    ]
  });

  actionSheet.present();
}
  
  


  

}
