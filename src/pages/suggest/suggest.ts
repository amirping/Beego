import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
import { Observable } from "rxjs/Observable";

/**
 * Generated class for the SuggestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-suggest",
  templateUrl: "suggest.html"
})
export class SuggestPage {
  rating: any;
  pagesData: Observable<any[]>;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private database : AngularFireDatabase
  ) {
    this.pagesData = this.database.list('suggestion').snapshotChanges().map(changes => {
      return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
    });
    this.rating = 4 ;
    console.log(this.rating)
        /*this.pageData = {
      name: "Diner romantique",
      dscrp:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequuntur facilis nam non itaque.",
      temp: "23",
      collection: [
        { id: 1, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 2, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 3, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 4, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 5, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 6, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 7, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 8, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 9, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 10, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 11, name: "Nom de l'espace", location: "Menzah 5", rating: "4" },
        { id: 12, name: "Nom de l'espace", location: "Menzah 5", rating: "4" }
      ]
    };*/
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SuggestPage");
  }
  getBack(){
    this.navCtrl.pop();
  }
}
