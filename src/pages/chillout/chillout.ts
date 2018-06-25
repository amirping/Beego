import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Slides } from "ionic-angular";
import { Ionic2RatingModule } from 'ionic2-rating';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';

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
  indexPage = 1;
  /**
  * sub pages data
   */


  chilloutListRef$: Observable<any[]>;
  


  pagesData : Observable<any[]>;;
  testrating = 4 ;//testing
  
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
    const category = this.navParams.get('category'); 

    this.pagesData = this.database.list(category).snapshotChanges().map(changes => {
      return changes.map( c => ({key : c.payload.key,...c.payload.val()}))
    });
   
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
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        ]
      },
      {
        index:2,
        name:'Café',
        data:[
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        ]
      },
      {
        index:3,
        name:'Bar & lounge',
        data:[
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        ]
      },
      {
        index:4,
        name:'Restaurent',
        data:[
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        ]
      },
      {
        index:5,
        name:'Boutiques',
        data:[
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        ]
      },
      {
        index:6,
        name:'Espaces Commerciale',
        data:[
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        ]
      },
      {
        index:7,
        name:'Autre',
        data:[
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        {
          title:'Nom de l\'espace',
          subTitle:'Nom de l\'espace',
          rating:4
        },
        ]
      }
    ];
*/
    
    
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
}
