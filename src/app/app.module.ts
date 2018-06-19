import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Dialogs } from '@ionic-native/dialogs';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { Signup1Page } from '../pages/signup1/signup1';
import { Signup2Page } from '../pages/signup2/signup2';
import { HomePage } from '../pages/home/home';
import{ProfilPage} from '../pages/profil/profil';
import{ListOfFollowsPage} from '../pages/list-of-follows/list-of-follows'
import { ParametreDuComptePage } from '../pages/parametre-du-compte/parametre-du-compte';


@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    Signup1Page,
    Signup2Page,
    HomePage,
    ProfilPage,
    ListOfFollowsPage,
    ParametreDuComptePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LandingPage,
    LoginPage,
    Signup1Page,
    Signup2Page,
    HomePage,
    ProfilPage,
    ListOfFollowsPage,
    ParametreDuComptePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
