import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProfilPage} from '../profil/profil';
import { Dialogs } from '@ionic-native/dialogs';

/**
 * Generated class for the ListOfFollowsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-of-follows',
  templateUrl: 'list-of-follows.html',
})
export class ListOfFollowsPage {
  back(){
    this.navCtrl.pop();
  }

  
  
  confirmDelete(){
    this.dialogs.confirm("Si vous le supprimer il ne sera plus sur votre list de follows "
    , "Vouler vous supprimer prenom", ['Supprimer','Annuler']);// ajouter then pour terminer l action 
    // le prenon est un variable du user qui va etre supprimer
  }


  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private dialogs: Dialogs) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListOfFollowsPage');
  }

}
