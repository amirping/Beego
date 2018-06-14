import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { Signup1Page } from '../signup1/signup1';
import { HomePage } from '../home/home';

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
    this.navCtrl.push(Signup1Page);
  }
  skip(){
    this.navCtrl.push(HomePage);
  }

}
