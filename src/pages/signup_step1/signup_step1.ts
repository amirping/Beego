import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupStep2Page } from '../signup_step2/signup_step2';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserProvider } from '../../providers/user/user';

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
    const user = {
      firstName: this.signupForm.get("firstName").value,
      lastName: this.signupForm.get("lastName").value,
      email: this.signupForm.get("email").value,
    };
    const password =  this.signupForm.get("password").value;
    this.navCtrl.push(SignupStep2Page, {user, password});
  }
  loginWithGoogle(){
    this.userProvider.loginWithGoogle((user)=>{
      console.log(user);
      this.navCtrl.push(SignupStep2Page, {user, password:null});
    },()=>{
      this.navCtrl.setRoot(HomePage);
    });
  }
  skip(){
    this.navCtrl.push(HomePage);
  }
}