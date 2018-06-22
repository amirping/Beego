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
    public alerCtrl: AlertController,
    public formBuilder: FormBuilder) {
      this.signinForm = formBuilder.group({
        email: ['', Validators.compose([Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  swipeTo(e){
    console.log("hiiiiii");
    console.log(e);
    if(e.direction == 2){
      this.navCtrl.push(SignupStep1Page);
    }
  }
  signin(){
    const load = this.loadCtrl.create();
    load.present();
    this.userProvider.login(this.signinForm.get("email").value,this.signinForm.get("password").value)
    .then((res)=>{
      console.log(res);
      load.dismiss();
      if(!res.emailVerified){
        this.alerCtrl.create({
          title:"Email IS Not Verified",
          subTitle:"Check Your Email !!!"
        }).present();
      }else{
        this.navCtrl.setRoot(HomePage);
      }
    }).catch((err)=>{
      console.log(err);
      load.dismiss();
      this.alerCtrl.create({
        title:"Somthing IS Wrong",
        subTitle:err
      }).present();
    })
  }
  signinWithFacebook(){
    this.userProvider.loginWithFacebook((user)=>{
      console.log(user);
      this.navCtrl.push(SignupStep2Page, {user, password:null});
    },()=>{
      this.navCtrl.setRoot(HomePage);
    });
  }
  signinWithGoogle(){
    alert("signup")
    this.userProvider.loginWithGoogle((user)=>{
      alert("signup 2")
      console.log(user);
      this.navCtrl.push(SignupStep2Page, {user, password:null});
    },()=>{
      alert("signup 3")
      this.navCtrl.setRoot(HomePage);
    });
  }
  skip(){
    this.navCtrl.setRoot(HomePage);
  }
  forgetPassword(){
    if(this.signinForm.get('email').invalid){
      this.alerCtrl.create({
        title:"enter valid email"
      }).present();
    }else{
      const load = this.loadCtrl.create();
      load.present();
      this.userProvider.resetPassword(this.signinForm.get("email").value)
      .then(()=>{
        load.dismiss();
        this.alerCtrl.create({
          title:"a link was sent to your mail"
        }).present();
      }).catch((e)=>{
        load.dismiss();
        this.alerCtrl.create({
          title:"something wrong",
          subTitle:e
        }).present();
      });
    }
  }

}
