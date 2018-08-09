import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the PrincipalEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal-event',
  templateUrl: 'principal-event.html',
})
export class PrincipalEventPage {
  varDisplay =false;
  varGrid = false;
  clear = false;


  collection:any= [
    {pic:'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/29541752_1859626400715645_3747510599580385280_n.jpg?_nc_cat=0&oh=73dee5f036a3780c2e8ba385a27cb5ae&oe=5BA1EACF'},
    {pic:'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/15078663_10211006009933479_4984560874955007153_n.jpg?_nc_cat=0&oh=307dbf50c3b1d08e01744ef0660b41b4&oe=5BD5349A'},
    {pic:'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/29541752_1859626400715645_3747510599580385280_n.jpg?_nc_cat=0&oh=73dee5f036a3780c2e8ba385a27cb5ae&oe=5BA1EACF'},
    {pic:'https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/29541752_1859626400715645_3747510599580385280_n.jpg?_nc_cat=0&oh=73dee5f036a3780c2e8ba385a27cb5ae&oe=5BA1EACF'}
  ];

  cle :string ;
  peopleArray : any[] = [];
  item={}
  user={}
  event :any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams ,private database: AngularFireDatabase)   {
  this.cle=  this.navParams.get('cle');
  console.log(this.cle); 
    
    this.database.object(`evenement/${this.cle}`).valueChanges().subscribe((data:any)=>{
      console.log(data)
      this.event = data;


      if(data.Attendees){
        this.peopleArray = Object.keys(data.Attendees)
        .map(i => data.Attendees[i]) ;console.log(this.peopleArray); 
        console.log(this.peopleArray[0]);
      }
    })
   
    // this.evenementList.forEach(element => { element.forEach(item=> {this.peopleArray = Object.keys(item.Attendees).map(i => item.Attendees[i]) ;console.log(this.peopleArray); });});
    
    

  }

  nbrPart(){
    this.varDisplay = true;
    this.varGrid = true;
    this.clear = true;
  }
  clearBtn(){
    this.varDisplay = false;
    this.varGrid = false;
    this.clear = false;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalEventPage');
  }
  show = false;
showabout() {
  this.show = !this.show;
}

}
