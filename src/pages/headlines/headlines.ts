import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database";

/**
 * Generated class for the HeadlinesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-headlines",
  templateUrl: "headlines.html"
})
export class HeadlinesPage {
  searchText: string;
  searchName: string = "";
  data: any = [];
  evenement: any = [];
  promotion: any = [];
  date: string;
  filter = [{
    name: "gender",
    value: "ALL"
  },
  {
    name: "Place",
    value: "ALL"
  },
  {
    name: "date",
    value: "ALL"
  },
  {
    name: "name",
    value: ""
  }

  ]
  genre = "ALL"
  place = "ALL"

  index_news = "events";
  category: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private database: AngularFireDatabase
  ) {
    this.category = this.navParams.get('category');

    const evenements$ = this.database.list('evenement').valueChanges().subscribe(evenements => {
      this.evenement = evenements.map((espace, index) => {
        const e = espace as any;
        e.id = index;

        return e;
      })

      evenements$.unsubscribe();
      this.data = this.evenement
    });

    const promotions$ = this.database.list('promotion').valueChanges().subscribe(promotions => {
      this.promotion = promotions.map((espace, index) => {
        const e = espace as any;
        e.id = index;

        return e;
      })

      promotions$.unsubscribe();
    });



  }
  switch(type) {
    this.index_news = type;
    if (type === "events") {
      this.data = this.evenement;
    } else {
      this.data = this.promotion;
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HeadlinesPage");
  }
  changeFilter(type: string) {

    switch (type) {
      case 'Gender': {
        this.searchText = this.genre;
        this.filter[0] = {
          name: "gender",
          value: this.genre
        }

        break;
      }
      case 'Date': {
        this.searchText = this.date;
        this.filter[2] = {
          name: "Date",
          value: this.date
        }

        break;
      }
      case 'Place': {
        this.searchText = this.place;
        this.filter[1] = {
          name: "Place",
          value: this.place
        }

        break;
      }
      case 'Name': {
        this.searchText = this.searchName;
        this.filter[3].value = this.searchName
        console.log(this.filter)
      }

        break;
    
    
      default:
    break;
}

console.log("nouveau filter", this.filter)
  }
}
