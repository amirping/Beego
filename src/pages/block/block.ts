import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Dialogs } from '@ionic-native/dialogs';


/**
 * Generated class for the BlockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-block',
  templateUrl: 'block.html',
})
export class BlockPage {
  index;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private dialogs: Dialogs) {
      this.index=1;
  }
  back(){
    this.navCtrl.pop();
  }
  confirmDebloque(){
    this.dialogs.confirm("Si vous le debloquer il ne sera plus .. "
    , "Vouler vous débloqué prenom", ['Supprimer','Annuler']);// ajouter then pour terminer l action 
    // le prenon est un variable du user qui va etre supprimer
  }
  confirmAutorisation(){
    this.dialogs.confirm("Vouler vous autorisé prenom de vous envoyer de notifications"
    , "", ['Supprimer','Annuler']);// ajouter then pour terminer l action 
    // le prenon est un variable du user qui va etre supprimer
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BlockPage');
  }

}
