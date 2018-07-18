import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Slides } from "ionic-angular";
import { Ionic2RatingModule } from 'ionic2-rating';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { SearchRadioPipe } from '../../providers/user/pipe_search'
import { SpacesProvider } from "../../providers/spaces/spaces";


/**
 * Generated class for the ChilloutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-chillout",
  templateUrl: "chillout.html"
})
export class ChilloutPage {
  /**
  * @data : search text entred by user
   */
  searchText: string = "";
  slides: Array<string> = [];
  indexPage = "ALL";
  /**
  * sub pages data
   */


  chilloutListRef$: Observable<any[]>;
  rechercher$: Observable<any[]>;
  

  categories : Observable<any[]>;
  pagesData : any = [];
  tab : any = [];
  testrating = 4 ;//testing
  category : string;
  constructor(
    public navCtrl: NavController,
   
    public navParams: NavParams,
    private spacesProvider: SpacesProvider
  ) {
      
    /**
     * slides on cover : put all images here and will auto displayed
     */
    this.slides.push("../../assets/imgs/chilloutPage_img/sug1.png");
    this.slides.push("../../assets/imgs/chilloutPage_img/sug1.png");
    this.slides.push("../../assets/imgs/chilloutPage_img/sug1.png");
    /**
     * 
     */
     this.category = this.navParams.get('category'); 
    
   
    this.categories = spacesProvider.listCategoriesChillout(this.category)
   
   
    this.pagesData = spacesProvider.listPagesDataChillout(this.category)

    
    
  }
  log(message){
    console.log(message);
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ChilloutPage");
  }
  showYourGod($event) {
    console.log($event.target.className);
    if ($event.target.className === "searchbar-search-icon") {
      this.navCtrl.pop();
    }
  }
  ShoworNot(item, text){

    
   
    if(!item.title.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
    return false
    if(this.indexPage !="ALL")
    {
      if(item.type !== this.indexPage)
      return false
    }
    
    return true;
  }

  
}

