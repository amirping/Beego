import { HeadlinesPage } from "./../headlines/headlines";
import { SpecialForYouPage } from "./../special-for-you/special-for-you";
import { SuggestPage } from "./../suggest/suggest";
import { FindFriendPage } from "./../find-friend/find-friend";
import { UserProvider } from "./../../providers/user/user";
import { Component, Output, EventEmitter, ElementRef } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Tabs,
  Events
} from "ionic-angular";
import { ViewChild } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { LoginPage } from "../login/login";
import { ProfilPage } from "../profil/profil";
import { ChilloutPage } from "../chillout/chillout";
import { MenuController } from "ionic-angular";
import { FriendProfilPage } from "../friend-profil/friend-profil";
import { MyTastesPage } from "../my-tastes/my-tastes";
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  profil() {
    this.navCtrl.push(ProfilPage);
  }
  scaleDragger = 100;
  DynamicHi = { height: this.scaleDragger + " vh" };
  search = false;
  animateMenu = false;
  animateMenuClose = false;
  isMenuOpen = false;
  @Output() menuSliding: EventEmitter<any> = new EventEmitter();
  searching() {
    this.search = !this.search;
  }
  evenementListRef$: Observable<any[]>;
  espacesListRef$: Observable<any[]>;
  promotionListRef$: Observable<any[]>;
  suggestionListRef$: Observable<any[]>;
  connaissanceListRef$: Observable<any[]>;
  proximiteListRef$: Observable<any[]>;
  invitationListRef$: Observable<any[]>;
  allNewsData: any;
  ratingStatic = 4;
  index_news: any = "events";
  /**
   * used for animation of news slides
   */
  newSlider_indicators = {
    show_index_slide: 0,
    next_index_show: 1,
    after_index_show: 2
  };

  news = [] as any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private userpovider: UserProvider,
    public menuCtrl: MenuController,
    private events: Events
  ) {
    // don't
    this.menuSliding.emit(false);
    // this.tabBarElement = document.querySelector(".tabbar.show-tabbar");
    // setTimeout(() => {
    //   console.log(this.tabBarElement);
    // }, 500);

    /* Liste des espaces */
    this.espacesListRef$ = this.database
      .list("espace")
      .valueChanges(); /*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

    /* Liste des suggestions */
    this.suggestionListRef$ = this.database
      .list("suggestion")
      .valueChanges(); /*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

    /* Liste des connaissances */
    this.connaissanceListRef$ = this.database
      .list("connaissance")
      .valueChanges(); /*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

    /* Liste des proximités */
    this.proximiteListRef$ = this.database
      .list("proximite")
      .valueChanges(); /*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

    /* Liste des proximités */
    this.invitationListRef$ = this.database
      .list("invitation")
      .valueChanges(); /*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

    /* Liste des evenements */
    this.database
      .list("evenement")
      .valueChanges()
      .subscribe(news => {
        this.news = news;
        console.log(this.news);
      }) /*.map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      })*/;
    // this.news = this.evenementListRef$;
    this.promotionListRef$ = this.database
      .list("promotion")
      .valueChanges() /*.map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      })*/;
    this.allNewsData = this.evenementListRef$;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AcceuilPage");
  }
  promotionClicked() {
    /* Liste des promotions */
    this.evenementListRef$ = this.database
      .list("promotion")
      .valueChanges() /*.map(changes => {
      return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
    })*/;
  }
  evenementClicked() {
    /* Liste des evenements */
    this.evenementListRef$ = this.database
      .list("evenement")
      .valueChanges() /*.map(changes => {
      return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
    })*/;
  }
  changeNewsTo(type) {
    this.index_news = type;
    if (type === "events") {
      this.allNewsData = this.evenementListRef$;
    } else {
      this.allNewsData = this.promotionListRef$;
    }
  }
  // getNextShow() {
  //   let index;
  //   if (this.show_index_slide < this.news.length - 1) {
  //     index  = this.show_index_slide + 1;
  //   } else {
  //     index = 0;
  //   }
  //   console.log(index);
  //   return index;
  // }
  // getAfterNextShow() {
  //   let index ;
  //   if (this.getNextShow() < this.news.length - 1) {
  //     index =  this.getAfterNextShow() + 1;
  //   } else {
  //     index = 0;
  //   }
  //   console.log(index);
  //   return index;
  // }
  nextSlide() {
    if (this.newSlider_indicators.show_index_slide < this.news.length - 1) {
      this.newSlider_indicators.show_index_slide++;
    } else {
      this.newSlider_indicators.show_index_slide = 0;
    }
    // make next ready
    if (this.newSlider_indicators.show_index_slide == this.news.length - 1) {
      this.newSlider_indicators.next_index_show = 0;
    } else {
      this.newSlider_indicators.next_index_show =
        this.newSlider_indicators.show_index_slide + 1;
    }
    // make after ready
    if (this.newSlider_indicators.next_index_show == this.news.length - 1) {
      this.newSlider_indicators.after_index_show = 0;
    } else {
      this.newSlider_indicators.after_index_show =
        this.newSlider_indicators.next_index_show + 1;
    }
  }
  swipeEvent(Event) {
    if (Event.type == "swipe") {
      if (Event.offsetDirection == 2) {
        this.nextSlide();
      }
    }
    console.log(Event);
  }

  logout() {
    this.navCtrl.push(LoginPage);
    this.userpovider.logOut();
  }
  navigateToChilloutPage() {
    console.log("545");
    this.navCtrl.push(ChilloutPage, { category: "chillout" });
  }
  navigateToBeautyPage() {
    console.log("545");
    this.navCtrl.push(ChilloutPage, { category: "beauty" });
  }
  navigateToShoppingPage() {
    console.log("545");
    this.navCtrl.push(ChilloutPage, { category: "shopping" });
  }
  navigateTo(page) {
    switch (page) {
      case "FindFriendPage":
        this.navCtrl.push(FindFriendPage);
        break;
      case "suggest":
        this.navCtrl.push(SuggestPage);
        break;
      case "specialForYou":
        this.navCtrl.push(SpecialForYouPage);
        break;
      case "headlines":
        this.navCtrl.push(HeadlinesPage, { category: "evenement" });
        break;
      case "FriendProfil":
        this.navCtrl.push(FriendProfilPage);
        break;
      case "MyTastes":
        this.navCtrl.push(MyTastesPage);
        break;
      default:
        break;
    }
  }
  handelChange(Event) {
    console.log(Event);
    if (this.menuCtrl.isAnimating) {
      console.log("animation there ");
    }
    if (Event.offsetDirection == 4) {
      if (!this.menuCtrl.isOpen()) {
        this.animateMenu = true;
        this.animateMenuClose = false;
        this.menuCtrl.open();
      }
    } else if (Event.offsetDirection == 2) {
      this.animateMenu = false;
      this.animateMenuClose = true;

      this.menuCtrl.close();
    }
  }
  collectSwiper(ev) {
    console.log("collecting to drag");
    console.log(ev);
    //this.scaleDragger = this.scaleDragger - 0.2 * ev;
    console.log(100 - 20 * ev);
    let lober = 100 - 20 * ev;
    this.scaleDragger = lober;
  }
  setContentStyle() {
    let margintop = (100 - this.scaleDragger) / 2;
    let styles = {
      height: this.scaleDragger + "vh",
      "margin-top": margintop + "vh"
    };
    return styles;
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
      if (!this.isMenuOpen && this.checkerForGod(Ev) == true) {
        this.isMenuOpen = !this.isMenuOpen;
        this.menuSliding.emit(true);
        this.events.publish("MenuOpen", true);
      }
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
  dummySwipe(Ev) {
    // tell u daddy that i shout u motherfucker
    // fuck who care ?
    // ok listen it look crazy but this is make it work so DON'T try to change it
    console.log("Hello mother fucker");
    //Ev.stopPropagation();

    //return false;
  }
  checkerForGod(Event) {
    let seekhere = Event.target;
    while (seekhere.offsetParent && seekhere.offsetParent.length != 0) {
      let bubbleofDevil = seekhere.offsetParent;
      if (
        bubbleofDevil.nodeName == "ION-SLIDE" ||
        bubbleofDevil.classList.contains("slider") ||
        bubbleofDevil.classList.contains("notYou")
      ) {
        return false;
      } else if (
        bubbleofDevil.nodeName == "ION-COL" ||
        bubbleofDevil.nodeName == "ION-ROW"
      ) {
        return true;
      }
      seekhere = bubbleofDevil;
    }
  }
  swipeByButton() {
    this.isMenuOpen = !this.isMenuOpen;
    this.events.publish("MenuOpen", this.isMenuOpen);
  }
}
