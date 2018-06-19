import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { ShoppingListPage } from '../pages/shopping-list/shopping-list';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { AddShoppingPage } from '../pages/add-shopping/add-shopping';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { EditShoppingItemPage } from '../pages/edit-shopping-item/edit-shopping-item';
import { AcceuilPage } from '../pages/acceuil/acceuil';
import { EspacesPage } from '../pages/espaces/espaces';
import { EvenementPage } from '../pages/evenement/evenement';
@NgModule({
  declarations: [
    MyApp,
    ShoppingListPage,
    AddShoppingPage,
    EditShoppingItemPage,
    AcceuilPage,
    EspacesPage,
    EvenementPage
    ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    //Initialize angularfire 
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    // Import the angularfiredatabaseModule to use DB interactions
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
