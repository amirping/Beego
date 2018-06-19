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

@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    Signup1Page,
    Signup2Page,
    HomePage,
    ChilloutPage
  ],
  imports: [BrowserModule,Ionic2RatingModule, IonicModule.forRoot(MyApp)],
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
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
