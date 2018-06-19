
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { LandingPage } from "../pages/landing/landing";
import { LoginPage } from "../pages/login/login";
import { Signup1Page } from "../pages/signup1/signup1";
import { Signup2Page } from "../pages/signup2/signup2";
import { HomePage } from "../pages/home/home";
import { ChilloutPage } from "../pages/chillout/chillout";
import { Ionic2RatingModule } from 'ionic2-rating';



import { HttpClient, HttpClientModule } from "@angular/common/http";



import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireStorageModule } from "angularfire2/storage";
// import { AngularFirestoreModule } from "angularfire2/firestore";

import { UserProvider } from '../providers/user/user';


const firebaseConfig = {
  apiKey: "AIzaSyCzVhpaEtjnl7CN6A5WqDe7f5yU324UWmk",
  authDomain: "test-3cdd6.firebaseapp.com",
  databaseURL: "https://test-3cdd6.firebaseio.com",
  projectId: "test-3cdd6",
  storageBucket: "test-3cdd6.appspot.com",
  messagingSenderId: "812347008332"
};


@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    Signup1Page,
    Signup2Page,
    ChilloutPage
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    HttpClientModule,
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    Signup1Page,
    Signup2Page,
    HomePage,
    ChilloutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
