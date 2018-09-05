import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Content } from "ionic-angular";

import { AngularFireDatabase } from "angularfire2/database";
import { SpaceDetailPage } from "../../pages/space-detail/space-detail";



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
  showHeader=false; 
  lasttop=58;
  @ViewChild (Content) content:Content;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private database : AngularFireDatabase
  ) {
    const espaces$ = this.database.list('espace').snapshotChanges().subscribe(espaces => {
      this.data = espaces.map((espace,index)=>{
        const e = espace.payload.val() as any;
         e.id = index;
         
        e.key = espace.key
 
         return e;
       })
      // this.friends= friends;
       console.log(this.data)
       espaces$.unsubscribe();
         });

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SpecialForYouPage");
    this.content.ionScroll.subscribe(($event)=>{
      // console.log($event);
      if($event.scrollTop > this.lasttop){
        this.showHeader=true;
        // console.log("test", this.showHeader);
      }
      else{
        this.showHeader=false;
        // console.log(this.showHeader);
      }
      if($event.scrollTop>58){
        this.lasttop=$event.scrollTop;
      }
      else{
        this.lasttop=58;
      }
    })
  }

  // ShoworNot(item, text){

    
   
  //   if((!item.espaceName.toLocaleLowerCase()
  //   .includes(text.toLocaleLowerCase()))
  //   &&
  //   (!item.espaceSpecialite.toLocaleLowerCase()
  //   .includes(text.toLocaleLowerCase())))
    
  //   return false
    
    
  //   return true;
  // }
  navigateToSpaceDetail(idEspace)
  {
    this.navCtrl.push(SpaceDetailPage,{cle : idEspace});
  }

}
