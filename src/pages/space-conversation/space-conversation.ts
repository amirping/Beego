import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';

/**
 * Generated class for the SpaceConversationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-space-conversation',
  templateUrl: 'space-conversation.html',
})
export class SpaceConversationPage {
  @ViewChild(Content) content: Content;
  el:HTMLElement ;
  editorMsg ='';
  MsgList : Array<any> = [];
  date:String;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
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
  back(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SpaceConversationPage');
  setTimeout(() => {
    if (this.content.scrollToBottom) {
      this.content.scrollToBottom();
    }
  }, 400)
  }

}
