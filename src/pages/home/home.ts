import { SpecialForYouPage } from "./../special-for-you/special-for-you";
import { SuggestPage } from "./../suggest/suggest";
import { FindFriendPage } from "./../find-friend/find-friend";
import { UserProvider } from "./../../providers/user/user";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ViewChild } from "@angular/core";
import { Slides } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { LoginPage } from "../login/login";
import { ProfilPage } from "../profil/profil";
import { ChilloutPage } from "../chillout/chillout";
import { MenuController } from "ionic-angular";
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

  search = false;

  searching() {
    this.search = !this.search;
  }

  @ViewChild(Slides) slides: Slides;
  animateMenu = false;
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
    public menuCtrl: MenuController
  ) {
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
        this.menuCtrl.open();
      }
    } else if (Event.offsetDirection == 2) {
      this.animateMenu = false;
      this.menuCtrl.close();
    }
  }
  collectSwiper(ev) {
    console.log("collecting to drag");
    console.log(ev);
  }
}
