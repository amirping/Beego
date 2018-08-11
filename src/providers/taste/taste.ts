import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '../../../node_modules/angularfire2/database';
import { UserProvider } from '../user/user';

/*
  Generated class for the TasteProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasteProvider {
  collection: any = [];
  constructor(public http: HttpClient, public db : AngularFireDatabase, private userProvider: UserProvider) {
    console.log('Hello TasteProvider Provider');
  }

  listGout(){
    
   return this.db.list('goutPropose').snapshotChanges()

    
  }
  getGouts(callBack){
    const idToken = this.userProvider.idToken;
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.get("http://localhost:5000/test-3cdd6/us-central1/beegoapi/suggestedtastes",{
      headers
    }).subscribe((data: any)=>{
      console.log(data);
      callBack(data.tastes)
    })
  }
  traitTaste(id,stat,callBack){
    const idToken = this.userProvider.idToken;
    console.log(id,stat)
    const params = new HttpParams().set("taste",id).set("stat",stat)
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.post('http://localhost:5000/test-3cdd6/us-central1/beegoapi/traittastes',params,{headers})
    .subscribe((data:any) =>{
      console.log('hedhi data', data)
      callBack(data.done)
    })

  }
  getSelectedTastes(stat,callBack){
    const idToken = this.userProvider.idToken;
    
    const params = new HttpParams().set("stat",stat)
    const headers = new HttpHeaders().set("authorization", "Bearer "+idToken)
    this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/selectedtastes',{headers,params})
    .subscribe((data:any) =>{
      console.log('hedhi data', data)
      callBack(data)
    })
  }
}
