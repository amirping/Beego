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
  user = {} as User;
  updateImageType: string;
  userSubscription : Subscription;
  favorites: any = [
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/600x1080/?movie"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?party"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/1000x900/?events"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/1080x600/?music part"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?desko"
    }
  ];
  hiddenPage:boolean;
  constructor(public navCtrl: NavController,
    public userProvider: UserProvider,
    public loadCtrl: LoadingController) {
      this.hiddenPage = false;
      this.user = this.userProvider.currentUser;
      this.user.coverURL = this.user.coverURL?this.user.coverURL:"../../assets/imgs/default/cover.jpg";
  }
  // ionViewCanEnter(){
  //   console.log("can enter");
    
    
  //   this.userProvider.canEnter();
  //   this.navCtrl.getViews()[0].dismiss()
  //   return false
  // }
  ngOnInit(){
    console.log("test");
  }
  ionViewDidLoad() {
    console.log("did load");
    
  }
  ionViewWillEnter(){
    console.log("will enter");
    this.hiddenPage = !this.userProvider.canEnter();
  }
  ionViewDidEnter(){
    console.log("did enter");
    this.userProvider.setUserObserver(user=>{
      this.user = user;
    });
  }
  ionViewWillLeave(){
    console.log("fffffff");
    this.userProvider.removeUserObserver();
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
    this.userProvider.logout();
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
