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
  traited: number = 0;
  activeFriend = 0;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private friendsProvider : FriendsProvider
  ) {
    const friends$ = this.friendsProvider.getSuggestedFriends().subscribe(f=>{
      const friends = f['friends'];
      this.friends = [];
      let index = 0;
      for (const key in friends) {
        this.friends.push({...friends[key], id:index});
        index++;
      }
      console.log(this.friends)
      friends$.unsubscribe();
    });

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
  }
  acceptFriend(id) {
    this.friends[id].stat = 1;
    //
    // this.traited.push(this.friends[id]);
    this.traited++;
    //this.friends.shift();
    this.activeFriend = id + 1;
  }
  rejectFriend(id) {
    this.friends[id].stat = -1;
    // this.traited.push(this.friends[id]);
    this.traited++;
    //this.friends.shift();
    this.activeFriend = id + 1;
  }
  swiperHandler(Event,id) {
    if(Event.offsetDirection == 2 ){
      this.acceptFriend(id)
    }
    else if(Event.offsetDirection == 4){
      this.rejectFriend(id)
    }
  }
  friend_follow_Page(){
    this.navCtrl.push(FriendProfilPage);
  }
}
