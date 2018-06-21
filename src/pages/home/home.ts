import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;

  evenementListRef$: Observable<any[]>;
  espacesListRef$: Observable<any[]>;
  promotionListRef$: Observable<any[]>;
  suggestionListRef$: Observable<any[]>;
  connaissanceListRef$: Observable<any[]>;
  proximiteListRef$: Observable<any[]>;
  invitationListRef$: Observable<any[]>;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase,
    ) {
      /* Liste des espaces */
      this.espacesListRef$ = this.database.list('espace').valueChanges();/*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

      /* Liste des suggestions */
      this.suggestionListRef$ = this.database.list('suggestion').valueChanges();/*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

      /* Liste des connaissances */
      this.connaissanceListRef$ = this.database.list('connaissance').valueChanges();/*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

      /* Liste des proximités */
      this.proximiteListRef$ = this.database.list('proximite').valueChanges();/*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

      /* Liste des proximités */
      this.invitationListRef$ = this.database.list('invitation').valueChanges();/*map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });*/

        /* Liste des evenements */
      this.evenementListRef$ = this.database.list('evenement').valueChanges()/*.map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      })*/;
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceuilPage');
  }
  promotionClicked(){
    /* Liste des promotions */
    this.evenementListRef$ = this.database.list('promotion').valueChanges()/*.map(changes => {
      return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
    })*/;
  }
  evenementClicked(){
    /* Liste des evenements */
    this.evenementListRef$ = this.database.list('evenement').valueChanges()/*.map(changes => {
      return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
    })*/;
  }


}
