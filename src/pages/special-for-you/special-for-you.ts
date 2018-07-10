import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";
/**
 * Generated class for the SpecialForYouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-special-for-you",
  templateUrl: "special-for-you.html"
})
export class SpecialForYouPage {
  searchText: string = "";
  data: any = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database : AngularFireDatabase
  ) {
    const espaces$ = this.database.list('espace').valueChanges().subscribe(espaces => {
      this.data = espaces.map((espace,index)=>{
        const e = espace as any ;
         e.id = index;
 
         return e;
       })
      // this.friends= friends;
       console.log(this.data)
       espaces$.unsubscribe();
         });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SpecialForYouPage");
  }
  ShoworNot(item, text){

    
   
    if((!item.espaceName.toLocaleLowerCase()
    .includes(text.toLocaleLowerCase()))
    &&
    (!item.espaceSpecialite.toLocaleLowerCase()
    .includes(text.toLocaleLowerCase())))
    
    return false
    
    
    return true;
  }
}
