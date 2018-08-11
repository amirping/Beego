import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user.interface";
import { AngularFireDatabase } from "angularfire2/database";
import firebase from 'firebase';
import { Observable } from "rxjs/Observable";
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  user = {} as User;
  userObserverClbk : any;
  userSubscription : any;
  token 
  constructor(
    public auth: AngularFireAuth,
    public db: AngularFireDatabase
  ) {
  }
  get idToken() {
    return this.token || 0;
  }
  isConnect(clbk) {
    const sub = this.auth.authState.subscribe(state=>{
      if(state && state.emailVerified){
          this.db.object(`users/${this.auth.auth.currentUser.uid}`)
          .valueChanges()
          .subscribe((user: any) => {
            if (user) {
              this.user = user;
              this.user.uid = this.auth.auth.currentUser.uid;
              this.auth.auth.currentUser.getIdToken().then(t=>{
                this.token = t;
              })
              clbk(true);
            } else {
              clbk(false);
            }
          });
        }else{
          clbk(false);
        }
      sub.unsubscribe();
    });
  }
  observeStateChange(clbk){
    const sub = this.auth.authState.subscribe(state=>{
      clbk(state);
      if(!state){
        sub.unsubscribe();
      }
    });
  }
  startObserveUser(){
    this.userSubscription = this.db.object(`users/${this.auth.auth.currentUser.uid}`)
    .valueChanges()
    .subscribe(user=>{
      this.user = user as User;
      this.user.uid = this.auth.auth.currentUser.uid;
      this.user.email = this.auth.auth.currentUser.email;
      if(this.userObserverClbk){
        this.userObserverClbk(this.user);
      }
    });
  }
  stopObserveUser(){
    this.userSubscription.unsubscribe();
  }
  setUserObserver(clbk){
    this.userObserverClbk = clbk;
  }
  removeUserObserver(){
    this.userObserverClbk = null;
  }
  login(email: string, password: string): Promise<any> {
    return new Promise((resolve, reject)=>{
      this.auth.auth.signInWithEmailAndPassword(email, password).then((res)=>{
        resolve(res);
      }).catch((e)=>{
        console.log(e);
        const err = {error:e, msg :"Votre email ou votre mot de passe sont fausses"}
        reject(err);
      })
    });
  }
  loginWithGoogle(nextStep, success, reject) {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => {
      const af = res.additionalUserInfo;
      if (af.isNewUser) {
        const user:User = {
          email: af.profile.email,
          gender: af.profile.gender,
          photoURL: af.profile.picture,
          firstName: af.profile.given_name,
          lastName: af.profile.family_name
        };
        nextStep(user);
      } else {
        this.setUser()
        .then(() => {
          success();
        })
        .catch(e => {
          if (e.userIsNotSet) {
            const user: User = {
              email: af.profile.email,
              gender: af.profile.gender,
              photoURL: af.profile.picture,
              firstName: af.profile.given_name,
              lastName: af.profile.family_name
            };
            nextStep(user);
          }
        });
      }
    })
    .catch(err => {
      reject(err);
    });
  }
  loginWithFacebook(nextStep, success, reject) {
    this.auth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then(res => {
      const kf = res.additionalUserInfo;
      console.log(kf);
      if (kf.isNewUser) {
          const user :User = {
            email: kf.profile.email,
            gender: kf.profile.gender,
            photoURL: kf.profile.picture.data.url,
            firstName: kf.profile.first_name,
            lastName: kf.profile.last_name
          };
          nextStep(user);
      } else {
        this.setUser()
        .then(() => {
          success();
        })
        .catch(e => {
          if (e.userIsNotSet) {
            const user = {
              email: kf.profile.email,
              gender: kf.profile.gender,
              photoUrl: kf.profile.picture.data.url,
              firstName: kf.profile.first_name,
              lastName: kf.profile.last_name
            };
            nextStep(user);
          }
        });
      }
    })
    .catch(err =>{
      reject(err);
    });
  }
  signup(user: User, password: string, file: File) {
    user = this.setUserToSignup(user);
    return new Promise((resolve, reject) => {
      this.auth.auth.createUserWithEmailAndPassword(user.email, password)
      .then(() => {
        const uid = this.auth.auth.currentUser.uid;
        if (file) {
          const task = firebase.storage()
            .ref(`/users/${uid}/photos/${this.GUID}`)
            .put(file, { contentType: file.type });
          task.on(firebase.storage.TaskEvent.STATE_CHANGED,
            () => { },
            err => {
              reject({ type: 0, err });
            },
            () => {
              task.snapshot.ref.getDownloadURL().then(downloadURL => {
                user.photoURL = downloadURL;
                this.db.list('users').update(uid, user)
                  .then(() => {
                    resolve();
                    this.auth.auth.currentUser.sendEmailVerification();
                    this.logOut();
                  }).catch(err => {
                    reject({ type: 1, err });
                  })
              });
            });
        } else {
          this.db.list("users").update(uid, user)
          .then(() => {
            resolve();
            this.sendEmailVerification();
            this.logOut();
          }).catch(err => {
            reject({ type: 2, err });
          });
        }
      })
      .catch(err => {
        reject({ type: 3, err ,msg:"Cette adresse mail à ete déja utlisé"});
      });
    });
  }
  signupWithProvider(user) {
    user = this.setUserToSignup(user);
    return new Promise((resolve, reject) => {
      this.db
        .list("users")
        .update(this.auth.auth.currentUser.uid, user)
        .then(() => {
          resolve();
        })
        .catch(e => {
          reject(e);
        });
    });
  }
  
  sendEmailVerification(){
    return new Promise((resolve, reject)=>{
      this.auth.auth.currentUser.sendEmailVerification().then(()=>{
        resolve()
      }).catch(err=>{
        reject(err);
      });
    })
  }    
  resetPassword(email: string) {
    return new Promise((resolve, reject)=>{
      this.auth.auth.sendPasswordResetEmail(email).then(()=>{
        resolve();
      }).catch((e)=>{
        const err={error:e,msg:"Ce email n'existe pas"};
        reject(err);
      })
    });
    
  }
  get currentUser(){
    return this.user;
  }
  upadateImage(imageType: string, file: File): Promise<any>{
    console.log(file);
    return new Promise((resolve, reject)=>{
      const uid = this.auth.auth.currentUser.uid;
      const folder = imageType=="photo"?"photos":"covers";
      const task = firebase.storage()
      .ref(`/users/${uid}/${folder}/${this.GUID}`)
      .put(file, { contentType: file.type });
      task.on(firebase.storage.TaskEvent.STATE_CHANGED,
        () => { },
        err => {
          reject({ type: 0, err });
        },
        () => {
          task.snapshot.ref.getDownloadURL().then(downloadURL => {
            const modif = imageType=="photo"?{photoURL : downloadURL}:{coverURL : downloadURL};
            this.db.list('users').update(uid, modif)
            .then(() => {
              resolve(downloadURL);
            })
            .catch(err => {
              reject({ type: 1, err });
            });
          });
        });
    });
  }
  updateSocialLink(fbLink, instaLink, snapLink){
    fbLink = fbLink||"";
    instaLink = instaLink||"";
    snapLink = snapLink||"";
    return this.db.list('users').update(this.auth.auth.currentUser.uid, {fbLink, instaLink, snapLink});
  }
  updatePassWord(oldPassword: string, newPassword: string): Promise<any>{
    const user = this.auth.auth.currentUser;
    return new Promise((resolve, reject)=>{
      user.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(this.user.email, oldPassword))
      .then(()=>{
        user.updatePassword(newPassword).then(()=> {
          resolve();
        }).catch(function(err) {
          reject(err);
        });
      })
      .catch(err=>{
        reject(err);
      });
    })
  }
  canCahngePassword():boolean{
    const providerData = this.auth.auth.currentUser.providerData;
    for (const p of providerData) {
      if(p.providerId == "password"){
        return true;
      }
    }
    return false;
  }
  updateProfile(user: User){
    delete user.email;
    return new Promise((resolve, reject)=>{
      const lastModif = new Date().getTime();
      this.db.list('users').update(this.auth.auth.currentUser.uid, {...user,lastModif})
      .then(()=>{
        resolve();
      }).catch(err=>{
        err.invalidPassword = true;
        reject(err);
      });
    })
  }
  updateEmail(email, password){
    const user = this.auth.auth.currentUser;
    return new Promise((resolve, reject)=>{
      user.reauthenticateWithCredential(firebase.auth.EmailAuthProvider.credential(this.user.email, password))
      .then(()=>{
        console.log("we will try to update mail");
        console.log(email);
        user.updateEmail(email)
        .then(()=> {
          this.db.list('users').update(this.auth.auth.currentUser.uid, {email}).then(()=>{
            resolve();
            this.sendEmailVerification();
          }).catch(err=>{
            console.log(err);
            reject(err);
          });
        }).catch(function(err) {
          console.log(err);
          reject(err);
        });
      })
      .catch(err=>{
        console.log(err);
        reject(err);
      });
      
    });
  }

  logOut() {
    this.auth.auth.signOut();
  }

  setUser() {
    return new Promise((resolve, reject) => {
      const uid = this.auth.auth.currentUser.uid;
      const sub = this.db
        .object(`users/${uid}`)
        .valueChanges()
        .subscribe((user: any) => {
          if (user) {
            this.user = user;
            this.user.uid = uid;
            console.log(this.user);
            resolve();
          } else {
            reject({ userIsNotSet: true });
          }
          sub.unsubscribe();
        });
    });
  }
  observeUser():Observable<any>{
    return this.db
      .object(`users/${this.auth.auth.currentUser.uid}`)
      .valueChanges();
  }
  
  getCurrentUser(user=null) {
    if(user){
      this.user ={...this.user,...user};
    }
    return this.user;
  }
  
  
  
  

  setUserToSignup(user:User):User{
    user.coverURL = "";
    user.photoURL = user.photoURL || "";
    user.follower = 0;
    user.following = 0;
    user.bio = "";
    return user;
  }
  get GUID(): string {
    return (new Date().getTime().toString(36) +"_" + Math.random().toString(36).substring(2, 10));
  }
}
