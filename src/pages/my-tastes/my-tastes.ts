import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the MyTastesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-my-tastes",
  templateUrl: "my-tastes.html"
})
export class MyTastesPage {
  collection: any = [];
  traitedCollection: any = [];
  active = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(document.defaultView.window);

    this.collection.push(
      {
        id: 1,
        name: "Happy Hour",
        pic: "https://source.unsplash.com/featured/?party,bar"
      },
      {
        id: 2,
        name: "Open Drink",
        pic: "https://source.unsplash.com/featured/?party,music"
      },
      {
        id: 3,
        name: "Stair Out",
        pic: "https://source.unsplash.com/featured/?party,dance"
      },
      {
        id: 4,
        name: "Onk Ronk",
        pic: "https://source.unsplash.com/featured/?party,club"
      },
      {
        id: 5,
        name: "Honkey donkey",
        pic: "https://source.unsplash.com/featured/?wizard"
      },
      {
        id: 6,
        name: "Race Rafer",
        pic: "https://source.unsplash.com/featured/?magic"
      }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MyTastesPage");
  }
  likeItem(index) {
    this.collection[index].stat = 1;
    this.traitedCollection.push(this.traitedCollection[index]);
    this.active++;
    //this.collection.splice(index, 1);
    //this.collection.push(this.collection.splice(this.collection[index], 1)[0]);
  }
  dislikeItem(index) {
    this.collection[index].stat = -1;
    this.traitedCollection.push(this.traitedCollection[index]);
    this.active++;
    //this.collection.splice(index, 1);
    //this.collection.push(this.collection.splice(this.collection[index], 1)[0]);
  }
  ignore(index) {
    this.collection[index].stat = 2;
    this.traitedCollection.push(this.traitedCollection[index]);
    this.active++;
  }
  // ActionHundler(index, event) {
  //   console.log("allaho akbar ya kefer");
  //   if (event.direction === 2) {
  //     this.likeItem(index);
  //   } else if (event.direction === 4) {
  //     this.dislikeItem(index);
  //   }
  // }
}
