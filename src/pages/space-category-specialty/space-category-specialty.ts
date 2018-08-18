import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  category: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.category.push({
      id:1,
      name: 'category 1',      
      picUrl: '../../assets/imgs/photoDeProfil.png',
    },
    
      {
        id:2,
        name: 'category 2',      
      picUrl: '../../assets/imgs/space_setting/catAndSpe/petit-dejeuner.png',
      })
  }
  DeleteCat(){
    this.category.pop()
  }
  back(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceCategorySpecialtyPage');
  }

}
