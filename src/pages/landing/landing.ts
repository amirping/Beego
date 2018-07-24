import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupStep1Page } from '../signup_step1/signup_step1';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  constructor(public navCtrl: NavController) {

  }
  login(){
    this.navCtrl.push(LoginPage);
  }
  signup(){
    this.navCtrl.push(SignupStep1Page);
  }
  skip(){
    this.navCtrl.push(TabsPage);
  }

}
