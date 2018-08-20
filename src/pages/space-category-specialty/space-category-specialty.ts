import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController, ViewController } from 'ionic-angular';
import { SpaceUpdatePicCategoryPage } from '../space-update-pic-category/space-update-pic-category';

/**
 * Generated class for the SpaceCategorySpecialtyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-category-specialty',
  templateUrl: 'space-category-specialty.html',
})
export class SpaceCategorySpecialtyPage { 
  pic; 
  index="1";
  showOffVar=false;
  showAddCatVar=false;
  showAddSpecialtyVar=false;
  showAddInfoVar=false;
  NewCatName='';
  NewSpeName='';
  NewInfoName='';
  category: Array<any> = [];
  specialty:Array<any> = [];
  info:Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,private modalCtrl : ModalController, private viewCtrl:ViewController) {
    this.category.push({
      id:1,
      name: 'category 1',      
      picUrl: '../../assets/imgs/photoDeProfil.png',
    },
    
      {
        id:2,
        name: 'category 2',      
      picUrl: '../../assets/imgs/space_detail/whats-up.png',
      })

      this.specialty.push({
        id:1,
        name: 'specialty1',      
        picUrl: '../../assets/imgs/photoDeProfil.png',
      })

      this.info.push({
        id:1,
        name: 'info 1',      
        picUrl: '../../assets/imgs/photoDeProfil.png',
      })
  }
  DeleteCat(i){
    this.category.splice(i,1);
  }
  add_cat(){
    this.showAddCatVar=true;
  }
  cancelAddCat(){
    this.showAddCatVar=false;
    this.NewCatName="";
  }
  addToCategory(){
    if (!this.NewCatName.trim()) return;
    this.category.push({
      //   add the id
      name: this.NewCatName,
      // add img url
      picUrl:'../../assets/imgs/photoDeProfil.png'
    })
    this.NewCatName = '';
  }
  // specialty
  DeleteSpe(j){
    this.specialty.splice(j,1);
  }
  add_spe(){
    this.showAddSpecialtyVar=true;
  }
  cancelAddspe(){
    this.showAddSpecialtyVar=false;
    this.NewSpeName="";
  }
  addToSpesialty(){
    if (!this.NewSpeName.trim()) return;
    this.specialty.push({
      //   add the id
      name: this.NewSpeName,
      // add img url
      picUrl:'../../assets/imgs/photoDeProfil.png'
    })
    this.NewSpeName = '';
  }
  // info
  add_info(){
    this.showAddInfoVar=true;
  }
  cancelAddInfo(){
    this.showAddInfoVar=false;
    this.NewInfoName='';
  }
  DeleteInfo(j){
    this.info.splice(j,1);
  }
  addToInfo(){
    if (!this.NewInfoName.trim()) return;
    this.info.push({
      //   add the id
      name: this.NewInfoName,
      // add img url
      picUrl:'../../assets/imgs/photoDeProfil.png'
    })
    this.NewInfoName = '';
  }
  
  // ...
  updatePic(i){
    this.pic=this.category[i].picUrl;
    this.showOffVar=true;
    const modal1= this.modalCtrl.create(SpaceUpdatePicCategoryPage,{img:this.pic},{enableBackdropDismiss:false} );
    modal1.present();
    modal1.onDidDismiss(()=>{
      this.showOffVar=false;
    });
  }

  back(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceCategorySpecialtyPage');
  }

}
