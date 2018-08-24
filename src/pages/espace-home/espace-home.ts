import { Component, Output, EventEmitter } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  ModalController
} from "ionic-angular";
import { UserSwitcherPage } from "../user-switcher/user-switcher";
import { SpaceEventsPage } from "../space-events/space-events";

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
  collectionSensor: Array<any> = [];
  collectionDatabase: Array<any> = [];
  collectionBuisness: Array<any> = [];
  /**
   * 0 -> collectionAct // Default is 0
   * 1 -> collectionSensor
   * 2 -> collectionDatabase
   * 3 -> collectionBuisness
   */
  showingData = "0";

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
        pic: "http://i.pravatar.cc/60"
      },
      {
        id: 1,
        user: "Fathi el jazar",
        location: "Shity Place",
        time: "1 min",
        pic: "http://i.pravatar.cc/60"
      },
      {
        id: 1,
        user: "Hmed gobiaa",
        location: "No where",
        time: "2 min",
        pic: "http://i.pravatar.cc/60"
      },
      {
        id: 1,
        user: "yosri lahwel",
        location: "Sigma Cof",
        time: "3 min",
        pic: "http://i.pravatar.cc/60"
      },
      {
        id: 1,
        user: "fedi el boti",
        location: "Sin Cof",
        time: "30 min",
        pic: "http://i.pravatar.cc/60"
      },
      {
        id: 1,
        user: "folen zarga",
        location: "Elder Towen",
        time: "1 h",
        pic: "http://i.pravatar.cc/60"
      },
      {
        id: 1,
        user: "chabroba lwled",
        location: "Green Hill",
        time: "2 h",
        pic: "http://i.pravatar.cc/60"
      },
      {
        id: 1,
        user: "folen ben folen",
        location: "Ospen",
        time: "2 h",
        pic: "http://i.pravatar.cc/60"
      },
      {
        id: 1,
        user: "some name",
        location: "Shadow Sun",
        time: "1 day",
        pic: "http://i.pravatar.cc/60"
      },
      {
        id: 1,
        user: "ali ali",
        location: "Blue",
        time: "1 day",
        pic: "http://i.pravatar.cc/60"
      }
    );
    this.collectionBuisness = this.collectionAct;
    this.collectionSensor = this.collectionAct;
    this.collectionDatabase = this.collectionAct;
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
  sendTo(page) {
    switch (page) {
      case "event": {
        console.log("zzeeiii");
        this.navCtrl.push(SpaceEventsPage);
        break;
      }
      default:
        break;
    }
  }
}
