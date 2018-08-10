import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

/**
 * Generated class for the ExpolreCircularPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-expolre-circular",
  templateUrl: "expolre-circular.html"
})
export class ExpolreCircularPage {
  currentView = 1;
  distance = 12;
  tastes: Array<any> = [];
  selected: Array<any> = [];
  regions: Array<any> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public _view: ViewController
  ) {
    this.tastes.push(
      { id: "0", pic: "cocktail.png", name: "cocktail" },
      { id: "1", pic: "beer.png", name: "alcahool" },
      { id: "2", pic: "hearts-and-arrow.png", name: "romantic" },
      { id: "3", pic: "coffee-cup.png", name: "coffee" },
      { id: "4", pic: "beer.png", name: "bar" },
      { id: "5", pic: "clock_1_.png", name: "promo" },
      { id: "6", pic: "cocktail.png", name: "pink" },
      { id: "7", pic: "beer.png", name: "ac/dc" },
      { id: "8", pic: "hearts-and-arrow.png", name: "lamb" },
      { id: "9", pic: "beer.png", name: "nirvana" },
      { id: "10", pic: "clock_1_.png", name: "farzit" },
      { id: "11", pic: "cocktail.png", name: "gamra" },
      { id: "12", pic: "beer.png", name: "lousif" },
      { id: "13", pic: "hearts-and-arrow.png", name: "hazard" },
      { id: "14", pic: "coffee-cup.png", name: "hattab" },
      { id: "15", pic: "cocktail.png", name: "kahla" }
    );
    this.regions.push(
      {
        id: "0",
        name: "tunis",
        selected: false
      },
      {
        id: "1",
        name: "tunis",
        selected: false
      },
      {
        id: "2",
        name: "Hell Towen",
        selected: false
      },
      {
        id: "3",
        name: "Bizerta",
        selected: false
      },
      {
        id: "4",
        name: "Sousse",
        selected: false
      },
      {
        id: "5",
        name: "Sfax",
        selected: false
      },
      {
        id: "6",
        name: "Jandouba",
        selected: false
      },
      {
        id: "7",
        name: "Ben Arous",
        selected: false
      },
      {
        id: "8",
        name: "Manouba",
        selected: false
      },
      {
        id: "9",
        name: "Kef",
        selected: false
      },
      {
        id: "10",
        name: "Beja",
        selected: false
      }
    );
  }
  //safe
  selectTaste(item) {
    if (this.selected.length < 3) {
      // the problem here s whene w reomve an element the index become != item.id
      let index = this.tastes.findIndex(it => it.id == item.id);
      if (index != -1) {
        this.selected.push(this.tastes[index]);
        this.tastes.splice(index, 1);
      }
      // console.log(this.tastes);
      // console.log(this.selected);
    }
    // show some message here
    else {
      console.log("dude we need only 3 ");
    }
  }
  // safe
  removeTaste(taste, index) {
    console.log(this.selected);
    if (taste && this.selected[index]) {
      this.tastes.push(taste);
      this.selected.splice(index, 1);
    }
  }
  swipeLeft(event) {
    // take the first five elemnt to the end of the array
    for (let i = 0; i <= 5; i++) {
      let item = this.tastes.shift();
      this.tastes.push(item);
    }
  }
  swipeRight(event) {
    for (let i = 0; i <= 5; i++) {
      let item = this.tastes.pop();
      this.tastes.splice(0, 0, item);
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExpolreCircularPage");
  }
  selectedCount() {
    let count = 0;
    this.regions.forEach(element => {
      if (element.selected) {
        count++;
      }
    });
    return count;
  }
}
