import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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
  activeFriend = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.friends.push({
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
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad FindFriendPage");
  }
  acceptFriend(id) {
    this.friends[id].stat = 1;
    this.activeFriend = id+1
  }
  rejectFriend(id) {
    this.friends[id].stat = -1;
    this.activeFriend = id+1
  }
  swiperHandler(Event) {}
}
