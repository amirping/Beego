import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import {ListOfFollowsPage} from '../list-of-follows/list-of-follows'
import { SettingProfilPage } from '../setting_profil/setting_profil';
import { User } from '../../models/user.interface';
import { UserProvider } from '../../providers/user/user';
import { Subscription } from 'rxjs/Subscription';

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
  // favoris = ["../../assets/imgs/space_detail/whats-up.png",2,"../../assets/imgs/aziza.png",4,"../../assets/imgs/space_detail/whats-up.png"];
  
  data: any = [];
  favoris: any = [
    {
      id: 0,
      pic: "https://source.unsplash.com/1080x600/?food"
    },
    {
      id: 1,
      pic: "https://source.unsplash.com/600x1080/?movie"
    },
    {
      id: 2,
      pic: "https://source.unsplash.com/900x900/?party"
    },
    {
      id: 3,
      pic: "https://source.unsplash.com/1000x900/?events"
    },
    {
      id: 4,
      pic: "https://source.unsplash.com/1080x600/?music part"
    },
    {
      id: 5,
      pic: "https://source.unsplash.com/900x900/?desko"
    }
  ];
  goToSpace(){
    
  }

  user = {} as User;
  updateImageType: string;
  userSubscription : Subscription;
  constructor(public navCtrl: NavController,
    public userProvider: UserProvider,
    public loadCtrl: LoadingController) {
      this.data = this.favoris;
  }
  
  ionViewDidLoad() {
    console.log(" profile");
    this.user = this.userProvider.getCurrentUser();
  }
  ionViewDidEnter(){
    this.userSubscription  = this.userProvider.observeUser().subscribe(user=>{
      this.user = {uid:this.user.uid,...user};
    });
  }
  ionViewWillLeave(){
    console.log("fffffff");
    this.userSubscription.unsubscribe();
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
