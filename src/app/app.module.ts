import { HeadlinesPage } from "./../pages/headlines/headlines";
import { SpecialForYouPage } from "./../pages/special-for-you/special-for-you";
import { SuggestPage } from "./../pages/suggest/suggest";
import { FindFriendPage } from "./../pages/find-friend/find-friend";
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Dialogs } from "@ionic-native/dialogs";

import { MyApp } from "./app.component";
import { FIREBASE_CREDENTIALS } from "./firebase.credentials";

import { LandingPage } from "../pages/landing/landing";
import { LoginPage } from "../pages/login/login";
import { SignupStep1Page } from "../pages/signup_step1/signup_step1";
import { SignupStep2Page } from "../pages/signup_step2/signup_step2";
import { HomePage } from "../pages/home/home";
import { ProfilPage } from "../pages/profil/profil";
import { ListOfFollowsPage } from "../pages/list-of-follows/list-of-follows";
import { SettingProfilPage } from "../pages/setting_profil/setting_profil";
import { ChilloutPage } from "../pages/chillout/chillout";

import { BlockPage} from '../pages/block/block'
import {SettingProfil2Page } from '../pages/setting-profil2/setting-profil2';
import {SettingSecurityPage} from '../pages/setting-security/setting-security'
import {PersonalHistoryPage} from '../pages/personal-history/personal-history';
import {FriendProfilPage } from '../pages/friend-profil/friend-profil';
import {FriendFollowPage} from '../pages/friend-follow/friend-follow';
import { PopupPage} from '../pages/popup/popup';
import {EventPage} from '../pages/event/event';
import {UpdateProgramPage} from "../pages/update-program/update-program";
import {DislikeListPage} from '../pages/dislike-list/dislike-list';
import {SpaceDetailPage} from '../pages/space-detail/space-detail';

import { Ionic2RatingModule } from "ionic2-rating";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { SearchRadioPipe } from "../providers/user/pipe_search";

import { TabsPage } from "../pages/tabs/tabs";
// import { AngularFireStorageModule } from "angularfire2/storage";
// import { AngularFirestoreModule } from "angularfire2/firestore";

import { UserProvider } from "../providers/user/user";
import { SpacesProvider } from '../providers/spaces/spaces';
import { EvenementPage } from "../pages/evenement/evenement";


@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    SignupStep1Page,
    SignupStep2Page,
    ChilloutPage,
    ProfilPage,
    ListOfFollowsPage,
    SettingProfilPage,
    HomePage,
    BlockPage,
    SettingProfil2Page,
    SearchRadioPipe,
    SettingSecurityPage,
    TabsPage,
    FindFriendPage,

    SuggestPage,
    SpecialForYouPage,
    HeadlinesPage,


    PersonalHistoryPage,
    FriendProfilPage,
    FriendFollowPage,
    PopupPage,
    EventPage,
    EvenementPage,
    UpdateProgramPage,
    DislikeListPage,
    SpaceDetailPage



  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Initialize angularfire
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    // AngularFireStorageModule,
    Ionic2RatingModule,
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    SignupStep1Page,
    SignupStep2Page,
    ProfilPage,
    ListOfFollowsPage,
    SettingProfilPage,
    ChilloutPage,
    HomePage,
    BlockPage,
    SettingProfil2Page,
    SettingSecurityPage,
    TabsPage,
    FindFriendPage,

    SuggestPage,
    SpecialForYouPage,
    HeadlinesPage,


    PersonalHistoryPage,
    FriendProfilPage,
    FriendFollowPage,
    PopupPage,
    EventPage,

    EvenementPage,

    UpdateProgramPage,
    DislikeListPage,
    SpaceDetailPage


  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    UserProvider,
    SearchRadioPipe,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SpacesProvider

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
