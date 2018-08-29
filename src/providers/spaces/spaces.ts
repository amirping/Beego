import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { AngularFireDatabase } from "angularfire2/database";
import { UserProvider } from '../user/user';

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
    private http : HttpClient,
    private database: AngularFireDatabase,
    private userProvider: UserProvider

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
  moyenneRating(cat:string,idEspace){
    let moyenne = 0;

    this.pagesData = this.database
    .list('reviews',item => item.orderByChild('idEspace').equalTo(idEspace))
    .valueChanges().subscribe((data: any) => {

    })
  return moyenne;
  }
  followSpace(idEspace){
    const idToken = this.userProvider.idToken
    const params = new HttpParams().set('space',idEspace)
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.post('http://localhost:5000/test-3cdd6/us-central1/beegoapi/followspace', params ,{headers})
    .subscribe(data=> {
      console.log(data)
    })
  }
  reviewSpace(idEspace,description,rating){
    const idToken = this.userProvider.idToken
    const params = new HttpParams().set('space',idEspace).set('description',description).set('rating',rating)
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.post('http://localhost:5000/test-3cdd6/us-central1/beegoapi/reviewspace', params ,{headers})
    .subscribe(data=> {
      console.log(data)
    })
  }
  listSpecificTastes(pageType,callBack){
    const idToken = this.userProvider.idToken
    const params = new HttpParams().set('display',pageType)
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/specifictastes' ,{headers,params})
    .subscribe((data:any) =>{
      console.log('hedhi Specific Tastes', data)
      callBack(data)
    })
  }
  getSpace(idEspace,callBack){
    const idToken = this.userProvider.idToken
    const params = new HttpParams().set('space',idEspace)
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/getspace' ,{headers,params})
    .subscribe((data:any) =>{
      console.log('hedhi espace w review user', data)
      callBack(data)
    })
  }
  getSpaces(callBack){
    const idToken = this.userProvider.idToken
   
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/getspaces' ,{headers})
    .subscribe((data:any) =>{
      console.log('hedhouma les information mtaa l espace', data)
      callBack(data)
    })
  }
  getUser(callBack){
    const idToken = this.userProvider.idToken
   
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/getUser' ,{headers})
    .subscribe((data:any) =>{
      console.log('hedhouma les information mtaa l user', data)
      callBack(data)
    })
  }
  contactSpace(idEspace,message){
    const idToken = this.userProvider.idToken
    const params = new HttpParams().set('space',idEspace).set('msg',message)
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.post('http://localhost:5000/test-3cdd6/us-central1/beegoapi/contactspace', params ,{headers})
    .subscribe(data=> {
      console.log(data)
    })
  }
  getSuggestedSpaces(callBack){
    const idToken = this.userProvider.idToken
    
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/getsuggestedspaces' ,{headers})
    .subscribe(data=> {
      console.log(data)
      callBack(data)
    })
  }
  getSpecialite(idEspace,callBack){
    const idToken = this.userProvider.idToken
    const params = new HttpParams().set("space",idEspace)
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/getspecialite' ,{headers,params})
    .subscribe(data=> {
      console.log(data)
      callBack(data)
    })
  }
  getNearestSpaces(dist ,callBack){
    const idToken = this.userProvider.idToken
    const params = new HttpParams().set("distance",dist).set("distance",dist)
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/getnearestspaces' ,{headers,params})
    .subscribe(data=> {
      console.log("hedhouma les espaces à proximité de 5 km",data)
      callBack(data)
    })
  }
  
}
