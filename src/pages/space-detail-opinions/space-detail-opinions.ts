import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Events } from 'ionic-angular';
import { SpaceDetailFeedback1Page } from '../space-detail-feedback1/space-detail-feedback1';
import { AngularFireDatabase,AngularFireList } from '../../../node_modules/angularfire2/database';
import { Observable } from '../../../node_modules/rxjs/Observable';

/**
 * Generated class for the SpaceDetailOpinionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-detail-opinions',
  templateUrl: 'space-detail-opinions.html',
})
export class SpaceDetailOpinionsPage {
  backrdropblur;
  reviews: Observable<any[]>
  comments: any;
  commentsPush:AngularFireList<any>;
  disabled;
  openIndex: number = 0;
  indexSwipe = -1;
  listItems: Array<any> = [];
  dismiss = false;
  rating = 5;
  otherOpen = false;
  nom;
  idEspace;
  lastName;
  back() {
    this.events.publish('dropblur', false);
    this.viewCtrl.dismiss();

  }

  constructor(public navCtrl: NavController, private modalCtrl: ModalController,
    public navParams: NavParams, private viewCtrl: ViewController,
    private events: Events, private db: AngularFireDatabase) {
    this.nom = this.navParams.get('nom')
    this.lastName =this.navParams.get('lastName')
    this.idEspace = this.navParams.get('cle');
    console.log("cle espace opinions", this.idEspace)
    this.reviews = this.db.list(`reviews/${this.idEspace}`)
    .snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
    })
      
      console.log(this.comments)
  }

  goToFeefback1() {
    this.otherOpen = true;
    const modal1 = this.modalCtrl.create(SpaceDetailFeedback1Page, { nom: this.nom, cle: this.idEspace,lastName:this.lastName });
    modal1.present();
    this.viewCtrl.dismiss({ 'otherOpen': this.otherOpen });
    modal1.onDidDismiss((data) => {
      console.log("test2" + data);
      if (data && data.otherOpen === true) {
        this.events.publish('otherOpen', true);
      }
      else {
        this.events.publish('otherOpen', false);
      }
    });
  }
  openItem(event, index) {
    console.log(event);
    this.indexSwipe = index;

  }
  opencomment(item, index) {
    this.comments= this.db.list(`reviews/${index}/comments`).valueChanges();
    if (item.commentShow) {
      item.commentShow = false;
      return;
    }
    if (this.listItems[this.openIndex]) {
      this.listItems[this.openIndex].commentShow = false;
    }
    this.openIndex = index;
    item.commentShow = true;
    console.log("test");

  }
  log(r) {
    console.log(r)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailOpinionsPage');
  }
  addComment(index,comment=""){
    this.commentsPush= this.db.list(`reviews/${index}/comments`);
    this.commentsPush.push({
      comment:comment,
      date: new Date().toISOString().substring(0, 10),
      firstName:"Hatem",
      lastName:"Abbes"

    });
    console.log(comment)
    comment = "hatem"
    console.log(comment)
    
    
  }

}
