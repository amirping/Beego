import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SpaceEventAndPromotionPage");
  }
}
