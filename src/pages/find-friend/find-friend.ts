import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { FriendProfilPage } from "../friend-profil/friend-profil";
import { FriendsProvider } from "../../providers/friends/friends";

/**
 * Generated class for the FindFriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-find-friend",
  templateUrl: "find-friend.html"
})
export class FindFriendPage {
  
  friends: any = [];
  activeIndex = 0;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private friendsProvider : FriendsProvider
  ) {
    

    /**
     * this.friends.push({
      id: 1,
      pic: "http://lorempixel.com/900/900/people",
      name: "Lamine ben zekri",
      location: "Le bardo",
      age: "24 ans"
    });
    this.friends.push({
      id: 2,
      pic: "http://lorempixel.com/900/900/people",
      name: "Ahmed ben zekri",
      location: "Le bardo",
      age: "24 ans",
      stat: 0
    });
    this.friends.push({
      id: 3,
      pic: "http://lorempixel.com/900/900/people",
      name: "Moha ben zekri",
      location: "Le bardo",
      age: "24 ans",
      stat: 0
    });
    this.friends.push({
      id: 4,
      pic: "http://lorempixel.com/900/900/people",
      name: "Aimed ben zekri",
      location: "Le bardo",
      age: "24 ans",
      stat: 0
    });
    this.friends.push({
      id: 5,
      pic: "http://lorempixel.com/900/900/people",
      name: "Hmed ben zekri",
      location: "Le bardo",
      age: "24 ans",
      stat: 0
    });
     */
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FindFriendPage");
    this.friendsProvider.getSuggestedFriends(true, "nearby")
    .then((friends: any[])=>{
      this.friends.push(...friends);
    })
    .catch(e=>{
      console.log(e);
    });
  }
  acceptFriend(friend) {
    friend.state = 1;
    this._sendRequest(friend.uid, 'request');
  }
  rejectFriend(friend) {
    friend.state = -1;
    this._sendRequest(friend.uid, 'ignore');
  }
  swiperHandler(event, friend) {
    if(event.offsetDirection == 2 ){
      this.acceptFriend(friend)
    }
    else if(event.offsetDirection == 4){
      this.rejectFriend(friend)
    }
    // this.friends.shift();
    if(this.friends.length<3){
      // this.friends.unshift({hidden:true});
      this.friendsProvider.getSuggestedFriends(false, "nearby")
      .then((friends: any[])=>{
        this.friends.push(...friends);
      })
      .catch(e=>{
        console.log(e);
      });
    }
  }
  _sendRequest(uid, type){
    this.activeIndex++;
    this.friendsProvider.sendFriendRequest(uid, type)
    .then(data=>{
      console.log(data);
      for (let index = 0; index < this.friends.length; index++) {
        if(this.friends[index].uid === uid){
          this.friends.splice(index, 1);
          this.activeIndex--;
        }
      }
    }).catch(e=>{
      console.log(e);
    })
    
  }
  friend_follow_Page(uid){
    this.navCtrl.push(FriendProfilPage, { uid });
  }
}
