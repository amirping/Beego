import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SpaceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-detail',
  templateUrl: 'space-detail.html',
})
export class SpaceDetailPage {
  rating = 5 ;
  dualValue2 = 30;
  notes = [
    {
      value:40,
      index:5
    },
    {
      value:25,
      index:4
    },
    {
      value:2,
      index:3
    },
    {
      value:10,
      index:2
    },
    {
      value:15,
      index:1
    }
  ]
  show=false;
  showabout(){
    this.show = !this.show;
  }
  data: any = [];
  evenement: any = [
    {
      id: 1,
      // name: "YUMA - WInter tour",
      // location: "Bon coin",
      pic: "https://source.unsplash.com/600x1080/?movie"
    },
    {
      id: 1,
      // name: "YUMA - WInter tour",
      // location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?party"
    },
    {
      id: 1,
      // name: "YUMA - WInter tour",
      // location: "Bon coin",
      pic: "https://source.unsplash.com/1000x900/?events"
    },
    {
      id: 1,
      // name: "YUMA - WInter tour",
      // location: "Bon coin",
      pic: "https://source.unsplash.com/1080x600/?music part"
    },
    {
      id: 1,
      // name: "YUMA - WInter tour",
      // location: "Bon coin",
      pic: "https://source.unsplash.com/900x900/?desko"
    }
  ];
  
  index_news = "events";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data = this.evenement;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailPage');
  }

}
