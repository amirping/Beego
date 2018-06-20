import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the AcceuilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-acceuil',
  templateUrl: 'acceuil.html',
})
export class AcceuilPage {
  @ViewChild(Slides) slides: Slides;
  evenementListRef$: Observable<any[]>;
  espacesListRef$: Observable<any[]>;


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase,
    ) {
      /* Liste des espaces */
      this.espacesListRef$ = this.database.list('espace').snapshotChanges().map(changes => {
        return changes.map( c =>( {key: c.payload.key, ...c.payload.val()}))
      });
      /* Liste des événements */
      this.evenementListRef$ = this.database.list('evenement').snapshotChanges().map(changes => {
        return changes.map( c =>( {key: c.payload.key, ...c.payload.val()}))
      });
      

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilPage');
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }


}
