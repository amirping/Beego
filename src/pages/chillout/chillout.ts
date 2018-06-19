import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Slides } from "ionic-angular";
import { Ionic2RatingModule } from 'ionic2-rating';

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
  pagesData=[
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
  testrating = 4 ;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    /**
     * slides on cover : put all images here and will auto displayed
     */
    this.slides.push("../../assets/imgs/chilloutPage_img/sug1.png");
    this.slides.push("../../assets/imgs/chilloutPage_img/sug1.png");
    this.slides.push("../../assets/imgs/chilloutPage_img/sug1.png");
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ChilloutPage");
  }
}
