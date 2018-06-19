import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShoppingItem } from '../../models/shopping-items/shopping-items.interface';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the AddShoppingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-shopping',
  templateUrl: 'add-shopping.html',
})
export class AddShoppingPage {

  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$: AngularFireList<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , private database: AngularFireDatabase) {
    const minDate: string = new Date().toISOString().substring(0, 10)
    this.shoppingItem.dateevt = new Date()
    this.shoppingItemRef$ = this.database.list('shopping-list');
  }


  AddShoppingItem(choppingItem: ShoppingItem) {
    console.log(this.shoppingItem.dateevt)
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber),
      dateevt: this.shoppingItem.dateevt

    });

    //réinitialiser
    // this.shoppingItem ={} as ShoppingItem;
    // redirection page précédente
    this.navCtrl.pop();
  }
}
