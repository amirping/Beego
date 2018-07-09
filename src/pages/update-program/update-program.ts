import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Ionic2RatingModule } from 'ionic2-rating';

/**
 * Generated class for the UpdateProgramPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-program',
  templateUrl: 'update-program.html',
})
export class UpdateProgramPage {
  rating = 5 ;

  constructor(public navCtrl: NavController, private viewCtrl : ViewController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateProgramPage');
  }
  dismiss() {
    let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(data);
  }

}
