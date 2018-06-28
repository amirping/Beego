import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import {ListOfFollowsPage} from '../list-of-follows/list-of-follows'
import { SettingProfilPage } from '../setting_profil/setting_profil';
import { User } from '../../models/user.interface';
import { UserProvider } from '../../providers/user/user';

/**
 * Generated class for the PrfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profil',
  templateUrl: 'profil.html',
})
export class ProfilPage {
  user = {} as User;
  updateImageType: string;
  constructor(public navCtrl: NavController,
    public userProvider: UserProvider,
    public loadCtrl: LoadingController) {
  }
  
  ionViewDidLoad() {
    console.log(" profile");
    this.user = this.userProvider.getCurrentUser();
  }
  ionViewDidEnter(){
    this.userProvider.observeUser(user=>{
      this.user = user;
      console.log("seen");
    });
  }
  ionViewWillLeave(){
    console.log("fffffff");
    this.userProvider.unobserveUser();
  }
  formatFollows(nbr:number):string{
    return nbr+"";
  }
  folowsPage(){
    this.navCtrl.push(ListOfFollowsPage);
  }
  paramPage(){
    this.navCtrl.push(SettingProfilPage, {fb:this.user.fbLink, insta:this.user.instaLink, snap:this.user.snapLink});
  }
  back(){
    this.navCtrl.pop();
  }

  logout(){
    this.userProvider.logOut();
    console.log("eeeee");
  }
  uploadImage(sourceType, input){
    this.updateImageType = sourceType;
    input.click();
  }
  updateImage(e){
    const reader = new FileReader();
    let file;
    reader.onload = (e:any)=> {
      const load = this.loadCtrl.create();
      load.present();
      this.userProvider.upadateImage(this.updateImageType, file)
      .then(url=>{
        if(this.updateImageType=="photo"){
          this.user.photoURL = url;
        }else{
          this.user.coverURL = url;
        }
        load.dismiss();
      })
      .catch(err=>{
        console.log(err);
      });
    }
    if(e.target.files.length){
      file = e.target.files[0];
      reader.readAsDataURL(file);
    }
  }

}
