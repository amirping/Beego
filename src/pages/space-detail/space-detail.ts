import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams , AlertController,ModalController } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '../../../node_modules/angularfire2/database';


import { SpaceDetailOpinionsPage } from '../space-detail-opinions/space-detail-opinions';


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
  espaceDescription;
  testDate ; 

 

  dualValue2 = 30;
  listFollowers : AngularFireList<any>;
  notes = [];
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
  moyenneRating  =0.0;
  listFollowerss: any[]
  nbAvis ;
  espaceImage;
  val1 = 0 ;
  val2 = 0 ; 
  val3 = 0 ; 
  val4 = 0 ;
  val5 = 0 ; 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private alertController : AlertController,
    private modalCtrl: ModalController

  ) {
    this.idEspace = this.navParams.get('cle');
    this.db.object(`espace/${this.idEspace}`).valueChanges().subscribe((data: any) => {
      this.testDate = new Date();
      console.log("date : ",this.testDate.toISOString().substring(11, 19))
      if(this.testDate.toISOString().substring(11, 19)<"15:00:00")
      console.log("ok")
    
      
      this.espace = Object(data)
      console.log(this.espace)
      this.espaceName = data.espaceName
      this.espaceImage = data.espaceImage
      this.espacePlace = data.espacePlace
      this.espaceRegion = data.espaceRegion
      if(data.espaceSpecialite)
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
      this.espaceDescription = data.espaceDescription
      this.espaceMeilleureSpecialite=data.espaceMeilleureSpecialite
      
      this.reviewsArray = Object.keys(data.Reviews)
      .map(i => data.Reviews[i]);
      console.log(this.reviewsArray)
      if(data.espaceLoisir)
      this.loisirArray = Object.keys(data.espaceLoisir)
      .map(i => data.espaceLoisir[i]);
      if(data.followers)
      this.listFollowerss= Object.keys(data.followers)
      .map(i => data.followers[i]);
     this.nbFollowers = this.listFollowerss.length
     this.nbAvis = this.reviewsArray.length
     this.reviewsArray.forEach(
      item=>
     {this.moyenneRating= this.moyenneRating + item.rating;
      if(item.rating == 1 ) 
      this.val1++
      else if(item.rating == 2)
      this.val2++
      else if(item.rating == 3)
      this.val3++
      else if(item.rating == 4)
      this.val4++
      else if(item.rating == 5)
      this.val5++
      
    }

      
    )
    this.notes = [
      {
        value: this.val5,
        index: 5
      },
      {
        value: this.val4,
        index: 4
      },
      {
        value: this.val3,
        index: 3
      },
      {
        value: this.val2,
        index: 2
      },
      {
        value: this.val1,
        index: 1
      }
    ]
      this.moyenneRating =Math.round(this.moyenneRating/this.reviewsArray.length
      )
     
     


      


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
  goToOpinions(espaceNom){
    // this.navCtrl.push(SpaceDetailOpinionsPage);
    // this.disabled=true;
    const modal1= this.modalCtrl.create(SpaceDetailOpinionsPage,{ nom: espaceNom, cle : this.idEspace });
    console.log(espaceNom)
    modal1.present();
    modal1.onDidDismiss(()=>{
      // this.disabled=false;
    });
  }
  suivre(){
    this.listFollowers.push({
      firstName:"Ghassen",
      lastName:"ASKRI"}
    )
    /* Se désabonner 
    this.follower= this.db.list(`espace/${this.idEspace}/followers` ,ref => ref.child('firstName').equalTo('hatemaaa'))
    console.log("follower : ", this.follower)
    this.listFollowers.remove(this.follower)
    console.log(this.listFollowers) */
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
  calculer(){
    
  }

  navigateToFacebook(){
    window.location.href = 'https://www.facebook.com';
  }
  navigateToInstagram(){
    window.location.href = 'https://www.instagram.com';
  }

}
