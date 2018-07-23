import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

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
  data: any = [];
  evenement: any = [
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/600x1080/?movie"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?party"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/1000x900/?events"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/1080x600/?music part"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?desko"
    }
  ];
  promotion: any = [
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/600x1080/?movie"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?party"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/1000x900/?events"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/1080x600/?bar"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?desko"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?club"
    },
    {
      id: 1,
      name: "YUMA - WInter tour",
      location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?vodka,bar"
    }
  ];
  index_news = "events";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.evenement;
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
}
