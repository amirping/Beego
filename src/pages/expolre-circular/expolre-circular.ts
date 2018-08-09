import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  }
  selectTaste(id) {
    this.selected.push(this.tastes[id]);
    this.tastes.splice(id, 0);
    console.log(this.tastes);
  }
  removeTaste(taste) {
    this.tastes.push(taste);
    this.selected.splice(taste.id, 0);
  }
  swipeLeft(event) {}
  swipeRight(event) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ExpolreCircularPage");
  }
}
