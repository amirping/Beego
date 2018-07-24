import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
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
  openIndex:number = 0;
  indexSwipe = -1;
  listItems:Array<any>=[];
  dismiss=false;
  rating = 5 ;
  back(){
    this.navCtrl.pop();
  }

  constructor(public navCtrl: NavController,  private modalCtrl : ModalController,
    public navParams: NavParams, private viewCtrl:ViewController ) {
      this.listItems.push({
      //   name:'Folen ben folen',
      //   date:'6 mar 2018',
      //   comment:'Le Lorem Ipsum est simplement faux texte employé dans la composition et la mise en page avant impression.',
      //   commentNbr:'1',
      //   picUrl:'../../assets/imgs/photoDeProfil.png',
      //   rating:'4'
      // },
      // {
        name:'Folen ben folen',
        date:'6 mar 2018',
        comment:'Le Lorem Ipsum est simplement faux texte employé dans la composition et la mise en page avant impression.',
        commentNbr:'1',
        picUrl:'../../assets/imgs/photoDeProfil.png',
        rating:'4',
        comments:[1,2,3]
      },
      {
        name:'Folena ben folen',
        date:'6 mar 2018',
        comment:'Le Lorem Ipsum est simplement faux texte employé dans la composition et la mise en page avant impression.',
        commentNbr:'1',
        picUrl:'../../assets/imgs/photoDeProfil.png',
        rating:'4',
        comments:[1,2,3]
      })
  }
  goToFeefback1(){
    const modal1= this.modalCtrl.create(SpaceDetailFeedback1Page);
    modal1.present();
    this.viewCtrl.dismiss();
    modal1.onDidDismiss(()=>{
    });
  }
  openItem(event,index){
    console.log(event);
    this.indexSwipe = index;
    
  }
  opencomment(item ,index){
    if(item.commentShow){
      item.commentShow = false;
      return;
    }
    if( this.listItems[this.openIndex]){
      this.listItems[this.openIndex].commentShow=false;
    }
    this.openIndex=index;
    item.commentShow = true;
    console.log("test");
    
  }
  log(r){
    console.log(r)
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceDetailOpinionsPage');
  }

}
