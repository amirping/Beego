import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase} from 'angularfire2/database';
import { HomePage } from '../home/home';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  peopleList : any;

  constructor(public navCtrl: NavController,  public db : AngularFireDatabase ) {
    this.peopleList = db.list('/people')

  }
    createPerson(name,lname,age,dept){
      const t =this.peopleList.push({
        name : name ,
        lname :lname ,
        age : age , 
        dept :dept ,
      });
      t.then(newPerson  => {
        this.navCtrl.push(HomePage);
        console.log(newPerson);
      },error=>{console.log(error);});
 
    }


   

}
