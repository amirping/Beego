import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpaceContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-contact-us',
  templateUrl: 'space-contact-us.html',
})
export class SpaceContactUsPage {
  listItems: Array<any> = [];
  varMess=false;
  readMessage(){
    this.varMess=true;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.listItems.push({
      name: 'Folen ben folen',
      date: '6 mar 2018',
      msg: 'Le Lorem Ipsum est simplement faux texte employé dans la composition et la mise en page avant impression.',
    },
    
      {
        name: 'Folena ben folen',
        date: '6 mar 2018',
        msg: 'Le Lorem Ipsum est simplement faux texte employé dans la composition et la mise en page avant impression.',
      })
  }
  back(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceContactUsPage');
  }

}
