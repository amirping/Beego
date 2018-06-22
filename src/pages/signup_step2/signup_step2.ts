import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user.interface';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

/**
 * Generated class for the Singup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup_step2',
  templateUrl: 'signup_step2.html',
})
export class SignupStep2Page {
  datePickerMin:string;
  datePicker: string;
  year:string = "Année";
  month:string = "Mois";
  day:string = "Jours";
  imgSrc:string;
  file: File;
  signupForm: FormGroup;
  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public userProvider: UserProvider,
    public navParams: NavParams){
      this.signupForm = formBuilder.group({
        gender:["",Validators.required],
        birthday:["",Validators.required],
        gov:["",Validators.required],
        tel:["",Validators.compose( [Validators.required, Validators.minLength(8)])]
      });
      const date = new Date();
    date.setFullYear(date.getFullYear()-5);
    const d = date.getDate();
    const day = d<10?"0"+d:d+"";
    const m = date.getMonth()+1;
    const month = m<10?"0"+m:m+"";
    this.datePickerMin = date.getFullYear() +"-"+month+"-"+ day;
  }

  ionViewDidLoad() {
    const user = this.navParams.get("user");
    this.signupForm.controls["gender"].setValue(user.gender);
    this.imgSrc = user.photoUrl;
  }
  swipeTo(e){
      this.navCtrl.push(LoginPage);
  }
  setDate(picker){
    picker.open();
  }
  signup(){
    const password = this.navParams.get("password");
    if(password){
      this.SignupWithMailPassword();
    }else{
      this.SignupWithProvider();
    }
  }
  private SignupWithMailPassword(){
    const load = this.loadCtrl.create();
    load.present();
    const user : User = this.navParams.get("user");
      user.birthday = new Date( this.datePicker).getTime();
      user.gender = this.signupForm.get("gender").value;
      user.gov = this.signupForm.get("gov").value;
      user.tel = this.signupForm.get("tel").value;
      this.userProvider.signup(user, this.navParams.get("password"), this.file)
      .then(()=>{
        load.dismiss();
        this.userProvider.logOut();
        this.navCtrl.push(LoginPage);
      }).catch(err=>{
        load.dismiss();
        this.alertCtrl.create({
          title:"somthing is wrong",
          message:err,
          buttons:['ok']
        }).present();
        console.log(err);
      });
  }
  private SignupWithProvider(){
    const load = this.loadCtrl.create();
    load.present();
    const user : User = this.navParams.get("user");
      user.birthday = new Date( this.datePicker).getTime();
      user.gender = this.signupForm.get("gender").value;
      user.gov = this.signupForm.get("gov").value;
      user.tel = this.signupForm.get("tel").value;
      this.userProvider.signupWithProvider(user)
      .then(()=>{
        load.dismiss();
        this.navCtrl.setRoot(HomePage);
      })
      .catch(err=>{
        load.dismiss();
        this.alertCtrl.create({
          title:"somthing is wrong",
          message:err,
          buttons:['ok']
        }).present();
        console.log(err);
      });
  }
  changeDate(){
    const date = new Date(this.datePicker);
    const d = date.getDate();
    this.day = d<10?"0"+d:d+"";
    const m = date.getMonth()+1;
    this.month = m<10?"0"+m:m+"";
    this.year = date.getFullYear()+"";
  }
  upload(e){
    const reader = new FileReader();
    reader.onload = (e:any)=> {
      this.imgSrc = e.target.result;
    }
    if(e.target.files.length){
      this.file = e.target.files[0];
      reader.readAsDataURL(this.file);
    }
  }
  
}
