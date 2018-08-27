import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '../../../node_modules/angularfire2/database';
import { ContactUsConversatoinPage } from "../contact-us-conversatoin/contact-us-conversatoin";
import { SpacesProvider } from '../../providers/spaces/spaces';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  listContact : AngularFireList<any>
  idEspace ;
  nom;
  photo;
  constructor(public navCtrl: NavController, public navParams: NavParams,private db:AngularFireDatabase,private spacesProvider: SpacesProvider) {
    this.photo = this.navParams.get('photo')
    this.idEspace=this.navParams.get('cle')
    this.nom=this.navParams.get('nom')


    this.listContact=this.db.list(`espace/${this.idEspace}/contact`)
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsPage');
  }
  back(){
    this.navCtrl.pop()
  }
  redirectToConversation(){
    
  }
  salut(){
    console.log('show me your tits')
  }
  contact(message){
    this.spacesProvider.contactSpace(this.idEspace,message)
    console.log(Date.now())
    this.navCtrl.push(ContactUsConversatoinPage,{ nom: this.nom, cle: this.idEspace , photo:this.photo })
  }

}
