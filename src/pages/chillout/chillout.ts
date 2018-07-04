import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Slides } from "ionic-angular";
import { Ionic2RatingModule } from 'ionic2-rating';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { SearchRadioPipe } from '../../providers/user/pipe_search'


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
    private database: AngularFireDatabase,
    public navParams: NavParams) {
      
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
    /*this.pagesData = this.database.list(category, ref => ref.child('data').orderByChild('title').equalTo('jobi')).snapshotChanges().map(changes => {
      return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
    });*/
   
    this.categories = this.database
    .list(`category/${this.category}`)
    .valueChanges();
   
   
    this.pagesData = this.database
      .list(this.category)
      .valueChanges();
      console.log(this.categories);
      console.log(this.pagesData);

    
   
   /* this.pagesData=[
      {
        index:1,
        name:'All',
        data:[
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        */
    
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

  // Méthode rechercher
  search(searchText: string) {
    console.log(searchText);
    //const category = this.navParams.get('category');
 
    //this.rechercher$ = this.searchpipe.transform(this.pagesData,searchText);
    
    
  }
}

