import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the EvenementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-evenement',
  templateUrl: 'evenement.html',
})
export class EvenementPage {
  listAttendees : AngularFireList<any>;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase
    ) {
      const id = this.navParams.get('eventId')
      this.listAttendees= this.database.list(`evenement/${id}/Attendees`);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EvenementPage');
  }

  interesser(){
    this.listAttendees.push({
      lastname :"Outlaw",
      name:"Adem"
    });
    console.log("ok")
    this.navCtrl.pop();
  }

}
