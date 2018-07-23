import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the SpecialForYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-special-for-you",
  templateUrl: "special-for-you.html"
})
export class SpecialForYouPage {
  data: any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = [
      {
        id: 1,
        name: "Cocktail mojito",
        location: "Morjena",
        pic: "https://source.unsplash.com/600x1080/?drink"
      },
      {
        id: 1,
        name: "Cocktail mojito",
        location: "Morjena",
        pic: "https://source.unsplash.com/900x900/?cocktail,bar"
      },
      {
        id: 1,
        name: "Cocktail mojito",
        location: "Morjena",
        pic: "https://source.unsplash.com/1000x900/?choclat"
      },
      {
        id: 1,
        name: "Cocktail mojito",
        location: "Morjena",
        pic: "https://source.unsplash.com/1080x600/?bar"
      },
      {
        id: 1,
        name: "Cocktail mojito",
        location: "Morjena",
        pic: "https://source.unsplash.com/900x900/?icecream"
      },
      {
        id: 1,
        name: "Cocktail mojito",
        location: "Morjena",
        pic: "https://source.unsplash.com/900x900/?mojito,bar"
      },
      {
        id: 1,
        name: "Cocktail mojito",
        location: "Morjena",
        pic: "https://source.unsplash.com/900x900/?vodka,bar"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SpecialForYouPage");
  }
}
