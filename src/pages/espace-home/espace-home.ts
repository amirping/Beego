import { Component, Output, EventEmitter } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";

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
  @Output()
  menuSliding: EventEmitter<any> = new EventEmitter();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events
  ) {}

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
      // if (!this.isMenuOpen && this.checkerForGod(Ev) == true) {
      //   this.isMenuOpen = !this.isMenuOpen;
      //   this.menuSliding.emit(true);
      //   this.events.publish("MenuOpen", true);
      // }
      // left <-
    } else if (Ev.direction == 2) {
      // if (this.isMenuOpen) {
      //   this.isMenuOpen = !this.isMenuOpen;
      //   this.menuSliding.emit(false);
      //   this.events.publish("MenuOpen", false);
      // }
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
}
