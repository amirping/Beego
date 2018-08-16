import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

import { AngularFireDatabase } from "angularfire2/database";
import { SpaceDetailPage } from "../../pages/space-detail/space-detail";
import { SpacesProvider } from "../../providers/spaces/spaces";



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
  data: any = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database : AngularFireDatabase,
    private spacesProvider : SpacesProvider
  ) {
    this.spacesProvider.listSpecificTastes("ALL",(data)=>{
      console.log("ahaya data",data)
      this.data= data.spaces
    })

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SpecialForYouPage");
  }

  ShoworNot(item, text = ""){

    
   
    if((!item.espaceName.toLocaleLowerCase()
    .includes(text.toLocaleLowerCase()))
    &&
    (!item.espaceMeilleureSpecialite.toLocaleLowerCase()
    .includes(text.toLocaleLowerCase())))
    
    return false
    
    
    return true;
  }
  navigateToSpaceDetail(idEspace)
  {
    this.navCtrl.push(SpaceDetailPage,{cle : idEspace});
  }

}
