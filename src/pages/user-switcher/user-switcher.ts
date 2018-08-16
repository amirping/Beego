import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";

/**
 * Generated class for the UserSwitcherPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-user-switcher",
  templateUrl: "user-switcher.html"
})
export class UserSwitcherPage {
  spaceCol: Array<any> = [];
  selectedSpace = 1;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private _viewCtrl: ViewController
  ) {
    this.spaceCol.push(
      { id: "1", name: "Le Bon Coin Bardo" },
      { id: "2", name: "Le Bon Coin Manzeh" },
      { id: "3", name: "Le Bon Coin ezzahrouni" },
      { id: "4", name: "Le Bon Coin Mohamed V" }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UserSwitcherPage");
  }
  setSelected(item) {
    //send back data to main app
    this._viewCtrl.dismiss({ item });
  }
}
