import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController} from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '../../../node_modules/angularfire2/database';

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
  espace: Observable<any[]>
  espaceName: string;
  espaceRegion: string;
  espacePlace: string;
  espaceSpecialite: any[] ;
  espaceCuisine : string;
  espaceHoraire: string;
  espaceTelephone : string;
  espaceParking: string;
  espaceTerasse: string;
  espaceKaraoke: string;
  espaceStyle: string;
  espaceClimatisation: string;
  espaceAccesWifi:string;
  espaceReservation: string;
  espaceMeilleureSpecialite: string;
  espaceVue : string;
  espaceMatch : string;  
  espaceMusique : string;
  espaceAdresse : string;
  loisirArray: any[] ;
  reviewsArray: any[] ;
  follower : any;
  idEspace: string;
  rating = 5;
  dualValue2 = 30;
  listFollowers : AngularFireList<any>;
  notes = [
    {
      value: 40,
      index: 5
    },
    {
      value: 25,
      index: 4
    },
    {
      value: 2,
      index: 3
    },
    {
      value: 10,
      index: 2
    },
    {
      value: 15,
      index: 1
    }
  ]
  show = false;
  showabout() {
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
  nbFollowers;
  listFollowerss: any[]

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private alertController : AlertController

  ) {
    this.idEspace = this.navParams.get('cle');
    this.db.object(`espace/${this.idEspace}`).valueChanges().subscribe((data: any) => {
      
      this.espace = Object(data)
      console.log(this.espace)
      this.espaceName = data.espaceName
      this.espacePlace = data.espacePlace
      this.espaceRegion = data.espaceRegion
      this.espaceSpecialite = Object.keys(data.espaceSpecialite)
      .map(i => data.espaceSpecialite[i]);
      this.espaceCuisine = data.espaceCuisine
      this.espaceHoraire = data.espaceHoraire
      this.espaceParking = data.espaceParking
      this.espaceTerasse = data.espaceTerasse
      this.espaceKaraoke = data.espaceKaraoke
      this.espaceClimatisation = data.espaceClimatisation
      this.espaceStyle = data.espaceStyle
      this.espaceAccesWifi = data.espaceAccesWifi
      this.espaceReservation = data.espaceReservation
      this.espaceVue = data.espaceVue
      this.espaceMatch = data.espaceMatch
      this.espaceMusique = data.espaceMusique
      this.espaceAdresse = data.espaceAdresse
      this.espaceTelephone = data.espaceTelephone
      this.espaceMeilleureSpecialite=data.espaceMeilleureSpecialite
      this.reviewsArray = Object.keys(data.Reviews)
      .map(i => data.Reviews[i]);
      console.log(this.reviewsArray)
      this.loisirArray = Object.keys(data.espaceLoisir)
      .map(i => data.espaceLoisir[i]);
      this.listFollowerss= Object.keys(data.followers)
      .map(i => data.followers[i]);
     this.nbFollowers = this.listFollowerss.length
      

    })
   
    console.log(this.idEspace)
    this.data = this.evenement;
    this.listFollowers= this.db.list(`espace/${this.idEspace}/followers`);
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailPage');
  }
  back()
  {
    this.navCtrl.pop()
  }
  suivre(){
    this.listFollowers.push({
      firstName:"Ghassen",
      lastName:"ASKRI"}
    )
    /*this.follower= this.db.list(`espace/${this.idEspace}/followers` ,ref => ref.child('firstName').equalTo('hatemaaa'))
    console.log("follower : ", this.follower)
    this.listFollowers.remove(this.follower)
    console.log(this.listFollowers)*/
      let alert = this.alertController.create({
      title :this.espaceName,
      message : "Vous êtes maintenant abonner à nous",
      buttons : [
        {
          text : "Ok"
        }
      ]
    })

    alert.present()
    
    
  }

}
