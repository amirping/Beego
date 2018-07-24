import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../user/user';
// import { retry } from "rxjs/operators/retry";
import { catchError, retry } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

/*
  Generated class for the FriendsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FriendsProvider {
  lastScore: string;
  constructor(private http: HttpClient,
    private userProvider: UserProvider,
  ) {
    console.log('Hello FriendsProvider Provider');
  }
  getSuggestedFriends(firstPage: boolean, method: "nearby"|"mutual"){
    this.lastScore = !firstPage?this.lastScore:"";
    const tk = this.userProvider.idToken;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tk}`);
    const params = new HttpParams().set('method', method).set('lastScore', this.lastScore);
    // const friends = [];
    return new Promise((resolve, reject)=>{
      this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/suggestedfriends/',{headers, params})
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(e=>{
          return of({e});
        }) // then handle the error
      ).subscribe((data: any)=>{
        // for (const friend of data.friends) {
        //   friend.state = 0;
        //   friends.push(friend);
        // }
        console.log(data);
        this.lastScore = data.lastScore;
        if(data.e){
          reject(data.e)
        }else{
          resolve(data.friends);
        }
      });
    })
    // 9_2.026481_40bWCMfE4kOWuj5ylp6hmGioyBL2
    //https://us-central1-test-3cdd6.cloudfunctions.net/beegoapi/
    //http://localhost:5000/test-3cdd6/us-central1/beegoapi
    // .retry(3)
  }
  getSuggestedNearbyFriends(oldFriends: any[], clbk){
    const tk = this.userProvider.idToken;
    const params = new HttpParams().set('lastSuggestedFriend',this.lastScore);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tk}`);
    this.http.get('http://localhost:5000/test-3cdd6/us-central1/beegoapi/suggestedfriends',{headers,params})
    // .retry(3)
    .subscribe((friends: any[])=>{
      let lastFriend = null;
      for (const friend of friends) {
        if(lastFriend){
          oldFriends.push(lastFriend);
        }
        friend.state = 0;
        lastFriend = friend;
      }
      this.lastScore = lastFriend.unique_score;
      clbk(oldFriends);
    });
  }
  getFriend(uid){
    const tk = this.userProvider.idToken;
    const url = `http://localhost:5000/test-3cdd6/us-central1/beegoapi/friend/${uid}`;
    console.log(url);
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tk}`);
    return this.http.get(url,{headers});
  }
  sendFriendRequest(uid, type){
    const tk = this.userProvider.idToken;
    const url = `http://localhost:5000/test-3cdd6/us-central1/beegoapi/${type=='request'?'friendrequest':'ignoreFriend'}` ;
    const headers = new HttpHeaders().set('Authorization', `Bearer ${tk}`);
    const params = new HttpParams().set('uid', `${uid}`);
    return new Promise((resolve, reject)=>{
      this.http.post(url,params,{headers}).pipe(retry(3),catchError(error=>{
        console.log(error);
        return of({error});
      })).subscribe((data : any)=>{
        if(data.error){
          reject(data.error);
        }else{
          resolve(data);
        }
      });
    });
  }

}
