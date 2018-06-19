import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

/**
 * Generated class for the EvenementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evenement',
  templateUrl: 'evenement.html',
})
export class EvenementPage {
  evenementListRef$: Observable<any[]>;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase
    ) {
      this.evenementListRef$ = this.database.list('evenement').snapshotChanges().map(changes => {
        return changes.map( c => {
          const data = c.payload.val();
          data.key = c.payload.key;
          return data;
        })
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvenementPage');
  }

}
