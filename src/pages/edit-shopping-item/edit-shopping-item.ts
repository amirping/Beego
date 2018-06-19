import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-items/shopping-items.interface';
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {

  
  shoppingItem = {} as ShoppingItem;
  shoppingItemRef$ : AngularFireObject<any>;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private database : AngularFireDatabase
  ) {

    //capture the id as navparameter
    const shoppingItemId = this.navParams.get('shoppingItemId');

    //log out the id
    console.log(shoppingItemId);

    // set the scope of ourfirebase equal to selected item
    this.shoppingItemRef$ = this.database.object('shopping-list/'+shoppingItemId);

    // set to the object and assign the result to this.shoppingitem
    this.shoppingItemRef$.valueChanges().subscribe(
      shoppingItem => this.shoppingItem = shoppingItem);

  }

  editShoppingItem(shoppingItem : ShoppingItem){
    this.shoppingItemRef$.update(shoppingItem);
    this.navCtrl.pop();
  }

  

}
