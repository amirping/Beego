import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { SignupStep2Page } from '../signup_step2/signup_step2';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user.interface';

/**
 * Generated class for the Singup1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup_step1',
  templateUrl: 'signup_step1.html',
})
export class SignupStep1Page {
  signupForm: FormGroup;
  constructor(public navCtrl: NavController,
    public userProvider: UserProvider,
    public formBuilder: FormBuilder,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navParams: NavParams) {
      this.signupForm = formBuilder.group({
        firstName:["",Validators.compose( [Validators.required, Validators.minLength(3)])],
        lastName:["",Validators.compose( [Validators.required, Validators.minLength(3)])],
        email:["",Validators.compose( [Validators.required, Validators.pattern(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/)])],
        password:["",Validators.compose( [Validators.required, Validators.minLength(6)])]
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupStep1Page');
  }
  next(){
    const user:User = {
      firstName: this.signupForm.get("firstName").value,
      lastName: this.signupForm.get("lastName").value,
      email: this.signupForm.get("email").value,
    };
    const password =  this.signupForm.get("password").value;
    this.navCtrl.push(SignupStep2Page, {user, password});
  }
  singupWithGoogle(){
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
        subTitle:err
      }).present();
    });
  }
  singupWithFacebook(){
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
        subTitle:err
      }).present();
    });
  }
  skip(){
    this.navCtrl.push(HomePage);
  }
}
