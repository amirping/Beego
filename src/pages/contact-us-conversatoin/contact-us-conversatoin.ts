import { Component,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Content  } from 'ionic-angular';

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
  MsgList = ["test","test","test","test","test","Lasttest"];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  sendMsg(){
    if (!this.editorMsg.trim()) return;
    this.MsgList.push(this.editorMsg);
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
      
     this.scrollToBottom();
  }

}
