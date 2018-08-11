import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TasteProvider } from "../../providers/taste/taste";
import { DislikeListPage } from "../dislike-list/dislike-list";

/**
 * Generated class for the MyTastesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-my-tastes",
  templateUrl: "my-tastes.html"
})
export class MyTastesPage {
  collection: any = [];
  traitedCollection: any = [];
  active = 0;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private tasteProvide : TasteProvider) {
    console.log(document.defaultView.window);
   
    console.log(this.collection)
    this.tasteProvide.getGouts(data=>{
      this.collection = data
    })
   
  }

 
  ionViewDidLoad() {
    console.log("ionViewDidLoad MyTastesPage");
  }
 
  traitItem(index,stat){
    console.log("trait method")
    this.active++
    this.tasteProvide.traitTaste( this.collection[index].id,stat,(done)=>{
      console.log(done)
      if(done){
        this.collection[index].stat = stat;

      }
      else{
        this.active--
      }
    })
  }
  // ActionHundler(index, event) {
  //   console.log("allaho akbar ya kefer");
  //   if (event.direction === 2) {
  //     this.likeItem(index);
  //   } else if (event.direction === 4) {
  //     this.dislikeItem(index);
  //   }
  // }

  navigateToDislikePage(type){
    this.navCtrl.push(DislikeListPage,{type:type})
  }
}
