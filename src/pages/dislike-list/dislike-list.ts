import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TasteProvider } from '../../providers/taste/taste';

/**
 * Generated class for the DislikeListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dislike-list',
  templateUrl: 'dislike-list.html',
})
export class DislikeListPage {
  type;
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
  btn1;
  btn2;
  index_news = "events";
  stat

  constructor(public navCtrl: NavController, public navParams: NavParams,private tasteProvider:TasteProvider) {
    this.type = this.navParams.get('type')
    console.log("type",this.type)
    switch (this.type) {
      case 'liked':
      this.stat= 1
        this.btn1 = "disliked"
        this.btn2 = "ignored"
        console.log(this.btn1)

        break;
      case 'disliked':
      this.stat =-1
        this.btn1 = "liked"
        this.btn2 = "ignored"
        console.log(this.btn1)
        break;
      case 'ignored':
      this.stat = 2
        this.btn1 = "liked"
        this.btn2 = "disliked"
        console.log(this.btn1)

        break;

      default:
        break;
    }
    this.tasteProvider.getSelectedTastes(this.stat,(data)=>{
      console.log("here",data)
      this.data= data.selectedTastes
    })
   // this.data = this.evenement;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DislikeListPage');
  }
  back() {
    this.navCtrl.pop()
  }
  navigateToDislikePage(type){
    this.navCtrl.push(DislikeListPage,{type:type})
  }
  traiter(type,id){
    let stat;
    switch (type) {
      case "liked":
        stat = 1
        break;
        case "disliked":
        stat = -1
        break;
        case "ignored":
        stat = 2
        break;
    
      default:
        break;
    }
    this.tasteProvider.traitTaste(id,stat,(data)=>{
      console.log(data)
    })
  }

}
