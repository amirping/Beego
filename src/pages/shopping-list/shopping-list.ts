import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { AddShoppingPage } from '../add-shopping/add-shopping';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { ShoppingItem } from '../../models/shopping-items/shopping-items.interface';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { EditShoppingItemPage } from '../edit-shopping-item/edit-shopping-item'

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {


  shopListRef$: Observable<any[]>;
  shoppingListRef$: Observable<any[]>;
  shoppListRef$: Observable<any[]>;
  rechercher$: Observable<any[]>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase,
    private actionSheetCtrl: ActionSheetController) {
    //date d'aujourd'hui
    const myDate: string = new Date().toISOString().substring(0, 10)
    //date de demain
    const demain: Date = new Date()
    const myDatedemain: string = new Date(demain.getTime() + (1000 * 60 * 60 * 24)).toISOString().substring(0, 10);

    /*
  pointer shopListRef$ sur Firebase->'shopping-list' node
  faire le map pour avoir accès au clé 
  */
    // lister tout
    this.shopListRef$ = this.database.list('shopping-list').snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.val();
        data.key = c.payload.key;
        return data;
      });


      // return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    // événements du jour
    this.shoppingListRef$ = this.database.list('shopping-list', ref => ref.orderByChild('dateevt').equalTo(myDate)).snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.val();
        data.key = c.payload.key;
        return data;
      });



      // return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    //événements futurs
    this.shoppListRef$ = this.database.list('shopping-list', ref => ref.orderByChild('dateevt').startAt(myDatedemain)).snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.val();
        data.key = c.payload.key;
        return data;
      });



      // return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }
  // Méthode rechercher
  search(nom: string) {
    console.log(nom);

    this.rechercher$ = this.database.list('shopping-list', ref => ref.orderByChild('itemName').equalTo(nom)).snapshotChanges().map(changes => {
      return changes.map(c => {
        const data = c.payload.val();
        data.key = c.payload.key;
        return data;
      });

      // return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));

    });
  }
  /*
  Séléctionner le shopping item
  Editer le shopping item
  Supprimer le shopping item
  Cancel
  */
  selectShoppingItem(shoppingItem: ShoppingItem) {
    this.actionSheetCtrl.create({
      title: shoppingItem.itemName,
      buttons: [
        {
          text: 'Edit',
          handler: () => {
            //send the user to the editshoppingitem page and pass the key as a parameter
            this.navCtrl.push(EditShoppingItemPage, { shoppingItemId: shoppingItem.key });
            /*
            
            */
          }
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            // delete the current shopping item
            this.database.object('shopping-list/' + shoppingItem.key).remove()
            console.log(shoppingItem.key)
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log("cancel button selected");
          }
        }
      ]
    }).present()

  }

  navigateToAddShoppingPage() {
    //navigate to the add shopping page
    this.navCtrl.push(AddShoppingPage)
  }


}
