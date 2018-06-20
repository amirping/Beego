
import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { Dialogs } from '@ionic-native/dialogs';
import { ProfilPage } from '../pages/profil/profil';
import { ListOfFollowsPage } from '../pages/list-of-follows/list-of-follows'
import { ParametreDuComptePage } from '../pages/parametre-du-compte/parametre-du-compte';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { EditShoppingItemPage } from '../pages/edit-shopping-item/edit-shopping-item';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { EspacesPage } from '../pages/espaces/espaces';
import { EvenementPage } from '../pages/evenement/evenement';
import { MyApp } from "./app.component";
import { LandingPage } from "../pages/landing/landing";
import { LoginPage } from "../pages/login/login";
import { Signup1Page } from "../pages/signup1/signup1";
import { Signup2Page } from "../pages/signup2/signup2";
import { HomePage } from "../pages/home/home";
import { ChilloutPage } from "../pages/chillout/chillout";
import { Ionic2RatingModule } from 'ionic2-rating';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireStorageModule } from "angularfire2/storage";
// import { AngularFirestoreModule } from "angularfire2/firestore";

import { UserProvider } from '../providers/user/user';



@NgModule({
  declarations: [
    MyApp,
    LandingPage,
    LoginPage,
    Signup1Page,
    Signup2Page,
    ChilloutPage,
    HomePage,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage,
    AcceuilPage,
    EspacesPage,
    EvenementPage,
    ProfilPage,
    ListOfFollowsPage,
    ParametreDuComptePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Initialize angularfire 
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
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
    ProfilPage,
    ListOfFollowsPage,
    ParametreDuComptePage,
    ChilloutPage,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage,
    AcceuilPage,
    EspacesPage,
    EvenementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Dialogs,
    UserProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
