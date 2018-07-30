import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";

/*
  Generated class for the SpacesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpacesProvider {


  
  espacesList: Observable<any[]>;
  evenementList: Observable<any[]>;
  promotionList: Observable<any[]>;
  suggestionList: Observable<any[]>;
  proximiteList: Observable<any[]>;
  categories : Observable<any[]>;
  pagesData : any = [];
  category : string;
  constructor(
    
    private database: AngularFireDatabase

  ) {
    console.log('Hello SpacesProvider Provider');
  }

  listEspaces(){
    this.espacesList = this.database
      .list("espace")
      .snapshotChanges().map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      });
      return this.espacesList;

  }

  listEvenement(){
    this.evenementList = this.database
      .list("evenement")
      .valueChanges()
      return this.evenementList;
      
  }
  listPromotion(){
    this.promotionList = this.database
    .list("promotion")
    .valueChanges()
    return this.evenementList;


  }
  listSuggestion(){
    this.suggestionList = this.database
    .list("suggestion")
    .valueChanges()
    return this.suggestionList;

  }
  listProximite(){
    this.proximiteList = this.database
    .list("proximite")
    .valueChanges()
    return this.proximiteList;
  }
  listCategoriesChillout(cat:string){
    
    
   
    this.categories = this.database
    .list(`category/${cat}`)
    .valueChanges();
   
   
    return this.categories;
  }
  listPagesDataChillout(cat:string){
    this.pagesData = this.database
      .list("espace",item => item.orderByChild('espaceCategorie').equalTo(cat))
      .snapshotChanges().map(changes => {
        return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
      }); 
      return this.pagesData;
  }

}
