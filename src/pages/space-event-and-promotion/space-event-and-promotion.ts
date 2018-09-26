import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import * as moment from "moment";
/**
 * Generated class for the SpaceEventAndPromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-space-event-and-promotion",
  templateUrl: "space-event-and-promotion.html"
})
export class SpaceEventAndPromotionPage {
  page = "event";
  event = {
    date: moment().toISOString(),
    time: moment().toISOString(),
    titre: "",
    pic: [
      "https://source.unsplash.com/900x900/?party,neight",
      "https://source.unsplash.com/1600x900/?party,club"
    ],
    dateEnd: moment()
      .add(1, "day")
      .toISOString(),
    timeEnd: moment().toISOString(),
    place: "",
    access: ""
  };
  promotion = {
    date: moment().toISOString(),
    time: moment().toISOString(),
    titre: "",
    pic: [
      "https://source.unsplash.com/900x900/?food,resturant",
      "https://source.unsplash.com/1600x900/?party,drink"
    ],
    dateEnd: moment()
      .add(1, "day")
      .toISOString(),
    timeEnd: moment().toISOString(),
    filtre: true,
    filtreAge: {
      lower: 15,
      upper: 45
    },
    filtreSexe: { f: true, m: false },
    filtreLoc: "",
    filtreLocLst:[
      {name:"zahrouni fllower city",val:'zfc'},
      { name: "El nasser 2", val: 'nas2' },
      { name: "Bardo", val: 'bardo' }
    ]
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SpaceEventAndPromotionPage");
  }
}
