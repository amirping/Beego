import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController, Events } from 'ionic-angular';
import { SpaceDetailFeedback1Page } from '../space-detail-feedback1/space-detail-feedback1';

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
  disabled;
  openIndex: number = 0;
  indexSwipe = -1;
  listItems: Array<any> = [];
  dismiss = false;
  rating = 5;
  otherOpen = false ;
  back() {
    this.events.publish('dropblur',false);
    this.viewCtrl.dismiss();
   
  }

  constructor(public navCtrl: NavController, private modalCtrl: ModalController,
    public navParams: NavParams, private viewCtrl: ViewController,
    private events: Events) {
      



    this.listItems.push({
      name: 'Folen ben folen',
      date: '6 mar 2018',
      comment: 'Le Lorem Ipsum est simplement faux texte employé dans la composition et la mise en page avant impression.',
      commentNbr: '1',
      picUrl: '../../assets/imgs/photoDeProfil.png',
      rating: '4',
      comments: [1, 2, 3]
    },
    
      {
        name: 'Folena ben folen',
        date: '6 mar 2018',
        comment: 'Le Lorem Ipsum est simplement faux texte employé dans la composition et la mise en page avant impression.',
        commentNbr: '1',
        picUrl: '../../assets/imgs/photoDeProfil.png',
        rating: '4',
        comments: [1, 2, 3]
      })
  }
  
  goToFeefback1() {
    this.otherOpen = true;
    const modal1 = this.modalCtrl.create(SpaceDetailFeedback1Page);
    modal1.present();
    this.viewCtrl.dismiss({'otherOpen':this.otherOpen});
    modal1.onDidDismiss((data)=>{
      console.log("test2"+data);
      if (data && data.otherOpen === true){
        this.events.publish('otherOpen',true);
      }
      else{
        this.events.publish('otherOpen',false);
      }
    });
  }
  openItem(event, index) {
    console.log(event);
    this.indexSwipe = index;

  }
  opencomment(item, index) {
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

}
