import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Signup2Page } from '../signup2/signup2';
import { HomePage } from '../home/home';

/**
 * Generated class for the Singup1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup1',
  templateUrl: 'signup1.html',
})
export class Signup1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup1Page');
  }
  next(){
    this.navCtrl.push(Signup2Page);
  }
  skip(){
    this.navCtrl.push(HomePage);
    
  }

}
