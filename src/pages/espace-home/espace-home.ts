import { Component, Output, EventEmitter } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  ModalController
} from "ionic-angular";
import { UserSwitcherPage } from "../user-switcher/user-switcher";

/**
 * Generated class for the EspaceHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-espace-home",
  templateUrl: "espace-home.html"
})
export class EspaceHomePage {
  search = false;
  animateMenu = false;
  animateMenuClose = false;
  isMenuOpen = false;
  userSelected = 1;
  spaceState = 0;
  collectionAct: Array<any> = [];
  howMuch = 4;
  @Output()
  menuSliding: EventEmitter<any> = new EventEmitter();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events,
    private modalCtrl: ModalController
  ) {
    this.collectionAct.push(
      {
        id: 1,
        user: "Mohamed ezdin",
        location: "Le Bon Coin",
        time: "50 sec",
        pic: ""
      },
      {
        id: 1,
        user: "Fathi el jazar",
        location: "Shity Place",
        time: "1 min",
        pic: ""
      },
      {
        id: 1,
        user: "Hmed gobiaa",
        location: "No where",
        time: "2 min",
        pic: ""
      },
      {
        id: 1,
        user: "yosri lahwel",
        location: "Sigma Cof",
        time: "3 min",
        pic: ""
      },
      {
        id: 1,
        user: "fedi el boti",
        location: "Sin Cof",
        time: "30 min",
        pic: ""
      },
      {
        id: 1,
        user: "folen zarga",
        location: "Elder Towen",
        time: "",
        pic: "1 h"
      },
      {
        id: 1,
        user: "chabroba lwled",
        location: "Green Hill",
        time: "2 h",
        pic: ""
      },
      {
        id: 1,
        user: "folen ben folen",
        location: "Ospen",
        time: "2 h",
        pic: ""
      },
      {
        id: 1,
        user: "some name",
        location: "Shadow Sun",
        time: "1 day",
        pic: ""
      },
      { id: 1, user: "ali ali", location: "Blue", time: "1 day", pic: "" }
    );
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EspaceHomePage");
  }

  contentSwipe(Ev) {
    // if (who) {
    //   console.log("from hell we cum");
    //   return false;
    // }

    console.log("swipe on the content");
    console.log(Ev);
    // -> right
    if (Ev.direction == 4) {
      this.isMenuOpen = !this.isMenuOpen;
      this.menuSliding.emit(true);
      this.events.publish("MenuOpen", true);

      // left <-
    } else if (Ev.direction == 2) {
      if (this.isMenuOpen) {
        this.isMenuOpen = !this.isMenuOpen;
        this.menuSliding.emit(false);
        this.events.publish("MenuOpen", false);
      }
    }
  }
  menuSwipe(Ev) {
    console.log("swipe on menu");
    if (Ev.direction == 4) {
      return false;
      // left <-
    } else if (Ev.direction == 2) {
      if (this.isMenuOpen) {
        this.isMenuOpen = !this.isMenuOpen;
        this.menuSliding.emit(false);
        this.events.publish("MenuOpen", false);
      }
    }
  }
  swipeByButton() {
    this.isMenuOpen = !this.isMenuOpen;
    this.events.publish("MenuOpen", this.isMenuOpen);
  }
  switchUser() {
    let modal = this.modalCtrl.create(
      UserSwitcherPage,
      {},
      { cssClass: "modal-fullscreen" }
    );
    modal.present();
  }
}
