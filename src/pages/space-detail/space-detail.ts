import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams, AlertController, ModalController } from 'ionic-angular';
import { Observable } from '../../../node_modules/rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from '../../../node_modules/angularfire2/database';


import { SpaceDetailOpinionsPage } from '../space-detail-opinions/space-detail-opinions';
import { ContactUsPage } from "../contact-us/contact-us";
import { SpacesProvider } from '../../providers/spaces/spaces';


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

  varOpCol =false;
  varClCol = false;
  espace: Observable<any[]>
  reviews: Observable<any[]>
  espaceName: string;
  espaceRegion: string;
  espacePlace: string;
  espaceSpecialite: any[];
  espaceCuisine: string;
  espaceHoraire: string;
  espaceTelephone: string;
  espaceParking: string;
  espaceTerasse: string;
  espaceKaraoke: string;
  espaceStyle: string;
  espaceClimatisation: string;
  espaceAccesWifi: string;
  espaceReservation: string;
  espaceMeilleureSpecialite: any;
  espaceVue: string;
  espaceMatch: string;
  espaceMusique: string;
  espaceAdresse: string;
  loisirArray: any[];

  follower: any;
  idEspace: string;
  rating = 5;
  espaceDescription;
  testDate;


  uid;
  dualValue2 = 30;
  listFollowers: AngularFireList<any>;
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
  moyenneRating = 0;
  listFollowerss: any[]
  nbAvis;
  espaceImage;
  val1;
  val2;
  val3;
  val4;
  val5;
  nbreviews = 0;
  horaire : Observable<any>;
  horaireOuverture;
  horaireFermeture;
  dateDuJour;
  ouverte = "Fermée";
  horaireDuJour;
  followers;
  following="suivre";
  abonné="Vous êtes maintenant abonné à nous"
  lastName;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFireDatabase,
    private alertController: AlertController,
    private modalCtrl: ModalController,
    private spaceProvider : SpacesProvider

  ) {
    this.spaceProvider.getUser((data)=>{
      this.lastName=data.user.lastName
    })
    console.log("following?",this.following)
    this.dateDuJour=new Date().toDateString().substring(0,3)
    this.horaireDuJour=new Date().toISOString().substring(11, 19);
    console.log("horaire",this.horaireDuJour)

    this.uid = this.navParams.get('uid');
    
    console.log("la date d'aujourd'hui est",this.dateDuJour)

    console.log("ancienne", this.moyenneRating)

    this.idEspace = this.navParams.get('cle');
    console.log("cle espace", this.idEspace)
    this.reviews = this.db.list(`reviews/${this.idEspace}`)
      .snapshotChanges().map(changes => {
        return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      });
      console.log("uid",this.uid,"idEspace",this.idEspace)
    this.db.list(`spaceFollowers/${this.uid}/${this.idEspace}`).valueChanges().subscribe((user : any)=>{
      console.log('usr',user)
      if(user.length!=0){
        this.following= "Ne pas suivre";
        this.abonné="Vous êtes maintenant désabonné de nous "
      }
    })
    
    this.db.object(`espace/${this.idEspace}`).valueChanges().subscribe((data: any) => {
      this.testDate = Date.now().toString()
      console.log("date",this.testDate)
      


      this.espace = Object(data)

      this.espaceName = data.espaceName
      this.espaceImage = data.espaceImage
      this.espacePlace = data.espacePlace
      this.espaceRegion = data.espaceRegion
      if (data.espaceSpecialite)
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
      this.spaceProvider.getSpecialite(this.idEspace,(details)=>{
        this.espaceMeilleureSpecialite= details.specialite.specialiteName
      })
      
      this.varOpCol = true;
        this.varClCol = true;
     


     
      
      this.horaireOuverture=data.horaireOuverture
      
      this.horaireFermeture=data.horaireFermeture
      if(data.jourDeTravail){
        this.horaire= data.jourDeTravail
      this.horaire.forEach(element => {
        
        console.log(element)
        if(this.dateDuJour==element)
         {
           if (this.horaireDuJour>this.horaireOuverture && this.horaireDuJour<this.horaireFermeture)
           console.log("saut")
           this.varOpCol = false;
           this.varClCol = false; 
         }
        
      });}



      if (data.espaceLoisir)
        this.loisirArray = Object.keys(data.espaceLoisir)
          .map(i => data.espaceLoisir[i]);
          this.nbreviews=data.nbreviews
          this.moyenneRating=data.rating
      if (data.followers)
      this.nbFollowers = data.followers
      

      this.reviews.forEach(

        item => {
       
          this.val1 = 0;
          this.val2 = 0;
          this.val3 = 0;
          this.val4 = 0;
          this.val5 = 0;
          item.forEach(element => {

           

           


            if (element.rating == 1)
              this.val1++
            else if (element.rating == 2)
              this.val2++
            else if (element.rating == 3)
              this.val3++
            else if (element.rating == 4)
              this.val4++
            else if (element.rating == 5)
              this.val5++

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
          })
         

        }

      )

    })

    console.log(this.idEspace)


    this.data = this.evenement;
    this.listFollowers = this.db.list(`espace/${this.idEspace}/followers`);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailPage');
  }
  back() {
    this.navCtrl.pop()
  }
  goToOpinions(espaceNom) {
    // this.navCtrl.push(SpaceDetailOpinionsPage);
    // this.disabled=true;
    const modal1 = this.modalCtrl.create(SpaceDetailOpinionsPage, { nom: espaceNom, cle: this.idEspace,lastName:this.lastName });
    console.log(espaceNom)
    modal1.present();
    modal1.onDidDismiss(() => {
      // this.disabled=false;
    });
  }
  suivre() {
    
    this.spaceProvider.followSpace(this.idEspace)
    /* Se désabonner 
    this.follower= this.db.list(`espace/${this.idEspace}/followers` ,ref => ref.child('firstName').equalTo('hatemaaa'))
    console.log("follower : ", this.follower)
    this.listFollowers.remove(this.follower)
    console.log(this.listFollowers) */
    let alert = this.alertController.create({
      title: this.espaceName,
      message: this.abonné,
      buttons: [
        {
          text: "Ok"
        }
      ]
    })

    alert.present()


  }
  calculer() {

  }

  navigateToFacebook() {
    window.location.href = 'https://www.facebook.com';
  }
  navigateToInstagram() {
    window.location.href = 'https://www.instagram.com';
  }
  navigateToContact(){
    this.navCtrl.push(ContactUsPage,{ nom: this.espaceName, cle: this.idEspace,photo : this.espaceImage });
   }
   
 

}
