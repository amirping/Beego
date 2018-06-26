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
import { UserProvider } from "../../providers/user/user";

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

  @ViewChild(Slides) slides: Slides;

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

  news = [
    {
      id: 1,
      name: "EVENT - some names",
      place: "Yuka, KEF",
      pic:
        "https://i.pinimg.com/originals/fd/5d/8e/fd5d8e333fcccbc366f390902e69ddd7.jpg"
    },
    {
      id: 2,
      name: "EVENT - some names",
      place: "Yuka, KEF",
      pic: "https://blog.spoongraphics.co.uk/wp-content/uploads/2016/05/25.jpg"
    },
    {
      id: 3,
      name: "EVENT - some names",
      place: "Yuka, KEF",
      pic: "https://piktochart.com/wp-content/uploads/2018/01/4.jpg"
    },
    {
      id: 4,
      name: "EVENT - some names",
      place: "Yuka, KEF",
      pic:
        "https://st2.depositphotos.com/4312111/7742/v/950/depositphotos_77425808-stock-illustration-retro-poster-summer-party-and.jpg"
    },
    {
      id: 5,
      name: "EVENT - some names",
      place: "Yuka, KEF",
      pic:
        "https://st2.depositphotos.com/3391779/10821/v/950/depositphotos_108216990-stock-illustration-beach-party-flyer-or-poster.jpg"
    },
    {
      id: 5,
      name: "EVENT - some names",
      place: "Yuka, KEF",
      pic:
        "https://st2.depositphotos.com/3608591/11258/v/950/depositphotos_112589986-stock-illustration-tropic-summer-beach-party-tropic.jpg"
    },
    {
      id: 6,
      name: "EVENT - some names",
      place: "Yuka, KEF",
      pic:
        "https://st2.depositphotos.com/4813335/11049/v/950/depositphotos_110494828-stock-illustration-club-party-flyer-hello-summer.jpg"
    }
  ];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private userpovider: UserProvider
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
    this.evenementListRef$ = this.database
      .list("evenement")
      .valueChanges() /*.map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      })*/;
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
    this.navCtrl.push(ChilloutPage, { category: "chillout" });
  }
  navigateToBeautyage() {
    this.navCtrl.push(ChilloutPage, { category: "beauty" });
  }
  navigateToShoppingPage() {
    this.navCtrl.push(ChilloutPage, { category: "shopping" });
  }
}
