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
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { LoginPage } from "../login/login";
import { ProfilPage } from "../profil/profil";
import { ChilloutPage } from "../chillout/chillout";
import { MenuController } from "ionic-angular";
import { SpacesProvider } from "../../providers/spaces/spaces";
import { FriendProfilPage } from "../friend-profil/friend-profil";
import { FriendsProvider } from "../../providers/friends/friends";
import { User } from "../../models/user.interface";


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
  // animateMenu = false;
  // animateMenuClose = false;
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
  listAttendees: AngularFireList<any>;
  user:User;
  /**
   * used for animation of news slides
   */
  newSlider_indicators = {
    show_index_slide: 0,
    next_index_show: 1,
    after_index_show: 2
  };

  news = [] as any;
  connected = false;
  friends = []
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private userpovider: UserProvider,
    private friendsProvider: FriendsProvider,
    public menuCtrl: MenuController,
    private spacesProvider: SpacesProvider,
    private events: Events
  ) {


    /* Liste des espaces */
    this.espacesListRef$ = spacesProvider.listEspaces();
    // don't
    this.menuSliding.emit(false);
    // this.tabBarElement = document.querySelector(".tabbar.show-tabbar");
    // setTimeout(() => {
    //   console.log(this.tabBarElement);
    // }, 500);

    /* Liste des espaces */
    /**https://us-central1-test-3cdd6.cloudfunctions.net/helloBeego */
    // this.userpovider.getToken().then(t=>{
    //   const headers = new HttpHeaders().set('Authorization', `Bearer ${t}`);
    //   console.log("eeeee", t);
    //   this.http.get('http://localhost:5000/test-3cdd6/us-central1/helloBeego/',{headers})
    //   // .map(res => res.json())
    //   .subscribe(data => {

    //       console.log(data);

    //   });
    // });
    this.espacesListRef$ = this.database
      .list("espace")
      .valueChanges(); /*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/


    /* Liste des suggestions */
    this.suggestionListRef$ = spacesProvider.listSuggestion();

    /* Liste des connaissances */
    this.connaissanceListRef$ = this.database
      .list("connaissance")
      .valueChanges(); /*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

    /* Liste des proximités */
    this.proximiteListRef$ = spacesProvider.listProximite();

    /* Liste des proximités */
    this.invitationListRef$ = this.database
      .list("invitation")
      .valueChanges(); /*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

    /* Liste des evenements */
    /**
     * const evenements$ = this.database.list('evenement').snapshotChanges().subscribe(evenements => {
      this.evenement = evenements.map((espace, index) => {
        const e = espace.payload.val() as any;
        e.key = espace.key

        return e;
      })

      evenements$.unsubscribe();
      console.log(evenements);
      this.data = this.evenement
    });
     */
    this.database
      .list("evenement")
      .snapshotChanges()
      .subscribe(news => {
        this.news = news.map((espace, index) => {
          const e = espace.payload.val() as any;
          e.key = espace.key

          return e;
        });

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
    this.userpovider.setUserObserver(user=>{
      this.user = user;
    });
    this.friendsProvider.getSuggestedFriends(true, "mutual")
    .then((friends: any[])=>{
      this.friends=friends;
    })
    .catch(e=>{
      console.log(e);
    });
    this.connected = this.userpovider.isConnected;
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
    this.userpovider.logout();
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
  log(page, data?) {
    console.log(page, data);
  }
  navigateTo(page, data?) {
    switch (page) {
      case "FindFriendPage":
        if(this.userpovider.canEnter()){
          this.navCtrl.push(FindFriendPage);
        }
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
        console.log(data);
        this.navCtrl.push(FriendProfilPage, { uid: data });
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
        // this.animateMenu = true;
        // this.animateMenuClose = false;
        this.menuCtrl.open();
      }
    } else if (Event.offsetDirection == 2) {
      // this.animateMenu = false;
      // this.animateMenuClose = true;

      this.menuCtrl.close();
    }
  }
  collectSwiper(ev) {
    // console.log("collecting to drag");
    // console.log(ev);
    // //this.scaleDragger = this.scaleDragger - 0.2 * ev;
    // console.log(100 - 20 * ev);
    // let lober = 100 - 20 * ev;
    this.scaleDragger = 100 - 20 * ev;
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

    // console.log("swipe on the content");
    // console.log(Ev);
    // -> right
    if (Ev.direction == 4) {
      if (this.canOpenMenuBySwipe(Ev)) {
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
    // console.log("swipe on menu");
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
  canOpenMenuBySwipe(Event) {
    if(!this.connected || this.isMenuOpen){
      return false;
    }
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
    if(!this.connected){
      return
    }
    this.isMenuOpen = !this.isMenuOpen;
    this.events.publish("MenuOpen", this.isMenuOpen);
  }
  // ionViewCanLeave() {
  //   // this.userpovider.isStillConnect();
  //   // this.userpovider.isUser();
  //   return true;
  // }
  interesser(id: string) {
    this.listAttendees = this.database.list(`evenement/${id}/Attendees`);
    this.listAttendees.push({
      lastname: "Outlaw",
      name: "Adem"
    });
    console.log("ok")

  }
  sendFriendRequest(friend){
    if(this.userpovider.canEnter()){
      friend.waiting = true;
      this.friendsProvider.sendFriendRequest(friend.uid, 'request').then(t=>{
        for (let index = 0; index < this.friends.length; index++) {
          if(this.friends[index].uid === friend.uid){
            this.friends.splice(index, 1);
            break;
          }
        }
        console.log(t);
      }).catch(e=>{
        console.log(e);
      });
    }
  }
}
