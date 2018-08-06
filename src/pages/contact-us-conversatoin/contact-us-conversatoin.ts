import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Content  } from 'ionic-angular';
import { AngularFireDatabase, AngularFireList } from '../../../node_modules/angularfire2/database';
import { Observable } from '../../../node_modules/rxjs/Observable';

/**
 * Generated class for the ContactUsConversatoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us-conversatoin',
  templateUrl: 'contact-us-conversatoin.html',
})
export class ContactUsConversatoinPage {
  @ViewChild(Content) content: Content;
  el:HTMLElement ;
  editorMsg ='';
  //  time:number;
  MsgList : Array<any> = [];
  date:String;
  conversation : Observable<any>
  idEspace
  nom
  constructor(public navCtrl: NavController, public navParams: NavParams, private db :AngularFireDatabase) {
    this.idEspace = this.navParams.get('cle')
    this.nom = this.navParams.get('nom')
    this.conversation = this.db.list(`espace/${this.idEspace}/contact`,
    item=>item.orderByChild('firstName').equalTo('hatem')).valueChanges()
  }
  sendMsg(){
    if (!this.editorMsg.trim()) return;
    this.MsgList.push({
      newmsg: this.editorMsg,
      date:   new Date().toISOString(),
    })
    // push(this.editorMsg );
    this.editorMsg = '';
    // this.el = document.getElementById("target") as HTMLElement;      
    // this.el.scrollIntoView();
    this.scrollToBottom();
  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactUsConversatoinPage');
      // this.el = document.getElementById("target") as HTMLElement;
      
      // this.el.scrollIntoView();
      
    //  this.scrollToBottom();
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }
  back(){
    this.navCtrl.pop()
  }

}
