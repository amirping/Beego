import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Slides } from "ionic-angular";

/**
 * Generated class for the ChilloutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chillout",
  templateUrl: "chillout.html"
})
export class ChilloutPage {
  searchText: string = "";
  slides: Array<string> = [];
  indexPage = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /**
     * slides on cover : put all images here and will auto displayed
     */
    this.slides.push("../../assets/imgs/chilloutPage_img/sug1.png");
    this.slides.push("../../assets/imgs/chilloutPage_img/sug1.png");
    this.slides.push("../../assets/imgs/chilloutPage_img/sug1.png");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ChilloutPage");
  }
}
