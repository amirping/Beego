import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { SignupStep1Page } from '../signup_step1/signup_step1';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { SignupStep2Page } from '../signup_step2/signup_step2';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  signinForm: FormGroup;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public userProvider: UserProvider,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public formBuilder: FormBuilder) {
      this.signinForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      });
  }
  swipeTo(e){
    this.navCtrl.push(SignupStep1Page);
  }
  login(){
    const load = this.loadCtrl.create();
    load.present();
    this.userProvider.login(this.signinForm.get("email").value,this.signinForm.get("password").value)
    .then((res)=>{
      load.dismiss();
      console.log(res);
      if(!res.emailVerified){
        this.alertCtrl.create({
          title:"ERREUR",
          message:"Verfier votre email",
          buttons:['ok']
        }).present();
      }else{
        this.navCtrl.setRoot(HomePage);
      }
    })
    .catch((err)=>{
      load.dismiss();
      this.alertCtrl.create({
        title:"ERREUR",
        message:err.msg,
        buttons:['ok']
      }).present();
    });
  }
  loginWithFacebook(){
    const load = this.loadCtrl.create();
    load.present();
    this.userProvider.loginWithFacebook((user)=>{
      load.dismiss();
      this.navCtrl.push(SignupStep2Page, {user, password:null});
    },()=>{
      load.dismiss();
      this.navCtrl.setRoot(HomePage);
    },err=>{
      console.log(err);
      load.dismiss();
      this.alertCtrl.create({
        title:"ERREUR",
        message:err,
        buttons:['ok']
      }).present();
    });
  }
  loginWithGoogle(){
    const load = this.loadCtrl.create();
    load.present();
    this.userProvider.loginWithGoogle((user)=>{
      console.log(user);
      load.dismiss();
      this.navCtrl.push(SignupStep2Page, {user, password:null});
    },()=>{
      load.dismiss();
      this.navCtrl.setRoot(HomePage);
    },err=>{
      console.log(err);
      load.dismiss();
      this.alertCtrl.create({
        title:"ERREUR",
        message:err,
        buttons:['ok']
      }).present();
    });
  }
  skip(){
    this.navCtrl.setRoot(HomePage);
  }
  forgetPassword(){
    if(this.signinForm.get('email').invalid){
      this.alertCtrl.create({
        title:"ERREUR",
        message:"Enter un email valid",
        buttons:['ok']
      }).present();
    }else{
      const load = this.loadCtrl.create();
      load.present();
      this.userProvider.resetPassword(this.signinForm.get("email").value)
      .then(()=>{
        load.dismiss();
        this.alertCtrl.create({
          title:"Consulter votre boite email pour creer un nouveau mot de passe",
          buttons:["ok"]
        }).present();
      }).catch((e)=>{
        load.dismiss();
        this.alertCtrl.create({
          title:"ERROR",
          message:e.msg
        }).present();
      });
    }
  }
}
