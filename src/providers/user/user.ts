import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import { User } from "../../models/user.interface";
import { AngularFireDatabase } from "angularfire2/database";
import firebase from 'firebase';
/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {
  user = {} as User;
  constructor(
    public auth: AngularFireAuth,
    public db: AngularFireDatabase
  ) {
  }
  isConnect() {
    return this.auth.authState;
  }
  login(email: string, password: string): Promise<any> {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }
  setUser() {
    return new Promise((resolve, reject) => {
      const uid = this.auth.auth.currentUser.uid;
      this.db
        .object(`uers/${uid}`)
        .valueChanges()
        .subscribe((user: any) => {
          if (user) {
            this.user = user;
            this.user.uid = uid;
          } else {
            reject({ userIsNotSet: true });
          }
          resolve();
        });
    });
  }
  logOut() {
    this.auth.auth.signOut();
  }
  getCurrentUser() {
    return this.user;
  }
  signup(user: User, password: string, file: File) {
    return new Promise((resolve, reject) => {
      this.auth.auth.createUserWithEmailAndPassword(user.email, password)
      .then(() => {
        const uid = this.auth.auth.currentUser.uid;
        if (file) {
          const task = firebase.storage()
            .ref(`/users/${uid}/${this.GUID}`)
            .put(file, { contentType: file.type });
          task.on(firebase.storage.TaskEvent.STATE_CHANGED,
            () => { },
            err => {
              reject({ type: 0, err });
            },
            () => {
              task.snapshot.ref.getDownloadURL().then(downloadURL => {
                user.photoUrl = downloadURL;
                this.db.list('uers').update(uid, user)
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
          this.db.list("uers").update(uid, user)
          .then(() => {
            resolve();
            this.auth.auth.currentUser.sendEmailVerification();
            this.logOut();
          }).catch(err => {
            reject({ type: 2, err });
          });
        }
      })
      .catch(err => {
        reject({ type: 3, err });
      });
    });
  }
  loginWithGoogle(nextStep, success, reject) {
    this.auth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then(res => {
      const af = res.additionalUserInfo;
      if (af.isNewUser) {
        const user = {
          email: af.profile.email,
          gender: af.profile.gender,
          photoUrl: af.profile.picture,
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
            const user = {
              email: af.profile.email,
              gender: af.profile.gender,
              photoUrl: af.profile.picture,
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
          const user = {
            email: kf.profile.email,
            gender: kf.profile.gender,
            photoUrl: kf.profile.picture.data.url,
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
  signupWithProvider(user) {
    console.log(user);
    console.log(this.auth.auth.currentUser.uid);
    return new Promise((resolve, reject) => {
      this.db
        .list("uers")
        .update(this.auth.auth.currentUser.uid, user)
        .then(() => {
          resolve();
        })
        .catch(e => {
          reject(e);
        });
    });
  }
  resetPassword(email: string) {
    return this.auth.auth.sendPasswordResetEmail(email);
  }
  get GUID(): string {
    return (new Date().getTime().toString(36) +"_" + Math.random().toString(36).substring(2, 10));
  }
}
