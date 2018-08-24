import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
  allbtns=false;
  btns= [false,false,false,false,false,false,false];
  btnTrans(i){
    this.btns[i]=!this.btns[i];
  }
  togglebtns(){
    this.allbtns=!this.allbtns;
    this.btns = this.btns.map(btn=>this.allbtns)
  }
  myDepartDate=new Date().toISOString();
  myfinishDate=new Date().toISOString();
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  back(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }

}
